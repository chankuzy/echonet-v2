// src/components/Auth/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { Mail, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useAuthStore } from '../../stores/authStore';
import type { LoginCredentials } from '../../types/auth';
import { SocialAuthButtons } from './SocialAuthButtons';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();
  const { login, isLoading, error: authError } = useAuthStore();

  const onSubmit = async (data: LoginCredentials) => {
    await login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {authError && (
        <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
          {authError}
        </div>
      )}

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
            {...register('email', { required: 'Email is required' })}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
          Password
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
            {...register('password', { required: 'Password is required' })}
          />
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-text-light dark:text-text-dark">
            Remember me
          </label>
        </div>

        <Link to="/forgot-password" className="text-sm text-primary-light dark:text-primary-dark hover:underline">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className="w-full mt-6" disabled={isLoading}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>

      <SocialAuthButtons loading={isLoading} />
    </form>
  );
};