import { useState } from 'react';
import { ChatbotService } from '../services/chatbot/ChatbotService';

export const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatbotService = new ChatbotService();

  const sendMessage = async (message) => {
    try {
      setIsLoading(true);
      
      // Add user message
      const userMessage = {
        content: message,
        isUser: true,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, userMessage]);

      // Get AI response
      const response = await chatbotService.sendMessage(message);
      
      // Add AI response
      const aiMessage = {
        content: response,
        isUser: false,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      const errorMessage = {
        content: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage
  };
};