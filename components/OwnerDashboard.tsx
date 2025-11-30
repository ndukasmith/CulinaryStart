import React from 'react';
import { User } from '../types';
import { Button } from './Button';
import { Settings, BarChart3, Calendar, CheckCircle, ShieldAlert, Plus, Edit, Eye, Wallet, Home, DollarSign, List, Shield, MessageSquare, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UPCOMING_BOOKINGS, KITCHENS, COMPLIANCE_STATUS, DASHBOARD_STATS_OWNER } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: User;
}

export const OwnerDashboard: React.FC<DashboardProps> = ({ user }) => {
  const pendingBookings = UPCOMING_BOOKINGS.filter(b => b.status === 'Pending');
  const myKitchens = KITCHENS.filter(k => k.type !== 'Ghost Kitchen'); 

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-stone-200 hidden lg:block sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
         <div className="p-6">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">Host Menu</h3>
            <nav className="space-y-1">
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sky-700 bg-sky-50 rounded-md font-medium">
                  <Home size={18} /> Dashboard
               </Link>
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <List size={18} /> My Kitchens
               </Link>
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Calendar size={18} /> Bookings
               </Link>
               <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Wallet size={18} /> Earnings
               </Link>
            </nav>

            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mt-8 mb-4">Management</h3>
            <nav className="space-y-1">
               <Link to="/compliance" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <Shield size={18} /> Compliance
               </Link>
               <Link to="/support" className="flex items-center gap-3 px-3 py-2 text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-md font-medium">
                  <MessageSquare size={18} /> Support
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
         {/* Mobile Header */}
         <div className="lg:hidden mb-6 flex justify-between items-center">
             <h1 className="text-2xl font-serif font-bold text-stone-900">Host Dashboard</h1>
             <Button variant="outline" size="sm"><Settings size={16} /></Button>
         </div>

         {/* Hero Widget */}
         <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div>
                  <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Hallo, {user.name.split(' ')[0]}!</h1>
                  <p className="text-stone-600">Beheer je keuken en verdien / Manage your kitchen and earn</p>
               </div>
               <div className="flex flex-wrap gap-3">
                  <Button className="gap-2 bg-sky-600 hover:bg-sky-700 shadow-sm"><Edit size={18} /> Edit Kitchen Listing</Button>
                  <Button variant="outline" className="gap-2 bg-white"><CheckCircle size={18} /> Approve Requests</Button>
                  <Button variant="outline" className="gap-2 bg-white"><BarChart3 size={18} /> View Monthly Earnings</Button>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column (Main) */}
            <div className="xl:col-span-2 space-y-8">
               
               {/* Booking Requests (Priority) */}
               <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center bg-amber-50">
                     <h2 className="text-lg font-bold text-amber-900 flex items-center gap-2">
                        <AlertTriangle size={20} /> Pending Requests
                     </h2>
                     <span className="text-xs font-bold bg-white text-amber-800 px-2 py-1 rounded border border-amber-200">{pendingBookings.length} New</span>
                  </div>
                  <div className="divide-y divide-stone-200">
                     {pendingBookings.length > 0 ? pendingBookings.map(booking => (
                        <div key={booking.id} className="p-6">
                           <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                              <div>
                                 <h4 className="font-bold text-stone-900 text-lg mb-1">{booking.entrepreneurBusiness}</h4>
                                 <p className="text-sm text-stone-600 mb-2">Entrepreneur: {booking.entrepreneurName}</p>
                                 <div className="flex items-center gap-2 text-stone-500 text-xs">
                                    <Calendar size={14} /> {booking.date} • {booking.time} ({booking.duration}h)
                                 </div>
                              </div>
                              <div className="text-right">
                                 <div className="text-2xl font-bold text-stone-900">€{booking.amount}</div>
                                 <div className="text-xs text-stone-400">Est. Earnings</div>
                              </div>
                           </div>
                           <div className="flex gap-3">
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 border-none w-24">Approve</Button>
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-stone-200 w-24">Reject</Button>
                              <Button size="sm" variant="outline" className="text-stone-500">View Profile</Button>
                           </div>
                        </div>
                     )) : (
                        <div className="p-8 text-center text-stone-500">No pending requests. Great job!</div>
                     )}
                  </div>
               </div>

               {/* Earnings Summary */}
               <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                     <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2"><Wallet size={20} className="text-sky-600"/> Earnings Summary</h2>
                     <span className="text-sm font-medium text-stone-500">October 2025</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                     <div className="bg-sky-50 p-5 rounded-lg border border-sky-100">
                        <p className="text-sm text-sky-800 font-medium mb-1">Total Earned (Oct)</p>
                        <p className="text-3xl font-bold text-sky-900">€1,800</p>
                        <p className="text-xs text-sky-600 mt-1">+12% from last month</p>
                     </div>
                     <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                        <p className="text-sm text-stone-600 font-medium mb-1">Pending Payout</p>
                        <p className="text-3xl font-bold text-stone-900">€450</p>
                        <p className="text-xs text-stone-500 mt-1">Due 15/11/2025</p>
                     </div>
                  </div>
                  <div className="h-64 w-full min-w-0">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={DASHBOARD_STATS_OWNER}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} />
                           <XAxis dataKey="name" axisLine={false} tickLine={false} />
                           <YAxis axisLine={false} tickLine={false} prefix="€" />
                           <Tooltip cursor={{fill: '#f0f9ff'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                           <Bar dataKey="revenue" fill="#0284c7" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               </div>

            </div>

            {/* Right Column (Sidebar Widgets) */}
            <div className="space-y-8">
               
               {/* My Kitchens */}
               <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                     <h2 className="text-lg font-bold text-stone-900">My Kitchens</h2>
                  </div>
                  <div className="space-y-4">
                     {myKitchens.map(kitchen => (
                        <div key={kitchen.id} className="border border-stone-100 rounded-lg p-3">
                           <div className="flex gap-3 items-center mb-3">
                              <img src={kitchen.imageUrl} alt="" className="w-14 h-14 rounded-md object-cover" />
                              <div className="flex-1 min-w-0">
                                 <h4 className="text-sm font-bold text-stone-900 truncate">{kitchen.title}</h4>
                                 <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded uppercase">Active</span>
                                 </div>
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-2 text-xs text-stone-500 bg-stone-50 p-2 rounded mb-3">
                              <div className="text-center border-r border-stone-200">
                                 <span className="block font-bold text-stone-900 text-lg">75%</span>
                                 Booking Rate
                              </div>
                              <div className="text-center">
                                 <span className="block font-bold text-stone-900 text-lg">4.8</span>
                                 Rating
                              </div>
                           </div>
                           <Button fullWidth size="sm" variant="outline" className="text-xs">Update Availability</Button>
                        </div>
                     ))}
                  </div>
                  <Button fullWidth variant="outline" className="mt-4 border-dashed text-stone-400 hover:text-stone-600 hover:border-stone-400"><Plus size={16} className="mr-2"/> Add New Kitchen</Button>
               </div>

               {/* Compliance Status */}
               <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
                  <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                     <ShieldAlert size={20} className="text-sky-600"/> Compliance
                  </h2>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <div>
                           <p className="text-sm font-bold text-emerald-900">HACCP Certified</p>
                           <p className="text-xs text-emerald-700">Valid until 2026</p>
                        </div>
                        <CheckCircle size={20} className="text-emerald-600" />
                     </div>
                     <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <p className="text-xs font-bold text-amber-800 mb-1">Action Required</p>
                        <p className="text-xs text-amber-700 mb-2">Hygiene Code refresher due in 60 days.</p>
                        <a href="#" className="text-xs font-bold text-amber-900 underline">View Renewal Tools</a>
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </div>
    </div>
  );
};