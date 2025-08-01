import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizeClasses: Record<LogoSize, string> = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex items-center space-x-2 ${sizeClasses[size]}`}
    >
      <Waves className="text-primary-light dark:text-primary-dark w-full h-full" />
      <span className="text-xl font-bold text-primary-light dark:text-primary-dark">Echonet</span>
    </motion.div>
  );
};

export default Logo;