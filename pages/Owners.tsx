import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, Calendar, Shield, Check, Clock } from 'lucide-react';
import { Button } from '../components/Button';

export const Owners: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Monetize Your Underutilized Kitchen Space
                </h1>
                <p className="text-xl text-stone-300 mb-8">
                  Earn €1500–€5000/month by renting unused hours to vetted Dutch food entrepreneurs.
                </p>
                <Link to="/login">
                   <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white border-none">Start Earning</Button>
                </Link>
             </div>
             <div className="hidden md:block">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80" alt="Kitchen" className="rounded-xl shadow-2xl opacity-90" />
             </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Euro className="text-primary-600 w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Steady Income</h3>
                  <p className="text-sm text-stone-600">Cover rent increases or utility bills with consistent bookings.</p>
               </div>
               <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Clock className="text-primary-600 w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Low Effort</h3>
                  <p className="text-sm text-stone-600">We handle payments, bookings, and vetting. You just open the door.</p>
               </div>
               <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Shield className="text-primary-600 w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Risk Mitigation</h3>
                  <p className="text-sm text-stone-600">Liability coverage up to €100,000 for every booking.</p>
               </div>
               <div className="text-center">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Check className="text-primary-600 w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Targeted Exposure</h3>
                  <p className="text-sm text-stone-600">Reach 1000+ qualified entrepreneurs, no spam inquiries.</p>
               </div>
            </div>
         </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-stone-50">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-12">
               <div className="flex md:items-center flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                     <h3 className="text-xl font-bold mb-2">Create Your Host Profile</h3>
                     <p className="text-stone-600">Enter kitchen details, upload photos, and list equipment. We help you highlight what entrepreneurs care about.</p>
                  </div>
               </div>
               <div className="flex md:items-center flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                     <h3 className="text-xl font-bold mb-2">Set Your Terms</h3>
                     <p className="text-stone-600">Choose your pricing (hourly/monthly), availability calendar, and specific house rules.</p>
                  </div>
               </div>
               <div className="flex md:items-center flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 flex-shrink-0 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                     <h3 className="text-xl font-bold mb-2">Start Earning</h3>
                     <p className="text-stone-600">Receive booking requests, get automated weekly payouts, and manage everything via your dashboard.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing / Commission */}
      <section className="py-16 bg-white border-t border-stone-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Transparent Pricing</h2>
            <p className="text-lg text-stone-600 mb-8">
               We only make money when you do. No setup fees, no monthly costs for basic listings.
            </p>
            <div className="bg-primary-50 p-8 rounded-xl inline-block">
               <span className="text-5xl font-bold text-primary-700">15%</span>
               <p className="text-primary-900 font-medium mt-2">Commission per booking</p>
               <p className="text-sm text-stone-500 mt-4">Includes payment processing, marketing, and support.</p>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-12 text-center">
         <h2 className="text-2xl font-bold mb-4">Have spare capacity?</h2>
         <Link to="/login">
            <Button size="lg">List Your Kitchen</Button>
         </Link>
      </section>
    </div>
  );
};