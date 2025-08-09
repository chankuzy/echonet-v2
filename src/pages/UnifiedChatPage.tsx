import { useMediaQuery } from "react-responsive";
import { ChatPage } from "./ChatPage";
import { MessagesPage } from "../Mobile/MessagesPage";

export const UnifiedChatPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            {isMobile && <MessagesPage />}
            {!isMobile && <ChatPage />}
        </>
    )
}