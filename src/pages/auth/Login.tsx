import { motion } from 'framer-motion';
import { LoginForm } from '../../components/auth/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
              Welcome back
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to your Echonet account
            </p>
          </div>
          
          <LoginForm />
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              Sign up
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;