// src/pages/Register.jsx
import { motion } from 'framer-motion';
import Logo from '../../components/Logo';
import ThemeToggle from '../../components/ThemeToggle';
import RegisterForm from '../../components/auth/RegisterForm';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo size="md" />
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
              Create your account
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Join the Echonet community
            </p>
          </div>
          
          <RegisterForm />
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              Sign in
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Register;