import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Link } from 'react-router-dom';

interface ForgotPasswordForm {
  email: string;
}

export const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>();

  const onSubmit = async (data: ForgotPasswordForm) => {
    try {
      // Replace with your Laravel API endpoint
      const response = await fetch('https://your-laravel-api.com/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to send reset link');
      alert('Password reset link sent to your email');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="w-full max-w-md bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
              Forgot Password
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email to receive a reset link
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10 w-full"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full mt-6">
              Send Reset Link
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Remember your password?{' '}
            <Link
              to="/login"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};