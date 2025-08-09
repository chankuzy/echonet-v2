import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Check, X } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import type { RegisterCredentials } from '../../types/auth';
import { useAuthStore } from '../../stores/authStore';

const PasswordStrengthMeter = ({ password }: { password: string }) => {
  const getStrength = (pass: string) => {
    if (!pass) return 0;
    
    let strength = 0;
    // Length >= 8
    if (pass.length >= 8) strength += 1;
    // Contains lowercase
    if (/[a-z]/.test(pass)) strength += 1;
    // Contains uppercase
    if (/[A-Z]/.test(pass)) strength += 1;
    // Contains number
    if (/[0-9]/.test(pass)) strength += 1;
    // Contains special char
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    
    return strength;
  };

  const strength = getStrength(password);
  const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'][strength];
  const strengthColor = ['red', 'orange', 'yellow', 'lightgreen', 'green'][strength];

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className={`h-1 flex-1 rounded-sm ${i <= strength ? `bg-${strengthColor}-500` : 'bg-gray-200 dark:bg-gray-700'}`}
          />
        ))}
      </div>
      <p className={`text-xs text-${strengthColor}-500`}>
        Password Strength: {strengthText}
      </p>
      {password.length > 0 && (
        <ul className="mt-2 text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <li className={`flex items-center ${password.length >= 8 ? 'text-green-500' : ''}`}>
            {password.length >= 8 ? <Check size={14} /> : <X size={14} />}
            <span className="ml-1">At least 8 characters</span>
          </li>
          <li className={`flex items-center ${/[a-z]/.test(password) && /[A-Z]/.test(password) ? 'text-green-500' : ''}`}>
            {/[a-z]/.test(password) && /[A-Z]/.test(password) ? <Check size={14} /> : <X size={14} />}
            <span className="ml-1">Uppercase and lowercase letters</span>
          </li>
          <li className={`flex items-center ${/[0-9]/.test(password) ? 'text-green-500' : ''}`}>
            {/[0-9]/.test(password) ? <Check size={14} /> : <X size={14} />}
            <span className="ml-1">At least one number</span>
          </li>
          <li className={`flex items-center ${/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : ''}`}>
            {/[^A-Za-z0-9]/.test(password) ? <Check size={14} /> : <X size={14} />}
            <span className="ml-1">At least one special character</span>
          </li>
        </ul>
      )}
    </div>
  );
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    watch,
    setError,
    trigger,
  } = useForm<RegisterCredentials>({
    mode: 'onBlur',
  });

  const { register: registerUser, isLoading, error: authError } = useAuthStore();

  const onSubmit = async (data: RegisterCredentials) => {
    try {
      await registerUser(
        data.name,
        data.email,
        data.password,
      );
      setIsSuccess(true);
      setTimeout(() => navigate('/home'), 2000);
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((key) => {
          setError(key as keyof RegisterCredentials, {
            type: 'server',
            message: errors[key][0],
          });
        });
      }
    }
  };

  const password = watch('password', '');

  if (isSuccess) {
    return (
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">Registration Successful!</h3>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <p>You're being redirected to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {authError && (
        <Alert variant="error" message={authError} className="mb-4" />
      )}

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
            {...register('name', { 
              required: 'Name is required',
              onBlur: () => trigger('name') // Trigger validation on blur
            })}
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
              },
              onBlur: () => trigger('email') // Trigger validation on blur
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
            type={showPassword ? "text" : "password"}
            placeholder="•••••••"
            className="pl-10 w-full pr-10"
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              },
              onBlur: () => trigger('password') // Trigger validation on blur
            })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
        <PasswordStrengthMeter password={password} />
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
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10 w-full pr-10"
            {...register('password_confirmation', { 
              required: 'Please confirm your password',
              validate: value => 
                value === watch('password') || 'Passwords do not match',
              onBlur: () => trigger('password_confirmation') // Trigger validation on blur
            })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            )}
          </button>
        </div>
        {errors.password_confirmation && (
          <p className="mt-1 text-sm text-red-500">{errors.password_confirmation.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-primary-light dark:text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark border-gray-300 rounded"
            {...register('terms', { 
              required: 'You must accept the terms and conditions',
              onBlur: () => trigger('terms') // Trigger validation on blur
            })}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="text-text-light dark:text-text-dark">
            I agree to the{' '}
            <a href="/terms" className="text-primary-light dark:text-primary-dark hover:underline">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-primary-light dark:text-primary-dark hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>
      {errors.terms && (
        <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>
      )}

      <Button 
        type="submit" 
        className="w-full mt-6"
        disabled={isLoading || !isValid || !isDirty}
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </form>
  );
};

export default RegisterForm;