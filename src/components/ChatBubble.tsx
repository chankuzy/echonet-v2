import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";

export const ChatBubble = ({
  message,
  isCurrentUser
}: {
  message: any;
  isCurrentUser: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-3 mx-4`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl relative ${
          isCurrentUser
            ? "bg-primary-500 text-white rounded-br-none"
            : "bg-gray-100 dark:bg-gray-700 rounded-bl-none"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        
        <div className={`text-xs mt-1 flex items-center justify-end gap-1 ${
          isCurrentUser ? "text-primary-100" : "text-gray-500"
        }`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          {isCurrentUser && (
            <span className="ml-1">
              {message.status === "read" ? (
                <CheckCheck size={14} className="text-blue-300" />
              ) : (
                <Check size={14} />
              )}
            </span>
          )}
        </div>
        
        {/* Speech bubble tail */}
        <div className={`absolute bottom-0 ${
          isCurrentUser ? "-right-1" : "-left-1"
        } w-3 h-3 overflow-hidden`}>
          <div className={`absolute w-4 h-4 rotate-45 ${
            isCurrentUser 
              ? "bg-primary-500 -right-2" 
              : "bg-gray-100 dark:bg-gray-700 -left-2"
          }`} />
        </div>
      </div>
    </motion.div>
  );
};