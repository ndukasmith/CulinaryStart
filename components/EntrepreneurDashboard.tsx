import React from 'react';
import { User } from '../types';
import { Button } from './Button';
import { Search, Calendar, BookOpen, FileText, ArrowRight, Heart, MapPin, Star, Bell, LogOut, Settings, Home, ChefHat, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UPCOMING_BOOKINGS, KITCHENS, EVENTS, RECOMMENDED_KITCHENS } from '../constants';

interface DashboardProps {
  user: User;
}

export const EntrepreneurDashboard: React.FC<DashboardProps> = ({ user }) => {
  const upcomingBookings = UPCOMING_BOOKINGS.filter(b => b.status === 'Confirmed');
  const savedKitchens = KITCHENS.slice(0, 2);

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-stone-200 hidden lg:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
         <div className="p-6">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Menu</h3>
            <nav className="space-y-1">
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-primary-700 bg-primary-50 rounded-md font-medium">
                  <Home size={18} /> Dashboard
               </Link>
               <Link to="/search" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Search size={18} /> Search Kitchens
               </Link>
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Calendar size={18} /> My Bookings
               </Link>
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Heart size={18} /> Saved Kitchens
               </Link>
            </nav>

            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mt-8 mb-4">Resources</h3>
            <nav className="space-y-1">
               <Link to="/compliance" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <ShieldCheck size={18} /> Compliance
               </Link>
               <Link to="/services" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <BookOpen size={18} /> Workshops
               </Link>
            </nav>

            <div className="mt-8 pt-6 border-t border-stone-200">
               <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Settings size={18} /> Account Settings
               </Link>
            </div>
         </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-8">
         {/* Mobile Header (Only visible on small screens to replace sidebar) */}
         <div className="lg:hidden mb-6 flex justify-between items-center">
             <h1 className="text-2xl font-serif font-bold text-stone-900">Dashboard</h1>
             <Button variant="outline" size="sm"><Settings size={16} /></Button>
         </div>

         {/* Hero Widget */}
         <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Hallo, {user.name.split(' ')[0]}!</h1>
                  <p className="text-stone-600">Wat wil je vandaag doen? / What would you like to do today?</p>
               </div>
               <div className="flex flex-wrap gap-3">
                  <Link to="/search">
                     <Button className="gap-2 shadow-sm">Find a New Kitchen</Button>
                  </Link>
                  <Button variant="outline" className="gap-2 bg-white">Manage Bookings</Button>
                  <Link to="/compliance">
                     <Button variant="outline" className="gap-2 bg-white">Compliance Guide</Button>
                  </Link>
               </div>
            </div>
         </div>

         {/* Compliance Alert (Mock) */}
         <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
               <h4 className="font-bold text-amber-800 text-sm">HACCP Certificate Expiring</h4>
               <p className="text-amber-700 text-sm">Je HACCP-certificaat verloopt over 30 dagen. <Link to="/compliance" className="underline font-medium">Renew now</Link>.</p>
            </div>
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column (Main) */}
            <div className="xl:col-span-2 space-y-8">
               
               {/* Upcoming Bookings */}
               <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center">
                     <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2"><Calendar size={20} className="text-primary-600"/> Upcoming Bookings</h2>
                     <button className="text-sm text-primary-700 font-bold hover:underline">View Calendar</button>
                  </div>
                  <div className="divide-y divide-stone-200">
                     {upcomingBookings.map(booking => (
                        <div key={booking.id} className="p-6 hover:bg-stone-50 transition-colors">
                           <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                              <div>
                                 <h4 className="font-bold text-stone-900 text-lg">{booking.kitchenTitle}</h4>
                                 <div className="flex items-center gap-2 text-stone-600 text-sm mt-1">
                                    <Calendar size={14} /> {booking.date}
                                    <span className="text-stone-300">|</span>
                                    <span className="font-medium">{booking.time} ({booking.duration}h)</span>
                                 </div>
                                 <p className="text-xs text-stone-400 mt-1">Booking ID: #{booking.id}</p>
                              </div>
                              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                 <CheckCircle size={12} /> Confirmed
                              </span>
                           </div>
                           <div className="flex gap-3">
                              <Button size="sm" variant="outline" className="bg-white">View Access Details</Button>
                              <Button size="sm" variant="outline" className="bg-white text-stone-500">Modify</Button>
                              <Button size="sm" variant="outline" className="bg-white text-red-600 border-red-100 hover:bg-red-50">Cancel</Button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Recommended Kitchens */}
               <div>
                  <h2 className="text-xl font-bold text-stone-900 mb-4">Recommended for You</h2>
                  <p className="text-stone-500 text-sm mb-4">Based on your recent booking at <strong>Professional Prep Kitchen</strong></p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {RECOMMENDED_KITCHENS.map(kitchen => (
                        <div key={kitchen.id} className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                           <div className="h-40 overflow-hidden relative">
                              <img src={kitchen.imageUrl} alt={kitchen.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow-sm">€{kitchen.pricePerHour}/hr</div>
                           </div>
                           <div className="p-4">
                              <h3 className="font-bold text-stone-900 line-clamp-1 mb-1">{kitchen.title}</h3>
                              <div className="flex items-center text-xs text-stone-500 mb-3">
                                 <MapPin size={12} className="mr-1" /> {kitchen.location}
                                 <span className="mx-2">•</span>
                                 <Star size={12} className="mr-1 text-amber-400 fill-amber-400" /> {kitchen.rating}
                              </div>
                              <Link to={`/kitchen/${kitchen.id}`}>
                                 <Button fullWidth size="sm" variant="outline">View Details</Button>
                              </Link>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

            {/* Right Column (Sidebar Widgets) */}
            <div className="space-y-8">
               
               {/* Saved Kitchens */}
               <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                     <h2 className="text-lg font-bold text-stone-900">Saved Kitchens</h2>
                     <Heart size={18} className="text-primary-600 fill-primary-600" />
                  </div>
                  <div className="space-y-4">
                     {savedKitchens.map(kitchen => (
                        <div key={kitchen.id} className="flex gap-3 items-center group cursor-pointer hover:bg-stone-50 p-2 rounded-lg -mx-2 transition-colors">
                           <img src={kitchen.imageUrl} alt="" className="w-14 h-14 rounded-md object-cover" />
                           <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-stone-900 truncate group-hover:text-primary-700">{kitchen.title}</h4>
                              <p className="text-xs text-stone-500">€{kitchen.pricePerHour}/hr</p>
                           </div>
                           <Button size="sm" className="h-8 px-3 text-xs">Book</Button>
                        </div>
                     ))}
                  </div>
                  <Button fullWidth variant="outline" className="mt-4 text-xs">View All Saved</Button>
               </div>

               {/* Resources Widget */}
               <div className="bg-primary-50 rounded-xl border border-primary-100 p-6">
                  <h2 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2"><FileText size={18}/> Quick Resources</h2>
                  <ul className="space-y-3">
                     <li>
                        <a href="#" className="flex items-center justify-between text-sm text-primary-800 hover:text-primary-600 font-medium group">
                           HACCP Checklist (PDF) <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center justify-between text-sm text-primary-800 hover:text-primary-600 font-medium group">
                           Rental Agreement Template <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center justify-between text-sm text-primary-800 hover:text-primary-600 font-medium group">
                           Marketing Guide NL <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                        </a>
                     </li>
                  </ul>
               </div>

            </div>

         </div>
      </div>
    </div>
  );
};
import { ShieldCheck } from 'lucide-react';
