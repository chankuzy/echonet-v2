import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Edit, MoreHorizontal } from "lucide-react";
import { ConversationItem } from '../components/ConversationItem'; // Adjust the import path as needed
import { useConversations } from "../hooks/useConversations"; // Custom hook

export const MessagesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { conversations, loading } = useConversations();

  const filteredConversations = conversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 border-b dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Edit size={20} />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search messages"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p>Loading conversations...</p>
          </div>
        ) : filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              onClick={() => navigate(`/messages/${conversation.id}`)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <Search size={40} className="text-gray-400 mb-4" />
            <h3 className="text-lg font-medium">No conversations found</h3>
            <p className="text-gray-500">
              {searchQuery ? "Try a different search" : "Start a new conversation"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};