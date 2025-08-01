import { useForm } from 'react-hook-form';
import { User, Mail, Lock } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
    // Handle registration logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="pl-10 w-full"
            {...register('name', { required: 'Name is required' })}
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

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
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
          Confirm Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="pl-10 w-full"
            {...register('confirmPassword', { 
              required: 'Please confirm your password',
              validate: value => 
                value === watch('password') || 'Passwords do not match'
            })}
          />
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark border-gray-300 rounded"
          {...register('terms', { 
            required: 'You must accept the terms and conditions'
          })}
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-text-light dark:text-text-dark">
          I agree to the <a href="#" className="text-primary-light dark:text-primary-dark hover:underline">Terms and Conditions</a>
        </label>
      </div>
      {errors.terms && (
        <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
      )}

      <Button type="submit" className="w-full mt-6">
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;