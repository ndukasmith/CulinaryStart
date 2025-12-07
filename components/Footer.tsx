import React from 'react';
import { ChefHat, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary-700 text-white p-1.5 rounded">
                <ChefHat size={24} />
              </div>
              <span className="font-serif text-xl font-bold text-white">CulinaryStart</span>
            </Link>
            <p className="text-sm text-stone-400 mb-6">
              Empowering Dutch food entrepreneurs by making professional kitchen space accessible, flexible, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Facebook size={20} /></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 grayscale opacity-50">
              {/* Simple Text Placeholders for Partner Logos */}
              <span className="text-xs font-bold border border-stone-600 px-1">KVK</span>
              <span className="text-xs font-bold border border-stone-600 px-1">KHN</span>
              <span className="text-xs font-bold border border-stone-600 px-1">NVWA</span>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-bold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story & Mission</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press Room</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/entrepreneurs" className="hover:text-white transition-colors">For Entrepreneurs</Link></li>
              <li><Link to="/owners" className="hover:text-white transition-colors">For Kitchen Owners</Link></li>
              <li><Link to="/search" className="hover:text-white transition-colors">Find a Kitchen</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services & Workshops</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support" className="hover:text-white transition-colors">Help Center & FAQ</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">Legal & Compliance</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
            <div className="mt-6">
               <h5 className="text-xs font-bold text-stone-500 mb-2">Subscribe to our Newsletter</h5>
               <div className="flex gap-2">
                 <input type="email" placeholder="Email" className="bg-stone-800 border-none text-xs p-2 rounded w-full" />
                 <button className="bg-primary-700 text-white text-xs px-3 rounded hover:bg-primary-600">Go</button>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <div className="mb-4 md:mb-0 space-y-1">
            <p>&copy; {new Date().getFullYear()} CulinaryStart BV. All rights reserved.</p>
            <p>GDPR Compliant | KVK Number: 12345678 | VAT: NL87654321B01</p>
          </div>
          <div className="flex items-center gap-4">
             <Link to="/privacy" className="hover:text-stone-300">Cookie Policy</Link>
             <span>Amsterdam, NL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};