// src/pages/VerifyEmail.tsx
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';
import Button from '../../components/ui/Button';
import Logo from '../../components/Logo';
import ThemeToggle from '../../components/ThemeToggle';

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'verifying' | 'verified' | 'failed'>('verifying');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      const id = searchParams.get('id');
      const hash = searchParams.get('hash');
      const expires = searchParams.get('expires');
      const signature = searchParams.get('signature');

      if (!id || !hash || !expires || !signature) {
        setStatus('failed');
        setError('Invalid verification link');
        return;
      }

      try {
        // Replace with your Laravel API endpoint
        const response = await fetch(`https://your-laravel-api.com/api/verify-email/${id}/${hash}?expires=${expires}&signature=${signature}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) throw new Error('Verification failed');
        setStatus('verified');
      } catch (err) {
        setStatus('failed');
        setError(err.message);
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo size="md" />
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="w-full max-w-md bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm text-center">
          {status === 'verifying' && (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-light dark:border-primary-dark mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                Verifying Email
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Please wait while we verify your email address...
              </p>
            </>
          )}

          {status === 'verified' && (
            <>
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                Email Verified!
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Your email address has been successfully verified.
              </p>
              <Button asChild>
                <Link to="/login">
                  Continue to Login
                </Link>
              </Button>
            </>
          )}

          {status === 'failed' && (
            <>
              <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                Verification Failed
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {error || 'There was an error verifying your email address.'}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Please try again or contact support.
              </p>
              <div className="flex space-x-4 justify-center">
                <Button variant="outline" asChild>
                  <Link to="/">
                    Home
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/register">
                    Register Again
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};