// src/components/ui/Input.jsx
const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent ${className}`}
      {...props}
    />
  );
};

export default Input;