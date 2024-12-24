import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import ChatHeader from './components/ChatHeader';
import { useChatbot } from '../../hooks/useChatbot';

const ChatWindow = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);
  const { messages, isLoading, sendMessage } = useChatbot();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (message) => {
    if (message.trim()) {
      await sendMessage(message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden transition-all duration-300 z-50 ${
        isExpanded ? 'w-[500px] h-[600px]' : 'w-[380px] h-[500px]'
      }`}
    >
      <ChatHeader 
        onClose={onClose}
        isExpanded={isExpanded}
        onToggleExpand={() => setIsExpanded(!isExpanded)}
      />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-130px)]">
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg.content}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
            />
          ))}
          {isLoading && (
            <ChatMessage
              message="Thinking..."
              isUser={false}
              isLoading={true}
            />
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
    </motion.div>
  );
};

export default ChatWindow;