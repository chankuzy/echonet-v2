// pages/mobile/ChatScreen.tsx
import { useNavigate, useParams } from 'react-router-dom';
import { TopBar, BottomNav } from '../../components/mobile';
import { ChatInput, ChatBubbles } from '../../components';
import { MobileTopbar } from '../components/navigation/MobileTopbar';

export const ChatScreen = () => {
  const navigate = useNavigate();
  const { conversationId } = useParams();

  return (
    <div className="h-screen flex flex-col pb-16"> {/* Full viewport height */}
      <MobileTopbar 
        title="Messages" 
        showBack 
        onBack={() => navigate('/messages')} 
      />
      
      <div className="flex-1 overflow-y-auto">
        <ChatBubbles conversationId={conversationId} />
      </div>
      
      <ChatInput />
      
      <BottomNav />
    </div>
  );
};