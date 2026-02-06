import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the professional AI support assistant for IFS Healthcare Limited.
Your tone is strategic, helpful, and focused on clinical excellence.

### INTERACTION RULES:
1. **Direct Answer First**: Always address the user's specific question or intent immediately.
2. **No Scripted Recitation**: Do not simply dump the entire 6-Pillar framework or company profile unless specifically asked for an overview.
3. **Contextual Relevance**: Only mention specific services (e.g., Hard FM, Financing, Diaspora Repatriation) if they are relevant to the user's query.
4. **Conversational Variety**: Use natural phrasing. If a user says "Hi", respond like a human assistant, not a brochure.
5. **Conciseness**: Keep responses targeted. Use bullet points for lists only when necessary.

### KNOWLEDGE BASE:
IFS Healthcare Limited Focus: Strategic Facilities Management (FM) for clinical uptime and safety.

Healthcare FM Framework (The 6 Pillars):
1. Hard FM & Engineering: Maintenance of critical assets, MEP, medical gas, HVAC.
2. Soft FM Services: Infection-control cleaning, waste management, portering.
3. Asset & Lifecycle Management: Equipment uptime and cost optimization.
4. Compliance, HSE & Risk Management: Regulatory audits and safety.
5. Patient & Staff Experience Support: Front-of-house and helpdesk.
6. Digital & Performance Management: CMMS and data dashboards.

Strategic Offerings:
- Healthcare Resourcing: AI/ML health data analytics.
- Healthcare Financing: UHC solutions in Africa.
- Diaspora Skills Repatriation: Group Practice Model for Specialists.

Contact: 5a Eunice Tutorial Close, Gbagada Phase II, Lagos. | +234-812 820 8855 | info@ifshealthcare.com`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <div className="whitespace-pre-wrap break-words">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-ifs-blue">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </div>
  );
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your IFS Assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getChatSession = () => {
    if (!chatSessionRef.current) {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API_KEY_MISSING");
      
      const ai = new GoogleGenAI({ apiKey });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8, // Increased for more varied, natural responses
          topP: 0.95,
          topK: 40
        },
      });
    }
    return chatSessionRef.current;
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChatSession();
      const result = await chat.sendMessageStream({ message: userMessage });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of result) {
        const text = (chunk as GenerateContentResponse).text;
        if (text) {
          fullResponse += text;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg.role === 'model') lastMsg.text = fullResponse;
            return newMessages;
          });
        }
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      let errorMsg = "I apologize, but I'm having trouble connecting. Please try again in a moment.";
      if (error.message === "API_KEY_MISSING") errorMsg = "Configuration Error: API Key missing.";
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
      chatSessionRef.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-ifs-red rotate-90' : 'bg-ifs-blue'
        } text-white`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden border border-gray-100 ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '520px' }}
      >
        <div className="bg-ifs-blue p-4 flex items-center gap-3">
            <div className="bg-ifs-red p-2 rounded-full">
                <MessageCircle size={20} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-bold text-base">IFS Assistant</h3>
                <p className="text-blue-200 text-xs">Strategic Health Support</p>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' ? 'bg-ifs-blue text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
              }`}>
                <FormattedMessage text={msg.text || (isLoading && idx === messages.length - 1 ? "..." : "")} />
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-ifs-red focus-within:ring-1 focus-within:ring-ifs-red/20 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 text-gray-700 outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`p-2 rounded-full transition-colors ${!inputValue.trim() || isLoading ? 'text-gray-300 bg-gray-100' : 'text-white bg-ifs-red hover:bg-red-700'}`}
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
