"use client";

import { useState } from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import React from 'react';

const ChatWidget: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<
    { from: 'user' | 'agent'; text: string }[]
  >([
    {
      from: 'agent',
      text: 'Hi, I am the Truemind Labs AI assistant. How can I help you today?',
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { from: 'user' as const, text: chatInput.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setChatInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'agent' as const,
          text: 'Thanks for reaching out! A human from our team will follow up shortly. You can also call +91 70045 72140 for faster help.',
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {chatOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden h-[600px]">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">Truemind AI Agent</p>
                <p className="text-[11px] text-emerald-300 font-mono">
                  Online · typically replies in seconds
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-slate-300 hover:text-white text-xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="flex-1 max-h-[500px] overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            className="border-t border-slate-200 bg-white px-3 py-2 flex items-center gap-2"
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about pricing, ROI or voice AI..."
              className="flex-1 text-sm px-3 py-2 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
              disabled={!chatInput.trim()}
              aria-label="Send message"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setChatOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-105"
        aria-label="Open chat with Truemind AI agent"
      >
        <Bot className="w-7 h-7" />
      </button>
    </div>
  );
};

export default ChatWidget;

