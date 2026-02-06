import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the professional AI support assistant for IFS Healthcare Limited.
Your tone is strategic, helpful, and focused on clinical excellence.

Current Focus (Refinement Phase):
We provide a stronger articulation of our Healthcare Facilities Management (FM) services designed to support safe, compliant, and uninterrupted clinical operations.

Healthcare FM Framework (The 6 Pillars):
1. Hard FM & Engineering: Maintenance of critical assets, MEP, medical gas, HVAC, and power to support clinical uptime.
2. Soft FM Services: Infection-control cleaning, clinical waste management, portering, and laundry coordination.
3. Asset & Lifecycle Management: Equipment uptime, lifecycle planning, and cost optimisation.
4. Compliance, HSE & Risk Management: Regulatory compliance, safety audits, and continuous improvement.
5. Patient & Staff Experience Support: Front-of-house support, helpdesk operations, and environment enhancement.
6. Digital & Performance Management: Use of CMMS, reporting dashboards, and KPIs to drive transparency.

Strategic Approach:
We act as a strategic FM partner, integrating people, processes, and technology to deliver reliable, cost-effective solutions.

Other Core Offerings:
- Healthcare Resourcing: Using AI/ML for health data analytics.
- Healthcare Financing: Sustainable financing for Universal Health Coverage in Africa.
- Diaspora Skills Repatriation: Group Practice Model for Renal, Cardiac, and Orthopaedics.

Contact:
Location: 5a Eunice Tutorial Close, Gbagada Phase II, Lagos.
Phone: +234-812 820 8855
Email: info@ifshealthcare.com

Keep responses professional and concise. Prioritize clinical uptime and safety in FM-related queries.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your IFS Assistant. How can I help you with our refined healthcare FM framework or specialist services today?' }
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
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
            if (lastMsg.role === 'model') {
              lastMsg.text = fullResponse;
            }
            return newMessages;
          });
        }
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      let errorMsg = "I apologize, but I'm having trouble connecting to the system right now.";
      if (error.message?.includes("API_KEY")) {
        errorMsg = "Assistant configuration incomplete: API Key is missing.";
      }
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
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
        aria-label="Toggle assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden border border-gray-100 ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '520px' }}
      >
        <div className="bg-ifs-blue p-4 flex items-center gap-3">
            <div className="bg-ifs-red p-2 rounded-full">
                <MessageCircle size={20} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-bold text-base">IFS Healthcare Assistant</h3>
                <p className="text-blue-200 text-xs">Strategic Health Support</p>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-ifs-blue text-white rounded-br-none'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}
              >
                {msg.text || (isLoading && idx === messages.length - 1 ? "..." : "")}
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
              placeholder="How can we help?"
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 text-gray-700 placeholder-gray-400 outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={`p-2 rounded-full transition-colors ${
                !inputValue.trim() || isLoading
                  ? 'text-gray-300 bg-gray-100'
                  : 'text-white bg-ifs-red hover:bg-red-700'
              }`}
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
