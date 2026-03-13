import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, Loader2, Linkedin, Mail, Briefcase, Code } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { resumeData } from '../data';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: `Hi! I'm Aniruddha's AI assistant. How can I help you today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
          {
            role: "user",
            parts: [{ text: `
              You are an AI assistant for Aniruddha Hossen's portfolio. 
              Use the following resume data to answer questions accurately and professionally.
              If you don't know the answer based on the data, say you're not sure but offer to help with what you do know.
              Keep responses concise and friendly.

              Resume Data:
              ${JSON.stringify(resumeData, null, 2)}

              User Question: ${text}
            ` }]
          }
        ],
      });

      const botMessage: Message = { 
        role: 'bot', 
        content: response.text || "I'm sorry, I couldn't process that. Could you try again?" 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { label: 'Contact Me', icon: Mail, action: () => handleSend("How can I contact Aniruddha?") },
    { label: 'LinkedIn', icon: Linkedin, action: () => handleSend("What is Aniruddha's LinkedIn profile?") },
    { label: 'Experience', icon: Briefcase, action: () => handleSend("Tell me about Aniruddha's professional experience.") },
    { label: 'Skills', icon: Code, action: () => handleSend("What are Aniruddha's top technical skills?") },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-accent text-black rounded-full shadow-2xl hover:shadow-accent/20 transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] max-h-[70vh] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-900 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">AniruddhaGPT</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-white/40 uppercase tracking-widest font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-accent/20' : 'bg-white/5'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-accent" /> : <Bot className="w-4 h-4 text-white/60" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-accent text-black font-medium rounded-tr-none' 
                        : 'bg-white/5 text-white/80 border border-white/10 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-white/60" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none">
                      <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide border-t border-white/5">
              {quickActions.map((item, i) => (
                <button
                  key={i}
                  onClick={item.action}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] text-white/60 whitespace-nowrap transition-all"
                >
                  <item.icon className="w-3 h-3 text-accent" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent disabled:text-white/20 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
