import React from 'react';
import { User } from '../types';
import { Button } from './Button';
import { Search, Calendar, BookOpen, FileText, ArrowRight, Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UPCOMING_BOOKINGS, KITCHENS, EVENTS } from '../constants';

interface DashboardProps {
  user: User;
}

export const EntrepreneurDashboard: React.FC<DashboardProps> = ({ user }) => {
  const upcomingBookings = UPCOMING_BOOKINGS.filter(b => b.status === 'Confirmed');
  const savedKitchens = KITCHENS.slice(0, 2);
  const recommendations = KITCHENS.slice(2, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Hero Widget */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Hallo, {user.name.split(' ')[0]}!</h1>
            <p className="text-stone-600">What would you like to do today? / Wat wil je vandaag doen?</p>
          </div>
          <div className="flex flex-wrap gap-3">
             <Link to="/search">
               <Button className="gap-2"><Search size={18} /> Find a Kitchen</Button>
             </Link>
             <Link to="/dashboard">
               <Button variant="outline" className="gap-2"><Calendar size={18} /> Manage Booking</Button>
             </Link>
             <Link to="/services">
               <Button variant="outline" className="gap-2"><BookOpen size={18} /> Workshops</Button>
             </Link>
             <Link to="/support">
                <Button variant="outline" className="gap-2"><FileText size={18} /> Consulting</Button>
             </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Upcoming Bookings */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-200 flex justify-between items-center">
                 <h2 className="text-lg font-bold text-stone-900">Upcoming Bookings</h2>
                 <Link to="/dashboard" className="text-sm text-primary-700 font-bold hover:underline">View All</Link>
              </div>
              <div className="divide-y divide-stone-200">
                 {upcomingBookings.length > 0 ? upcomingBookings.map(booking => (
                   <div key={booking.id} className="p-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                         <h4 className="font-bold text-stone-900 text-lg mb-1">{booking.kitchenTitle}</h4>
                         <p className="text-stone-600 text-sm flex items-center gap-2 mb-2">
                           <Calendar size={14} /> {booking.date} • {booking.time} ({booking.duration}h)
                         </p>
                         <p className="text-sm text-stone-500">{KITCHENS.find(k => k.id === booking.kitchenId)?.location}</p>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                         <Button variant="outline" size="sm" fullWidth>Access Details</Button>
                         <Button variant="secondary" size="sm" fullWidth>Modify</Button>
                      </div>
                   </div>
                 )) : (
                   <div className="p-8 text-center text-stone-500">No upcoming bookings. Time to cook!</div>
                 )}
              </div>
           </div>

           {/* Personalized Recommendations */}
           <div>
              <h2 className="text-xl font-bold text-stone-900 mb-4">Selected for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {recommendations.map(kitchen => (
                   <div key={kitchen.id} className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <div className="h-40 overflow-hidden relative">
                         <img src={kitchen.imageUrl} alt={kitchen.title} className="w-full h-full object-cover" />
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

        {/* Right Column (1/3) */}
        <div className="space-y-8">
           
           {/* Saved Kitchens */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-bold text-stone-900">Saved Kitchens</h2>
                 <Heart size={18} className="text-primary-600 fill-primary-600" />
              </div>
              <div className="space-y-4">
                 {savedKitchens.map(kitchen => (
                   <div key={kitchen.id} className="flex gap-3 items-center group cursor-pointer">
                      <img src={kitchen.imageUrl} alt="" className="w-16 h-16 rounded-md object-cover" />
                      <div className="flex-1">
                         <h4 className="text-sm font-bold text-stone-900 group-hover:text-primary-700">{kitchen.title}</h4>
                         <p className="text-xs text-stone-500">€{kitchen.pricePerHour}/hr</p>
                      </div>
                      <Button size="sm" variant="outline" className="p-2"><ArrowRight size={14}/></Button>
                   </div>
                 ))}
              </div>
              <Button fullWidth variant="outline" className="mt-4 text-xs">View All Saved</Button>
           </div>

           {/* Upcoming Workshops */}
           <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-4">Upcoming Workshops</h2>
              <div className="space-y-4">
                 {EVENTS.slice(0, 2).map(event => (
                   <div key={event.id} className="border border-stone-100 rounded-lg p-3 bg-stone-50">
                      <h4 className="text-sm font-bold text-stone-900 mb-1">{event.title}</h4>
                      <p className="text-xs text-stone-500 mb-2">{event.date.split('•')[0]}</p>
                      <Button size="sm" fullWidth variant="primary" className="text-xs py-1">Register - {event.price}</Button>
                   </div>
                 ))}
              </div>
           </div>

           {/* Growth Tools */}
           <div className="bg-primary-900 rounded-xl shadow-sm border border-stone-200 p-6 text-white">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><FileText size={18}/> Growth Tools</h2>
              <ul className="space-y-3 text-sm text-primary-100">
                 <li><a href="#" className="hover:text-white hover:underline flex items-center gap-2">NVWA Inspection Checklist <ArrowRight size={12}/></a></li>
                 <li><a href="#" className="hover:text-white hover:underline flex items-center gap-2">HACCP Implementation Guide <ArrowRight size={12}/></a></li>
                 <li><a href="#" className="hover:text-white hover:underline flex items-center gap-2">Marketing Tips for NL <ArrowRight size={12}/></a></li>
              </ul>
           </div>

        </div>
      </div>
    </div>
  );
};
