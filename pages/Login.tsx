import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';
import { Button } from '../components/Button';
import { ChefHat, Building, Check } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;

    setIsLoggingIn(true);
    // Simulate network delay
    setTimeout(() => {
      onLogin(selectedRole);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1920&q=80" 
          alt="Kitchen Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full flex justify-center">
        {!selectedRole ? (
          /* Step 1: Role Selection */
          <div className="max-w-5xl w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-serif font-bold text-white shadow-sm">
                Welcome to CulinaryStart
              </h2>
              <p className="mt-2 text-lg text-stone-200 shadow-sm">
                Select your role to continue / Selecteer je rol om verder te gaan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Entrepreneur Card */}
              <div 
                onClick={() => handleRoleSelect(UserRole.ENTREPRENEUR)}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border-2 border-stone-200 hover:border-primary-500 cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <ChefHat className="text-primary-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Food Entrepreneur (Seeker)</h3>
                <p className="text-stone-500 italic mb-4">Voedselondernemer (Zoeker)</p>
                <p className="text-stone-600 mb-6 flex-grow">
                  Rent a fully equipped kitchen, get consulting, and grow your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <Check size={16} className="text-emerald-500 mt-0.5" />
                    Flexible rentals (hourly/daily)
                  </li>
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <Check size={16} className="text-emerald-500 mt-0.5" />
                    NVWA/HACCP compliant kitchens
                  </li>
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <Check size={16} className="text-emerald-500 mt-0.5" />
                    Access to workshops & networks
                  </li>
                </ul>
                <Button fullWidth className="group-hover:bg-primary-800">
                  Continue as Entrepreneur
                </Button>
              </div>

              {/* Host Card */}
              <div 
                onClick={() => handleRoleSelect(UserRole.OWNER)}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border-2 border-stone-200 hover:border-sky-500 cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
                  <Building className="text-sky-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Kitchen Owner (Host)</h3>
                <p className="text-stone-500 italic mb-4">Keukenbezitter (Host)</p>
                <p className="text-stone-600 mb-6 flex-grow">
                  Monetize your unused kitchen space and receive bookings automatically.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <Check size={16} className="text-sky-500 mt-0.5" />
                    Steady income with no extra effort
                  </li>
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <Check size={16} className="text-sky-500 mt-0.5" />
                    We handle bookings & payments
                  </li>
                  <li className="flex items-start gap-2 text-stone-600 text-sm">
                    <Check size={16} className="text-sky-500 mt-0.5" />
                    Liability coverage for bookings
                  </li>
                </ul>
                <Button fullWidth className="bg-sky-600 hover:bg-sky-700">
                  Continue as Host
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Step 2: Login Form */
          <div className="max-w-md w-full space-y-8 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-stone-200">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${selectedRole === UserRole.ENTREPRENEUR ? 'bg-primary-50' : 'bg-sky-50'}`}>
                 {selectedRole === UserRole.ENTREPRENEUR ? (
                   <ChefHat className="text-primary-600 w-8 h-8" />
                 ) : (
                   <Building className="text-sky-600 w-8 h-8" />
                 )}
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">
                Log in to CulinaryStart
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                {selectedRole === UserRole.ENTREPRENEUR ? 'Food Entrepreneur Account' : 'Kitchen Owner Account'}
              </p>
              <button 
                onClick={() => setSelectedRole(null)} 
                className="text-xs text-stone-400 underline mt-1 hover:text-stone-600"
              >
                Switch Role / Verander Rol
              </button>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                    Email address / E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-stone-300 placeholder-stone-400 text-stone-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Je e-mailadres"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-stone-700">
                    Password / Wachtwoord
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-stone-300 placeholder-stone-400 text-stone-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Je wachtwoord"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button 
                type="submit" 
                fullWidth 
                size="lg"
                className={selectedRole === UserRole.OWNER ? 'bg-sky-600 hover:bg-sky-700' : ''}
                disabled={isLoggingIn}
              >
                {isLoggingIn ? 'Logging in...' : 'Log In / Inloggen'}
              </Button>

              {/* Social Login Mock */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-stone-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-stone-300 rounded-md shadow-sm bg-white text-sm font-medium text-stone-500 hover:bg-stone-50">
                    Google
                  </button>
                  <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-stone-300 rounded-md shadow-sm bg-white text-sm font-medium text-stone-500 hover:bg-stone-50">
                    LinkedIn
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};