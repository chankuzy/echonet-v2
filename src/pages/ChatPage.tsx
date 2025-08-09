import { useState } from 'react';
import { mockConversations, mockUser, type Message } from '../features/chat/mockData';
import { ConversationList } from '../features/chat/components/ConversationList';
import { ChatBubble } from '../features/chat/components/ChatBubble';
import { ChatInput } from '../features/chat/components/ChatInput';

export const ChatPage = () => {
  const [activeConversation, setActiveConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  // Mock message handler
  const handleSend = (content: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: mockUser,
      message: content,
      timestamp: new Date(),
      status: 'sent'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="dark:text-white/90 flex h-[calc(100vh-60px)] bg-white dark:bg-gray-900">
      <ConversationList
        conversations={mockConversations}
        onSelect={(id) => {
          setActiveConversation(id);
          // Reset messages when changing conversation
          setMessages([]);
        }}
      />

      {activeConversation ? (
        <div className="flex-1 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <ChatBubble
                key={msg.id}
                message={msg}
                isCurrentUser={msg.sender.id === mockUser.id}
              />
            ))}
          </div>

          {/* Input */}
          <ChatInput onSend={handleSend} />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <div className="text-center p-6">
            <h3 className="text-xl font-medium mb-2">Select a conversation</h3>
            <p className="text-gray-500">Choose from your existing chats or start a new one</p>
          </div>
        </div>
      )}
    </div>
  );
};