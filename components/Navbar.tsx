import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon, ChefHat, Globe, Bell, LogOut, Settings } from 'lucide-react';
import { User, UserRole } from '../types';
import { Button } from './Button';

interface NavbarProps {
  user: User | null;
  toggleRole: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, toggleRole, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path ? "text-primary-700 font-semibold" : "text-stone-600 hover:text-primary-700";

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 mr-8">
              <div className="bg-primary-700 text-white p-1.5 rounded">
                <ChefHat size={24} />
              </div>
              <span className="font-serif text-xl font-bold text-stone-900 hidden sm:block">CulinaryStart</span>
              {user && (
                 <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200 uppercase tracking-wide">
                    {user.role === UserRole.ENTREPRENEUR ? 'Entrepreneur' : 'Host'}
                 </span>
              )}
            </Link>
            
            <div className="hidden lg:flex lg:space-x-6">
               {/* Role-Specific Navigation */}
               {user?.role === UserRole.ENTREPRENEUR ? (
                 <>
                   <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                   <Link to="/search" className={isActive('/search')}>Search Kitchens</Link>
                   <Link to="/dashboard" className="text-stone-600 hover:text-primary-700">My Bookings</Link>
                   <Link to="/services" className={isActive('/services')}>Workshops</Link>
                   <Link to="/community" className={isActive('/community')}>Community</Link>
                 </>
               ) : user?.role === UserRole.OWNER ? (
                 <>
                   <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                   <Link to="/dashboard" className="text-stone-600 hover:text-primary-700">My Kitchens</Link>
                   <Link to="/dashboard" className="text-stone-600 hover:text-primary-700">Bookings</Link>
                   <Link to="/dashboard" className="text-stone-600 hover:text-primary-700">Earnings</Link>
                   <Link to="/compliance" className={isActive('/compliance')}>Compliance</Link>
                 </>
               ) : (
                 <>
                   <Link to="/entrepreneurs" className={isActive('/entrepreneurs')}>For Entrepreneurs</Link>
                   <Link to="/owners" className={isActive('/owners')}>For Kitchen Owners</Link>
                   <Link to="/search" className={isActive('/search')}>Find a Kitchen</Link>
                   <Link to="/pricing" className={isActive('/pricing')}>Pricing</Link>
                   <Link to="/services" className={isActive('/services')}>Services</Link>
                 </>
               )}
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-stone-500 hover:text-primary-700 flex items-center gap-1 text-sm font-medium">
               <Globe size={16} /> NL / EN
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <button className="relative text-stone-500 hover:text-primary-700">
                   <Bell size={20} />
                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
                </button>
                
                <div className="h-6 w-px bg-stone-300"></div>

                <div className="flex items-center gap-3 group relative cursor-pointer">
                   <div className="text-right hidden xl:block">
                      <div className="text-sm font-bold text-stone-900">{user.name}</div>
                      <div className="text-xs text-stone-500 truncate max-w-[120px]">{user.businessName}</div>
                   </div>
                   <div className="w-9 h-9 rounded-full bg-stone-200 overflow-hidden border border-stone-300">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                   </div>

                   {/* Dropdown Menu */}
                   <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-stone-100 py-1 hidden group-hover:block">
                      <Link to="/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:bg-stone-50">
                        <Settings size={16} /> Settings
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-stone-50 text-left"
                      >
                        <LogOut size={16} /> Log Out
                      </button>
                   </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                 <Link to="/login" className="text-sm font-medium text-stone-600 hover:text-stone-900">Log In</Link>
                 <Link to="/login">
                    <Button variant="primary" size="sm">Get Started</Button>
                 </Link>
              </div>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200">
          <div className="pt-2 pb-3 space-y-1 px-4">
             {user?.role === UserRole.ENTREPRENEUR ? (
                 <>
                   <Link to="/dashboard" className="block py-2 text-base font-medium text-stone-600">Dashboard</Link>
                   <Link to="/search" className="block py-2 text-base font-medium text-stone-600">Search Kitchens</Link>
                   <Link to="/services" className="block py-2 text-base font-medium text-stone-600">Workshops</Link>
                 </>
               ) : user?.role === UserRole.OWNER ? (
                 <>
                   <Link to="/dashboard" className="block py-2 text-base font-medium text-stone-600">Dashboard</Link>
                   <Link to="/compliance" className="block py-2 text-base font-medium text-stone-600">Compliance</Link>
                 </>
               ) : (
                 <>
                   <Link to="/entrepreneurs" className="block py-2 text-base font-medium text-stone-600">For Entrepreneurs</Link>
                   <Link to="/owners" className="block py-2 text-base font-medium text-stone-600">For Kitchen Owners</Link>
                   <Link to="/search" className="block py-2 text-base font-medium text-stone-600">Find a Kitchen</Link>
                   <Link to="/pricing" className="block py-2 text-base font-medium text-stone-600">Pricing</Link>
                 </>
               )}
            
            <div className="pt-4 mt-2 border-t border-stone-200">
               {user ? (
                 <>
                   <Link to="/settings" className="block py-2 text-base font-medium text-stone-600">Account Settings</Link>
                   <button onClick={handleLogout} className="block w-full text-left py-2 text-base font-medium text-red-600">Log Out</button>
                 </>
               ) : (
                 <div className="flex flex-col gap-3 mt-2">
                   <Link to="/login"><Button variant="outline" fullWidth>Log In</Button></Link>
                   <Link to="/login"><Button variant="primary" fullWidth>Get Started</Button></Link>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
