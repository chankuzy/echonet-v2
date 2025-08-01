// src/components/ui/Button.jsx
import { motion } from 'framer-motion';

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const variants = {
    default: 'bg-primary-light dark:bg-primary-dark text-white hover:bg-opacity-90',
    outline: 'border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/10',
    ghost: 'text-primary-light dark:text-primary-dark hover:bg-primary-light/10 dark:hover:bg-primary-dark/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;