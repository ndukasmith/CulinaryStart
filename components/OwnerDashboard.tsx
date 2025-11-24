import React from 'react';
import { User } from '../types';
import { Button } from './Button';
import { Settings, BarChart3, Calendar, CheckCircle, ShieldAlert, Plus, Edit, Eye, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UPCOMING_BOOKINGS, KITCHENS, COMPLIANCE_STATUS, DASHBOARD_STATS_OWNER } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: User;
}

export const OwnerDashboard: React.FC<DashboardProps> = ({ user }) => {
  const pendingBookings = UPCOMING_BOOKINGS.filter(b => b.status === 'Pending');
  const myKitchens = KITCHENS.filter(k => k.type !== 'Ghost Kitchen'); // Mock filter

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Widget */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Hallo, {user.name.split(' ')[0]}!</h1>
            <p className="text-stone-600">Manage your kitchen and earn / Beheer je keuken en verdien</p>
          </div>
          <div className="flex flex-wrap gap-3">
             <Button className="gap-2 bg-sky-600 hover:bg-sky-700"><Edit size={18} /> Edit Kitchen</Button>
             <Button variant="outline" className="gap-2"><Calendar size={18} /> Manage Bookings</Button>
             <Button variant="outline" className="gap-2"><BarChart3 size={18} /> View Earnings</Button>
             <Link to="/compliance">
                <Button variant="outline" className="gap-2"><CheckCircle size={18} /> Compliance Check</Button>
             </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Booking Overview */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center bg-stone-50">
                 <h2 className="text-lg font-bold text-stone-900">Booking Overview</h2>
                 <div className="flex gap-2">
                    <span className="text-xs font-bold bg-sky-100 text-sky-800 px-2 py-1 rounded">New Requests ({pendingBookings.length})</span>
                    <span className="text-xs font-bold text-stone-500 px-2 py-1">Confirmed</span>
                 </div>
              </div>
              <div className="divide-y divide-stone-200">
                 {pendingBookings.length > 0 ? pendingBookings.map(booking => (
                   <div key={booking.id} className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                         <div>
                            <div className="flex items-center gap-2 mb-1">
                               <h4 className="font-bold text-stone-900 text-lg">{booking.entrepreneurBusiness}</h4>
                               <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Pending Approval</span>
                            </div>
                            <p className="text-stone-600 text-sm mb-1">Requested by: {booking.entrepreneurName}</p>
                            <p className="text-stone-500 text-xs flex items-center gap-2">
                               <Calendar size={12} /> {booking.date} • {booking.time} ({booking.duration}h) • {booking.kitchenTitle}
                            </p>
                         </div>
                         <div className="text-right">
                            <div className="text-2xl font-bold text-stone-900">€{booking.amount}</div>
                            <div className="text-xs text-stone-400">Est. Earnings</div>
                         </div>
                      </div>
                      <div className="flex gap-3">
                         <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 border-none">Approve Request</Button>
                         <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-stone-200">Reject</Button>
                         <Button size="sm" variant="outline">Message</Button>
                      </div>
                   </div>
                 )) : (
                   <div className="p-8 text-center text-stone-500">No new booking requests.</div>
                 )}
              </div>
              <div className="bg-stone-50 p-3 text-center border-t border-stone-200">
                 <Link to="/dashboard" className="text-sm font-bold text-sky-700 hover:underline">View All Bookings</Link>
              </div>
           </div>

           {/* Earnings Summary */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-lg font-bold text-stone-900">Earnings Overview</h2>
                 <select className="text-sm border-stone-300 rounded-md text-stone-600">
                   <option>This Week</option>
                   <option>Last Week</option>
                   <option>Last Month</option>
                 </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 <div className="bg-sky-50 p-4 rounded-lg">
                    <p className="text-sm text-sky-800 font-medium mb-1">Total Earned (Oct)</p>
                    <p className="text-2xl font-bold text-sky-900">€1,800</p>
                 </div>
                 <div className="bg-stone-50 p-4 rounded-lg">
                    <p className="text-sm text-stone-600 font-medium mb-1">Pending Payout</p>
                    <p className="text-2xl font-bold text-stone-900">€450</p>
                    <p className="text-xs text-stone-500">Due 15/11/2025</p>
                 </div>
                 <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-sm text-emerald-800 font-medium mb-1">Booking Rate</p>
                    <p className="text-2xl font-bold text-emerald-900">75%</p>
                    <p className="text-xs text-emerald-700">+5% vs avg</p>
                 </div>
              </div>
              <div className="h-64 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={DASHBOARD_STATS_OWNER}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} />
                     <YAxis axisLine={false} tickLine={false} prefix="€" />
                     <Tooltip cursor={{fill: '#f0f9ff'}} />
                     <Bar dataKey="revenue" fill="#0284c7" radius={[4, 4, 0, 0]} />
                   </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="mt-4 text-right">
                 <Button variant="outline" size="sm" className="gap-2"><Wallet size={16}/> View Detailed Report</Button>
              </div>
           </div>

        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-8">
           
           {/* Compliance Status */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                 <ShieldAlert size={20} className="text-sky-600"/> Compliance Status
              </h2>
              <div className="space-y-4">
                 <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div>
                       <p className="text-sm font-bold text-emerald-900">HACCP Certified</p>
                       <p className="text-xs text-emerald-700">Valid until {COMPLIANCE_STATUS.haccpValidUntil}</p>
                    </div>
                    <CheckCircle size={20} className="text-emerald-600" />
                 </div>
                 <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div>
                       <p className="text-sm font-bold text-emerald-900">NVWA Registered</p>
                       <p className="text-xs text-emerald-700">Registration Active</p>
                    </div>
                    <CheckCircle size={20} className="text-emerald-600" />
                 </div>
                 <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <p className="text-xs font-bold text-amber-800 mb-1">Upcoming Renewal</p>
                    <p className="text-xs text-amber-700">Hygiene Code refresher due in 45 days.</p>
                 </div>
              </div>
           </div>

           {/* My Kitchens */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold text-stone-900">My Kitchens</h2>
                 <button className="text-sky-600 hover:bg-sky-50 p-1 rounded"><Plus size={20} /></button>
              </div>
              <div className="space-y-4">
                 {myKitchens.map(kitchen => (
                   <div key={kitchen.id} className="border border-stone-100 rounded-lg p-3 flex gap-3 items-center">
                      <img src={kitchen.imageUrl} alt="" className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                         <h4 className="text-sm font-bold text-stone-900 truncate">{kitchen.title}</h4>
                         <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-emerald-100 text-emerald-800 px-1.5 rounded">{kitchen.status}</span>
                            <span className="text-xs text-stone-500">{kitchen.occupancyRate}% Occ.</span>
                         </div>
                      </div>
                      <div className="flex flex-col gap-1">
                         <button className="text-stone-400 hover:text-sky-600"><Edit size={14} /></button>
                         <button className="text-stone-400 hover:text-sky-600"><Calendar size={14} /></button>
                      </div>
                   </div>
                 ))}
              </div>
              <Button fullWidth variant="outline" className="mt-4 text-xs">Manage Listings</Button>
           </div>

        </div>
      </div>
    </div>
  );
};
