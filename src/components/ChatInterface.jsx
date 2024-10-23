import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const ChatInterface = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      // Here you would typically send the message to your chat endpoint
      // For now, we'll just add it to the messages array
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      
      // Simulate a response from the chat bot
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "Thanks for your message! Our team will get back to you soon.", sender: 'bot' }]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden z-50">
      <div className="bg-green-800 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold">Chat with us</h3>
        <button onClick={onClose} className="text-white hover:text-green-200">
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button type="submit" className="bg-green-800 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;