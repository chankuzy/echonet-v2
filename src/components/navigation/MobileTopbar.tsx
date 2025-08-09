import { ArrowLeft, MoreVertical } from 'lucide-react';

export const MobileTopbar = ({ 
  title, 
  showBack = false,
  onBack
}: {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800 flex items-center">
      {showBack && (
        <button onClick={onBack} className="mr-3">
          <ArrowLeft size={20} />
        </button>
      )}
      <h1 className="text-xl font-bold flex-1">{title}</h1>
      <button>
        <MoreVertical size={20} />
      </button>
    </header>
  );
};