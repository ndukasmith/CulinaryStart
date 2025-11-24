import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, ChefHat, Globe } from 'lucide-react';
import { User, UserRole } from '../types';
import { Button } from './Button';

interface NavbarProps {
  user: User | null;
  toggleRole: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, toggleRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-primary-700 font-semibold" : "text-stone-600 hover:text-primary-700";

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
            </Link>
            
            <div className="hidden lg:flex lg:space-x-6">
               <Link to="/entrepreneurs" className={isActive('/entrepreneurs')}>For Entrepreneurs</Link>
               <Link to="/owners" className={isActive('/owners')}>For Kitchen Owners</Link>
               <Link to="/search" className={isActive('/search')}>Find a Kitchen</Link>
               <Link to="/pricing" className={isActive('/pricing')}>Pricing</Link>
               <Link to="/services" className={isActive('/services')}>Services</Link>
               <Link to="/blog" className={isActive('/blog')}>Blog</Link>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-stone-500 hover:text-primary-700 flex items-center gap-1 text-sm font-medium">
               <Globe size={16} /> NL / EN
            </button>

            {user ? (
              <>
                <button 
                  onClick={toggleRole} 
                  className="text-xs font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded border border-stone-200 hover:bg-stone-200 transition-colors"
                >
                  {user.role === UserRole.ENTREPRENEUR ? 'Entrepreneur View' : 'Owner View'}
                </button>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="gap-2">
                    <UserIcon size={16} />
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                 <Link to="/login" className="text-sm font-medium text-stone-600 hover:text-stone-900">Log In</Link>
                 <Link to="/entrepreneurs">
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
            <Link to="/entrepreneurs" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>For Entrepreneurs</Link>
            <Link to="/owners" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>For Kitchen Owners</Link>
            <Link to="/search" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Find a Kitchen</Link>
            <Link to="/pricing" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link to="/services" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/compliance" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Compliance</Link>
            <Link to="/support" className="block py-2 text-base font-medium text-stone-600" onClick={() => setIsMenuOpen(false)}>Support</Link>
            
            <div className="pt-4 mt-2 border-t border-stone-200">
               {user ? (
                 <Link to="/dashboard" className="block py-2 text-base font-medium text-primary-700" onClick={() => setIsMenuOpen(false)}>Go to Dashboard</Link>
               ) : (
                 <div className="flex flex-col gap-3 mt-2">
                   <Link to="/login"><Button variant="outline" fullWidth>Log In</Button></Link>
                   <Link to="/entrepreneurs"><Button variant="primary" fullWidth>Get Started</Button></Link>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};