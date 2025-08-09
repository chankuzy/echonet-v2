import { motion } from 'framer-motion';
import { Heart, MessageSquare, UserPlus, Repeat, AtSign, Check, Bell } from 'lucide-react';

type Notification = {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'repost';
  user: {
    name: string;
    avatar: string;
    handle: string;
  };
  content?: {
    text?: string;
    image?: string;
  };
  time: string;
  isUnread: boolean;
  relatedPost?: {
    id: string;
    preview: string;
  };
};


export const NotificationItem = ({ notification, onMarkAsRead }: { 
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'like': return <Heart className="text-red-500 fill-current" />;
      case 'comment': return <MessageSquare className="text-blue-500" />;
      case 'follow': return <UserPlus className="text-green-500" />;
      case 'repost': return <Repeat className="text-purple-500" />;
      case 'mention': return <AtSign className="text-yellow-500" />;
      default: return <Bell className="text-gray-500" />;
    }
  };

  return (
    <div className="flex gap-3">
      {/* Icon */}
      <div className="relative">
        <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
          {getIcon()}
        </div>
        {notification.isUnread && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-medium">{notification.user.name}</p>
            <p className="text-gray-500 text-sm">
              {notification.type === 'like' && 'liked your post'}
              {notification.type === 'comment' && 'commented: ' + notification.content?.text}
              {notification.type === 'follow' && 'started following you'}
              {notification.type === 'repost' && 'reposted your post'}
              {notification.type === 'mention' && 'mentioned you'}
            </p>
            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
          </div>
          <button 
            onClick={() => onMarkAsRead(notification.id)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Check className="h-4 w-4" />
          </button>
        </div>

        {/* Post Preview */}
        {notification.relatedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm"
          >
            {notification.relatedPost.preview}
          </motion.div>
        )}
      </div>
    </div>
  );
};