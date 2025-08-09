// pages/mobile/ChatScreen.tsx
import { useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/navigation/BottomNav';
import { ChatInput } from '../features/chat/components/ChatInput';
// import { ChatBubble } from '../features/chat/components/ChatBubble';
import { MobileTopbar } from '../components/navigation/MobileTopbar';

export const ChatScreen = () => {
  const navigate = useNavigate();
  // const { conversationId } = useParams();

  return (
    <div className="h-screen flex flex-col pb-16"> {/* Full viewport height */}
      <MobileTopbar 
        title="Messages" 
        showBack 
        onBack={() => navigate('/messages')} 
      />
      
      <div className="flex-1 overflow-y-auto">
        {/* Example: Replace with your actual messages array */}
        {/* messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message}
            isCurrentUser={message.senderId === currentUserId}
          />
        )) */}
      </div>
      
      <ChatInput onSend={(msg: string) => {
        // TODO: handle sending the message
        console.log('Send message:', msg);
      }} />
      
      <BottomNav />
    </div>
  );
};