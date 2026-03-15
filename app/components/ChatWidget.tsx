"use client";

import { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import React from 'react';




const ChatWidget: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('hi');
  const [messages, setMessages] = useState<
    { from: 'user' | 'agent'; text: string }[]
  >([
    // {
    //   from: 'agent',
    //   text: 'Hi, I am Alex, the Truemind Labs AI assistant. How can I help you today?',
    // },
  ]);
  const [isSending, setIsSending] = useState(false);
  const [sessionId] = useState(() => {
    if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }
    return `session_${Date.now().toString(36)}_${Math.random()
      .toString(36)
      .slice(2)}`;
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [notificationMsgAudio, setNotificationMsgAudio] = useState<HTMLAudioElement | null>(null);
  // const [botOpenAudio, setBotOpenAudio] = useState<HTMLAudioElement | null>(null);


  useEffect(() => {
    // This code only runs in the browser
    const audioInstance = new Audio('/notification-msg.wav');
    audioInstance.volume = 0.5;
    setNotificationMsgAudio(audioInstance);
    trackIp();
  }, []);

  const trackIp = async ()=>{
    await fetch(
      'https://gosrahul21-n8n.hf.space/webhook/trackIp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
        }),
      }
    );
  }

  const onMessageReceived = ()=>{
    try {
      setChatOpen(true);
      notificationMsgAudio?.play().catch(() => {
        // Ignore playback errors (e.g., autoplay blocked)
      });
    } catch {
      // Ignore audio errors
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if(!notificationMsgAudio) return;
    // setTimeout(() => {
      // onMessageReceived();
      // setChatInput('hi');
      handleSendMessage();
    // }, 3000);
  }, [notificationMsgAudio]);

  // Auto-open chat and play a subtle notification sound on first visit


  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim() || isSending) return;

    const userMessage = { from: 'user' as const, text: chatInput.trim() };
    if (messages.length > 0) {
      setMessages((prev) => [...prev, userMessage]);
    }
    setChatInput('');

          // Start empty agent message that we'll stream into
          let currentAgentText = '';
          setMessages((prev) => [...prev, { from: 'agent' as const, text: '' }]);
      
    setIsSending(true);

    try {
      const response = await fetch(
        'https://gosrahul21-n8n.hf.space/webhook/agentcall',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            message: userMessage.text,
          }),
        }
      );

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';


      const updateAgentMessage = (appendText: string) => {
        currentAgentText += appendText;
        setMessages((prev) => {
          const updated = [...prev];
          // Last message is the streaming agent message
          const lastIndex = updated.length - 1;
          if (lastIndex >= 0 && updated[lastIndex].from === 'agent') {
            updated[lastIndex] = {
              ...updated[lastIndex],
              text: currentAgentText,
            };
          }
          return updated;
        });
      };


      onMessageReceived();
      // Stream NDJSON-style response
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          try {
            const parsed = JSON.parse(trimmed);
            if (parsed.type === 'item' && typeof parsed.content === 'string') {
              updateAgentMessage(parsed.content);
            }
          } catch {
            // Ignore malformed lines
          }
        }
      }

      // Process any remaining buffered line
      const remaining = buffer.trim();
      if (remaining) {
        try {
          const parsed = JSON.parse(remaining);
          if (parsed.type === 'item' && typeof parsed.content === 'string') {
            updateAgentMessage(parsed.content);
          }
        } catch {
          // ignore
        }
      }

    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: 'agent',
          text: 'Sorry, something went wrong while connecting to the agent. Please try again or reach us at +91 70045 72140.',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const lastMessage = messages.length? messages[messages.length - 1]:null;
  const isAgentTyping =
    isSending &&
    lastMessage &&
    lastMessage.from === 'agent' &&
    lastMessage.text === '';

  // Always keep the latest message in view
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

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
                <p className="text-sm font-bold">Alex</p>
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
                {msg.text && <div
                  className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>}
              </div>
            ))}
            {isAgentTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl max-w-[80%] bg-white border border-slate-200 rounded-bl-sm">
                  <div className="flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
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
              disabled={!chatInput.trim() || isSending}
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

