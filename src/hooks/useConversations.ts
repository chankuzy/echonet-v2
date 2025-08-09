import { useState, useEffect } from "react";

// Types (adjust as needed for your app)
interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline?: boolean;
}

interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  participant: User;
  lastMessage: Message;
}

export function useConversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setConversations([
        {
          id: "1",
          participant: {
            id: "user-2",
            name: "Jane Doe",
            avatar: "/assets/avatar.jpg",
            isOnline: true,
          },
          lastMessage: {
            id: "101",
            sender: { id: "user-2", name: "Jane Doe", avatar: "/assets/avatar.jpg" },
            content: "See you soon!",
            timestamp: new Date().toISOString(),
          },
        },
        {
          id: "2",
          participant: {
            id: "user-3",
            name: "John Smith",
            avatar: "/assets/avatar.jpg",
            isOnline: false,
          },
          lastMessage: {
            id: "102",
            sender: { id: "user-3", name: "John Smith", avatar: "/assets/avatar.jpg" },
            content: "Let's catch up tomorrow.",
            timestamp: new Date().toISOString(),
          },
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return { conversations, loading };
}
