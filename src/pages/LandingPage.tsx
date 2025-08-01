import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo size="lg" />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-text-light dark:text-text-dark mb-6">
            Connect with your <span className="text-primary-light dark:text-primary-dark">echo</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Echonet is where your voice resonates. Share your thoughts, connect with like-minded people, and discover new perspectives.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register">
              <Button size="lg">Join Echonet</Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;