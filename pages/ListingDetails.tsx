import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Check, Shield, Info, Calendar, Clock, DollarSign, User } from 'lucide-react';
import { KITCHENS } from '../constants';
import { Button } from '../components/Button';

export const ListingDetails: React.FC = () => {
  const { id } = useParams();
  const kitchen = KITCHENS.find(k => k.id === id);
  const [bookingDate, setBookingDate] = useState('');
  const [activeTab, setActiveTab] = useState<'details'|'reviews'|'rules'>('details');

  if (!kitchen) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Kitchen not found</h2>
        <Link to="/search">
          <Button>Browse all kitchens</Button>
        </Link>
      </div>
    );
  }

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking Request Sent for ${bookingDate}!\n\nThe owner (${kitchen.ownerName}) will review your request shortly.`);
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Image Gallery Placeholder */}
      <div className="h-[400px] md:h-[500px] w-full bg-stone-200 relative">
        <img 
          src={kitchen.imageUrl} 
          alt={kitchen.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to a generic industrial kitchen image if the specific one fails
            e.currentTarget.src = "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80";
            e.currentTarget.className = "w-full h-full object-cover opacity-90";
          }}
        />
        <div className="absolute top-4 left-4">
          <Link to="/search">
            <Button variant="secondary" size="sm" className="shadow-lg">&larr; Back to Search</Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wide rounded">
                   {kitchen.type}
                </span>
                {kitchen.certifications.includes('HACCP Certified') && (
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide rounded flex items-center gap-1">
                    <Shield size={12} /> HACCP
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">{kitchen.title}</h1>
              <div className="flex items-center text-stone-500">
                <MapPin size={18} className="mr-1" />
                <span className="mr-4">{kitchen.location}</span>
                <Star size={18} className="mr-1 text-amber-400 fill-amber-400" />
                <span className="font-medium text-stone-900 mr-1">{kitchen.rating}</span>
                <span>({kitchen.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-stone-200 mb-8">
               <nav className="flex space-x-8">
                 {['details', 'reviews', 'rules'].map((tab) => (
                   <button
                     key={tab}
                     onClick={() => setActiveTab(tab as any)}
                     className={`pb-4 px-1 border-b-2 font-medium text-sm capitalize ${
                       activeTab === tab 
                         ? 'border-primary-700 text-primary-700' 
                         : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                     }`}
                   >
                     {tab === 'details' ? 'Overview & Equipment' : tab === 'reviews' ? 'Reviews' : 'House Rules'}
                   </button>
                 ))}
               </nav>
            </div>

            {activeTab === 'details' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="prose prose-stone max-w-none text-stone-600">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">About this space</h3>
                  <p>{kitchen.description}</p>
                </div>

                <div className="border-t border-stone-200 pt-8">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Amenities & Equipment</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {kitchen.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center text-stone-600">
                        <Check className="w-5 h-5 text-primary-600 mr-3" />
                        {item}
                      </div>
                    ))}
                    {/* Mock extra items */}
                    <div className="flex items-center text-stone-600"><Check className="w-5 h-5 text-primary-600 mr-3" />Free Parking</div>
                    <div className="flex items-center text-stone-600"><Check className="w-5 h-5 text-primary-600 mr-3" />Loading Dock</div>
                    <div className="flex items-center text-stone-600"><Check className="w-5 h-5 text-primary-600 mr-3" />24/7 Access</div>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-8">
                   <h3 className="text-xl font-bold text-stone-900 mb-4">Meet the Host</h3>
                   <div className="flex items-start gap-4">
                      <div className="bg-stone-200 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                         <User size={32} className="text-stone-400" />
                      </div>
                      <div>
                         <h4 className="font-bold text-stone-900 text-lg">{kitchen.ownerName}</h4>
                         <p className="text-stone-500 text-sm mb-2">Member since 2021 • Response rate: 98%</p>
                         <p className="text-stone-600">
                            "We have been running commercial kitchens in {kitchen.location} for over 10 years. Happy to help startups get off the ground!"
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'rules' && (
               <div className="space-y-6">
                 <h3 className="text-xl font-bold text-stone-900">House Rules</h3>
                 <ul className="list-disc pl-5 space-y-2 text-stone-600">
                    <li>Must possess valid HACCP certification.</li>
                    <li>Clean up all stations before checking out (Check-out checklist provided).</li>
                    <li>No smoking inside the premises.</li>
                    <li>Dispose of waste in designated bins (Organic vs General).</li>
                    <li>Report any equipment damage immediately.</li>
                 </ul>
                 <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                    <h4 className="font-bold text-amber-800 text-sm mb-1">Cancellation Policy</h4>
                    <p className="text-amber-700 text-sm">Full refund if canceled 48 hours before booking. 50% refund if canceled 24-48 hours before.</p>
                 </div>
               </div>
            )}

            {activeTab === 'reviews' && (
               <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="text-4xl font-bold text-stone-900">{kitchen.rating}</div>
                     <div>
                        <div className="flex text-amber-400">
                           {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <span className="text-stone-500 text-sm">Based on {kitchen.reviewCount} reviews</span>
                     </div>
                  </div>
                  {/* Mock Review */}
                  <div className="border-b border-stone-200 pb-6">
                     <div className="flex justify-between mb-2">
                        <h5 className="font-bold text-stone-900">Emma V.</h5>
                        <span className="text-stone-400 text-sm">Oct 2023</span>
                     </div>
                     <p className="text-stone-600">
                        "Great space for my plant-based meal prep. NVWA-compliant which saved me a headache during inspection. The convection oven is a beast!"
                     </p>
                  </div>
               </div>
            )}

          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-xl border border-stone-200 shadow-lg">
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <span className="text-3xl font-bold text-stone-900">€{kitchen.pricePerHour}</span>
                  <span className="text-stone-500">/ hour</span>
                </div>
                <div className="text-xs text-stone-500 underline cursor-help">Pricing breakdown</div>
              </div>

              <form onSubmit={handleBook} className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                   <div className="col-span-2">
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Date</label>
                      <input 
                        type="date" 
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-sm"
                      />
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Start</label>
                      <select className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm">
                         <option>08:00</option>
                         <option>12:00</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-bold uppercase text-stone-500 mb-1">End</label>
                      <select className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm">
                         <option>12:00</option>
                         <option>16:00</option>
                      </select>
                   </div>
                </div>

                <div className="pt-4 pb-2 space-y-2">
                  <div className="flex justify-between text-sm text-stone-600">
                    <span className="underline">€{kitchen.pricePerHour} x 4 hours</span>
                    <span>€{kitchen.pricePerHour * 4}</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-600">
                    <span className="underline">Service Fee</span>
                    <span>€15</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-600">
                    <span className="underline">Cleaning Fee</span>
                    <span>€25</span>
                  </div>
                  <div className="border-t border-stone-200 pt-3 flex justify-between font-bold text-stone-900 text-lg">
                    <span>Total</span>
                    <span>€{(kitchen.pricePerHour * 4) + 40}</span>
                  </div>
                </div>

                <Button type="submit" fullWidth size="lg">
                  Reserve Now
                </Button>
                <Button type="button" variant="outline" fullWidth size="sm">
                  Inquire
                </Button>
                
                <div className="text-center mt-2">
                   <p className="text-xs text-stone-500 mb-2">You won't be charged yet.</p>
                   <div className="flex items-center justify-center gap-2 grayscale opacity-60">
                     <span className="text-xs font-bold border border-stone-300 px-1 rounded">iDEAL</span>
                     <span className="text-xs font-bold border border-stone-300 px-1 rounded">Visa</span>
                     <span className="text-xs font-bold border border-stone-300 px-1 rounded">PayPal</span>
                   </div>
                </div>
              </form>
            </div>
            
            <div className="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200 text-center">
               <h4 className="font-bold text-stone-900 mb-1">Need monthly access?</h4>
               <p className="text-sm text-stone-600 mb-3">Save up to 20% with a recurring subscription.</p>
               <Link to="/pricing" className="text-primary-700 text-sm font-bold hover:underline">View Membership Plans</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};