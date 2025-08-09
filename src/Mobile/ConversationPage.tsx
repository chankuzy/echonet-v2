import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MoreVertical } from "lucide-react";
import { ChatBubble } from "../components/ChatBubble";
import { ChatInput } from "../features/chat/components/ChatInput";
import { useChat } from "../hooks/useChat"; // Adjust the path as needed

export const ConversationPage = () => {
  const { conversationId } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Custom hook for chat data and actions
  const {
    currentConversation,
    messages,
    handleSend,
    status,
    isTyping
  } = useChat(conversationId || '');

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!currentConversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Conversation not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      {/* Chat Header */}
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 border-b dark:border-gray-800 flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center gap-2 flex-1">
          <div className="relative">
            <img
              src={currentConversation.participant.avatar}
              className="w-9 h-9 rounded-full object-cover"
              alt={currentConversation.participant.name}
            />
            {currentConversation.participant.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-medium truncate">
              {currentConversation.participant.name}
            </h2>
            <p className="text-xs text-gray-500 truncate">
              {isTyping ? "Typing..." : status}
            </p>
          </div>
        </div>
        
        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <MoreVertical size={20} />
        </button>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message}
            isCurrentUser={message.sender.id === "current-user"}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Sticky Input */}
      <ChatInput onSend={handleSend} />
    </div>
  );
};