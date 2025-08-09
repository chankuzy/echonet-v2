// features/chat/mockData.ts
export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: Date;
  status: string
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

export const mockUser: User = {
  id: "user-1",
  name: "You",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  isOnline: true
};

export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    participants: [
      {
        id: "user-2",
        name: "Alex Chen",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        isOnline: true
      }
    ],
    lastMessage: {
      id: "msg-1",
      sender: mockUser,
      content: "Hey, how's the project going?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
      status: "sent"
    },
    unreadCount: 0
  },
  // Add 4-5 more mock conversations
];