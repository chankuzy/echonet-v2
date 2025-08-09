import { motion } from "framer-motion";
import { useMemo } from "react";

export const ConversationItem = ({
  conversation,
  onClick
}: {
  conversation: any;
  onClick: () => void;
}) => {
  const timeString = useMemo(() => {
    return new Date(conversation.lastMessage.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
    }, [conversation.lastMessage.timestamp]);

  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
      className="p-3 border-b dark:border-gray-800 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={conversation.participant.avatar}
            className="w-12 h-12 rounded-full object-cover"
            alt={conversation.participant.name}
          />
          {conversation.participant.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <h3 className="font-medium truncate">
              {conversation.participant.name}
            </h3>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {timeString}
            </span>
          </div>
          
          <p className="text-sm text-gray-500 truncate">
            {conversation.lastMessage.content}
          </p>
        </div>
        
        {conversation.unreadCount > 0 && (
          <div className="w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs">
            {conversation.unreadCount}
          </div>
        )}
      </div>
    </motion.div>
  );
};