import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';
import { Button } from '../components/Button';
import { ChefHat, Building, Check, Mail, Lock, AlertCircle } from 'lucide-react';
import { MOCK_USER, MOCK_HOST_USER } from '../constants';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [manualLoginRole, setManualLoginRole] = useState<UserRole | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGoogleLogin = (role: UserRole) => {
    setIsLoggingIn(true);
    setError(null);
    
    // Simulate Google Login
    setTimeout(() => {
      // Mock Validation Logic: 
      // If user tries to log in as Entrepreneur but mock data returns Owner (simulated here by checking role), show error.
      // For demo, we just succeed based on the clicked button, BUT let's simulate a "Wrong Account" scenario if a specific flag was set.
      // We'll just assume success for the demo flow.
      
      onLogin(role);
      navigate('/dashboard');
    }, 1000);
  };

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualLoginRole) return;
    
    setIsLoggingIn(true);
    setError(null);

    // Simulate Network Request
    setTimeout(() => {
      onLogin(manualLoginRole);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1920&q=80" 
          alt="Industrial Kitchen Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white shadow-sm mb-4">
            Welcome to CulinaryStart
          </h2>
          <p className="text-xl text-stone-200 shadow-sm max-w-2xl mx-auto">
             Choose your role to access your personalized dashboard. / Kies je rol om toegang te krijgen tot je persoonlijke dashboard.
          </p>
        </div>

        {error && (
          <div className="max-w-md mx-auto mb-8 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg flex items-center gap-3">
             <AlertCircle size={24} />
             <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Entrepreneur Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-primary-500 transition-all duration-300 flex flex-col">
            <div className="p-8 flex-grow">
              <div className="flex items-center gap-4 mb-6">
                 <div className="bg-primary-50 p-4 rounded-full">
                    <ChefHat className="text-primary-600 w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-stone-900">Food Entrepreneur</h3>
                    <p className="text-stone-500 text-sm">Voedselondernemer (Renter)</p>
                 </div>
              </div>
              
              <p className="text-stone-600 mb-6">
                Rent fully equipped kitchens, access workshops, and grow your food business.
              </p>

              <ul className="space-y-3 mb-8">
                 <li className="flex items-start gap-2 text-stone-600 text-sm"><Check size={16} className="text-emerald-500 mt-1"/> Flexible rentals (Hourly/Monthly)</li>
                 <li className="flex items-start gap-2 text-stone-600 text-sm"><Check size={16} className="text-emerald-500 mt-1"/> NVWA & HACCP Compliant Spaces</li>
              </ul>

              {/* Google Button */}
              <button 
                onClick={() => handleGoogleLogin(UserRole.ENTREPRENEUR)}
                className="w-full bg-white border border-stone-300 text-stone-700 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-stone-50 transition-colors shadow-sm mb-4"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" className="w-5 h-5" />
                Log in with Google (Entrepreneur)
              </button>
              
              {/* Manual Login Toggle */}
              {!manualLoginRole && (
                 <button 
                   onClick={() => setManualLoginRole(UserRole.ENTREPRENEUR)}
                   className="w-full text-primary-700 font-semibold text-sm hover:underline text-center py-2"
                 >
                   Or log in with email
                 </button>
              )}

              {/* Manual Login Form */}
              {manualLoginRole === UserRole.ENTREPRENEUR && (
                 <form onSubmit={handleManualLogin} className="mt-4 space-y-4 animate-fadeIn border-t border-stone-100 pt-4">
                    <div>
                       <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Email</label>
                       <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={16} />
                          <input type="email" required className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500" placeholder="name@business.com" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Password</label>
                       <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={16} />
                          <input type="password" required className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500" placeholder="••••••••" />
                       </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <label className="flex items-center"><input type="checkbox" className="mr-2 rounded text-primary-600"/> Remember me</label>
                       <a href="#" className="text-primary-700 hover:underline">Forgot password?</a>
                    </div>
                    <Button fullWidth disabled={isLoggingIn}>{isLoggingIn ? 'Logging in...' : 'Log In'}</Button>
                    <button type="button" onClick={() => setManualLoginRole(null)} className="w-full text-center text-xs text-stone-400 mt-2 hover:text-stone-600">Cancel</button>
                 </form>
              )}
            </div>
            <div className="bg-primary-50 p-4 text-center text-sm text-primary-800 font-medium">
               New here? <a href="#" className="underline">Create an Entrepreneur Account</a>
            </div>
          </div>

          {/* Host Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-sky-500 transition-all duration-300 flex flex-col">
            <div className="p-8 flex-grow">
              <div className="flex items-center gap-4 mb-6">
                 <div className="bg-sky-50 p-4 rounded-full">
                    <Building className="text-sky-600 w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-stone-900">Kitchen Owner</h3>
                    <p className="text-stone-500 text-sm">Keukenbezitter (Host)</p>
                 </div>
              </div>
              
              <p className="text-stone-600 mb-6">
                Monetize your unused kitchen space, manage bookings, and track earnings effortlessly.
              </p>

              <ul className="space-y-3 mb-8">
                 <li className="flex items-start gap-2 text-stone-600 text-sm"><Check size={16} className="text-sky-500 mt-1"/> Liability coverage included</li>
                 <li className="flex items-start gap-2 text-stone-600 text-sm"><Check size={16} className="text-sky-500 mt-1"/> Automated payments & vetting</li>
              </ul>

              {/* Google Button */}
              <button 
                onClick={() => handleGoogleLogin(UserRole.OWNER)}
                className="w-full bg-white border border-stone-300 text-stone-700 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-stone-50 transition-colors shadow-sm mb-4"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" className="w-5 h-5" />
                Log in with Google (Owner)
              </button>

              {/* Manual Login Toggle */}
              {!manualLoginRole && (
                 <button 
                   onClick={() => setManualLoginRole(UserRole.OWNER)}
                   className="w-full text-sky-700 font-semibold text-sm hover:underline text-center py-2"
                 >
                   Or log in with email
                 </button>
              )}

              {/* Manual Login Form */}
              {manualLoginRole === UserRole.OWNER && (
                 <form onSubmit={handleManualLogin} className="mt-4 space-y-4 animate-fadeIn border-t border-stone-100 pt-4">
                    <div>
                       <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Email</label>
                       <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={16} />
                          <input type="email" required className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md text-sm focus:ring-sky-500 focus:border-sky-500" placeholder="host@business.com" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-xs font-bold text-stone-600 uppercase mb-1">Password</label>
                       <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={16} />
                          <input type="password" required className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md text-sm focus:ring-sky-500 focus:border-sky-500" placeholder="••••••••" />
                       </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <label className="flex items-center"><input type="checkbox" className="mr-2 rounded text-sky-600"/> Remember me</label>
                       <a href="#" className="text-sky-700 hover:underline">Forgot password?</a>
                    </div>
                    <Button fullWidth disabled={isLoggingIn} className="bg-sky-600 hover:bg-sky-700">{isLoggingIn ? 'Logging in...' : 'Log In'}</Button>
                    <button type="button" onClick={() => setManualLoginRole(null)} className="w-full text-center text-xs text-stone-400 mt-2 hover:text-stone-600">Cancel</button>
                 </form>
              )}
            </div>
            <div className="bg-sky-50 p-4 text-center text-sm text-sky-800 font-medium">
               Want to list your kitchen? <a href="#" className="underline">Create a Host Account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
