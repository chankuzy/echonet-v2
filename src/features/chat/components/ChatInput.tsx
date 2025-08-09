import { useState, useRef, useEffect } from 'react';
import { 
  Paperclip, 
  Smile, 
  Mic, 
  Send, 
  Image as ImageIcon,
  Video,
  File
} from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import useThemeStore from '../../../stores/themeStore';

export const ChatInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const isDarkMode = useThemeStore(state => state.darkMode);

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add this useEffect hook right after your other hooks:
  useEffect(() => {
    if (showEmojiPicker) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [showEmojiPicker]);

  const handleEmojiSelect = (emojiData: any) => {
    setMessage(prev => prev + emojiData.emoji);
    inputRef.current?.focus();
    setShowEmojiPicker(false); // Close after selection
  };

  return (
    <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 p-2">
      {/* Emoji Picker (Absolute positioned) */}
      {showEmojiPicker && (
        <div 
          ref={pickerRef}
          className="absolute bottom-16 left-0 right-0 z-10"
        >
          <EmojiPicker
            onEmojiClick={handleEmojiSelect}
            width="100%"
            height={350}
            previewConfig={{ showPreview: false }}
            searchDisabled={true}
            skinTonesDisabled={true}
            theme={isDarkMode ? 'dark' : 'light'}
          />
        </div>
      )}

      {/* Attachment Menu */}
      <div className="flex items-center gap-1 px-2 pb-2">
        <button className="p-2 text-gray-500 hover:text-primary-500">
          <Paperclip size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-primary-500">
          <ImageIcon size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-primary-500">
          <Video size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-primary-500">
          <File size={20} />
        </button>
      </div>

      {/* Main Input */}
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4">
        <button 
          className="text-gray-500 hover:text-primary-500"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <Smile size={24} />
        </button>
        
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent py-3 focus:outline-none"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && message.trim()) {
              onSend(message);
              setMessage('');
            }
          }}
        />
        
        {message ? (
          <button 
            className="text-primary-500"
            onClick={() => {
              onSend(message);
              setMessage('');
            }}
          >
            <Send size={24} />
          </button>
        ) : (
          <button className="text-gray-500 hover:text-primary-500">
            <Mic size={24} />
          </button>
        )}
      </div>
    </div>
  );
};