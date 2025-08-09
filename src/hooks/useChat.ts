import { useState, useEffect, useCallback } from "react";

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
}

export function useChat(conversationId: string) {
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<string>("Online");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Simulate fetching conversation and messages
  useEffect(() => {
    // Replace with real API calls
    if (!conversationId) return;
    setCurrentConversation({
      id: conversationId,
      participant: {
        id: "user-2",
        name: "Jane Doe",
        avatar: "/assets/avatar.jpg",
        isOnline: true,
      },
    });
    setMessages([
      {
        id: "1",
        sender: { id: "current-user", name: "You", avatar: "/assets/avatar.jpg" },
        content: "Hello!",
        timestamp: new Date().toISOString(),
      },
      {
        id: "2",
        sender: { id: "user-2", name: "Jane Doe", avatar: "/assets/avatar.jpg" },
        content: "Hi there!",
        timestamp: new Date().toISOString(),
      },
    ]);
    setStatus("Online");
    setIsTyping(false);
  }, [conversationId]);

  // Simulate sending a message
  const handleSend = useCallback((content: string) => {
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      sender: { id: "current-user", name: "You", avatar: "/assets/avatar.jpg" },
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);
  }, [messages]);

  return {
    currentConversation,
    messages,
    handleSend,
    status,
    isTyping,
  };
}
