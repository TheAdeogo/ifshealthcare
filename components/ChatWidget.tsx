import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a helpful AI support assistant for IFS Healthcare Limited.
Use the following company information to answer user queries:

About Us: IFS Healthcare Limited is a health sector focused organization providing specialized services to private and public sectors.
Mission: To enable sustainable profitable enterprise performance through the whole life management of physical assets and productive workplace and provision of effective business support services.
Vision: To become the largest facilities management, project management and business support organisation in Nigeria, Africa and the Middle East.
Core Values: Service, Expertise, Entrepreneurship, Timelessness.

Services:
1. Healthcare Facilities Management: Reducing losses, saving time/effort, efficient facility usage.
2. Healthcare Resourcing: Providing accurate health data, analytics, data-driven solutions using AI/ML.
3. Healthcare Financing: Raising funds, reducing financial barriers, efficient fund allocation.
4. Diaspora Skills Repatriation: Specialist services in Renal, Cardiac, and Orthopaedics using robotics. Group Practice model.

Team:
Dr. Tunde Ayeye (Group MD)
Bukola Makinde (Lead Consultant)
Mary Ikechukwu (Marketing Comms)
Prof. Yemi Laosebikan (Clinical Innovations)
Dr. Dale Ogunbayo (Medical & Allied Service)

Contact:
Address: 5a Eunice Tutorial Close, Gbagada Phase II, Gbagada, Lagos.
Phone: +234-812 820 8855
Email: info@ifshealthcare.com

Be polite, professional, and concise. Your brand colors are Blue and Dark Red.`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! How can I help you with IFS Healthcare services today?' }
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

  const initializeChat = () => {
    if (!chatSessionRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatSessionRef.current = ai.chats.create({
                model: 'gemini-3-pro-preview',
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                },
            });
        } catch (error) {
            console.error("Failed to initialize chat", error);
        }
    }
  };

  useEffect(() => {
      initializeChat();
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) initializeChat();
      
      if (chatSessionRef.current) {
          const result = await chatSessionRef.current.sendMessageStream({ message: userMessage });
          
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
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm having trouble connecting right now. Please try again later." }]);
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
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-ifs-red rotate-90' : 'bg-ifs-blue'
        } text-white`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col overflow-hidden border border-gray-100 ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '500px' }}
      >
        {/* Header */}
        <div className="bg-ifs-blue p-4 flex items-center gap-3">
            <div className="bg-ifs-red p-2 rounded-full">
                <MessageCircle size={20} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-bold text-base">IFS Assistant</h3>
                <p className="text-blue-200 text-xs">How can we help you today?</p>
            </div>
        </div>

        {/* Messages Area */}
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
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-ifs-red" />
                    <span className="text-xs text-gray-400">Processing...</span>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 focus-within:border-ifs-red focus-within:ring-1 focus-within:ring-ifs-red/20 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
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
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;