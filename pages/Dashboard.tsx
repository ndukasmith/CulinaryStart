import React from 'react';
import { User, UserRole } from '../types';
import { UPCOMING_BOOKINGS, DASHBOARD_STATS_OWNER } from '../constants';
import { Button } from '../components/Button';
import { Calendar, Clock, DollarSign, MessageSquare, FileText, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: User;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  
  if (user.role === UserRole.ENTREPRENEUR) {
    return (
      <div className="min-h-screen bg-stone-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-stone-900">Welcome back, {user.name}</h1>
            <Button>Browse Kitchens</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-stone-500">Upcoming Bookings</h3>
                <Calendar className="text-primary-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-stone-900">{UPCOMING_BOOKINGS.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-stone-500">Total Hours Cooked</h3>
                <Clock className="text-primary-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-stone-900">124</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
               <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-stone-500">Compliance Docs</h3>
                <FileText className="text-primary-600" size={24} />
              </div>
              <p className="text-sm text-emerald-600 font-medium bg-emerald-50 inline-block px-2 py-1 rounded">HACCP Active</p>
            </div>
          </div>

          {/* Bookings List */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-200">
              <h2 className="text-lg font-bold text-stone-900">Your Reservations</h2>
            </div>
            <div className="divide-y divide-stone-200">
              {UPCOMING_BOOKINGS.map(booking => (
                <div key={booking.id} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h4 className="text-lg font-medium text-stone-900">{booking.kitchenTitle}</h4>
                    <p className="text-stone-500 flex items-center mt-1">
                      <Calendar size={14} className="mr-1" /> {booking.date}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {booking.status}
                    </span>
                    <span className="font-bold text-stone-900">€{booking.amount}</span>
                    <Button variant="outline" size="sm">Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Owner Dashboard View
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-3xl font-serif font-bold text-stone-900">Owner Dashboard</h1>
           <Button className="gap-2">
             <Plus size={18} /> Add New Listing
           </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-stone-900">Weekly Revenue</h3>
              <select className="text-sm border-stone-300 rounded-md text-stone-600">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DASHBOARD_STATS_OWNER}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} prefix="€" />
                  <Tooltip cursor={{fill: '#f5f5f4'}} />
                  <Bar dataKey="revenue" fill="#15803d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Actions & Stats */}
          <div className="space-y-8">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <h3 className="text-stone-500 font-medium mb-2">Total Revenue (Oct)</h3>
                <p className="text-4xl font-bold text-stone-900">€3,240</p>
                <div className="mt-4 flex gap-2">
                   <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">+12% vs last month</span>
                </div>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
               <h3 className="font-bold text-stone-900 mb-4">Pending Requests</h3>
               <div className="space-y-4">
                 <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-stone-900">The Vegan Baker</p>
                      <p className="text-xs text-stone-500">Oct 28 • 4 hours</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-red-600 text-xs hover:underline">Decline</button>
                      <button className="text-emerald-700 text-xs font-bold hover:underline">Accept</button>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};