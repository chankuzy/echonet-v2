import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import type { Conversation } from '../mockData';

export const ConversationList = ({
  conversations,
  onSelect
}: {
  conversations: Conversation[];
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="h-full flex flex-col border-r dark:border-gray-800">
      {/* Search Bar */}
      <div className="p-4 border-b dark:border-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search conversations"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full"
          />
        </div>
      </div>

      {/* Conversation Items */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <motion.div
            key={conv.id}
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.03)' }}
            className="p-4 border-b dark:border-gray-800 cursor-pointer"
            onClick={() => onSelect(conv.id)}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={conv.participants[0].avatar}
                  alt={conv.participants[0].name}
                  className="w-12 h-12 rounded-full"
                />
                {conv.participants[0].isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{conv.participants[0].name}</h3>
                <p className="text-sm text-gray-500 truncate">
                  {/* {conv.lastMessage.content} */}
                </p>
              </div>
              <div className="text-xs text-gray-400">
                {conv.lastMessage.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};