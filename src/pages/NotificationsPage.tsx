import { motion, AnimatePresence } from 'framer-motion';
import { Bell} from 'lucide-react';
import { useState } from 'react';
import { NotificationItem } from '../components/notification/NotificationItem';

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

const sampleNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    user: {
      name: 'Alice',
      avatar: '/avatars/alice.png',
      handle: '@alice'
    },
    content: {
      text: 'Liked your post'
    },
    time: '2h ago',
    isUnread: true,
    relatedPost: {
      id: '101',
      preview: 'Check out my new blog post!'
    }
  },
  {
    id: '2',
    type: 'comment',
    user: {
      name: 'Bob',
      avatar: '/avatars/bob.png',
      handle: '@bob'
    },
    content: {
      text: 'Nice work!'
    },
    time: '1h ago',
    isUnread: false,
    relatedPost: {
      id: '102',
      preview: 'My latest project'
    }
  },
  {
    id: '3',
    type: 'mention',
    user: {
      name: 'Charlie',
      avatar: '/avatars/charlie.png',
      handle: '@charlie'
    },
    content: {
      text: 'Mentioned you in a comment'
    },
    time: '10m ago',
    isUnread: true
  }
];

export const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'mentions'>('all');
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isUnread: false } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isUnread: false })));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'unread') return n.isUnread;
    if (activeTab === 'mentions') return n.type === 'mention';
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto text-white/90">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-md p-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-bold">Notifications</h1>
        <button 
          onClick={markAllAsRead}
          className="text-sm text-primary-light dark:text-primary-dark hover:underline"
        >
          Mark all as read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        {['all', 'unread', 'mentions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 py-3 text-sm font-medium relative ${
              activeTab === tab
                ? 'text-primary-light dark:text-primary-dark'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <motion.div
                layoutId="notificationTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light dark:bg-primary-dark"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        <AnimatePresence>
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-4 ${notification.isUnread ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
              >
                <NotificationItem
                  notification={notification} 
                  onMarkAsRead={markAsRead}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center text-gray-500"
            >
              <Bell className="mx-auto h-8 w-8 mb-2" />
              <p>No {activeTab} notifications</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};