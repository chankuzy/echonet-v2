import { useForm } from 'react-hook-form';
import { Lock, Key, Mail } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Link, useSearchParams } from 'react-router-dom';

interface ResetPasswordForm {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const { register, handleSubmit, formState: { errors }, watch } = useForm<ResetPasswordForm>({
    defaultValues: {
      email: email || '',
      token: token || ''
    }
  });

  const onSubmit = async (data: ResetPasswordForm) => {
    try {
      // Replace with your Laravel API endpoint
      const response = await fetch('https://your-laravel-api.com/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to reset password');
      alert('Password reset successfully! You can now login with your new password');
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
              Reset Password
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your new password
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input type="hidden" {...register('token')} />
            
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
                  className="pl-10 w-full"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  readOnly={!!email}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 w-full"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    }
                  })}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password_confirmation"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 w-full"
                  {...register('password_confirmation', { 
                    required: 'Please confirm your password',
                    validate: value => 
                      value === watch('password') || 'Passwords do not match'
                  })}
                />
              </div>
              {errors.password_confirmation && (
                <p className="mt-1 text-sm text-red-500">{errors.password_confirmation.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full mt-6">
              Reset Password
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <Link
              to="/login"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};