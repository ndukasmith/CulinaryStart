import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Transparent Pricing</h1>
          <p className="text-xl text-stone-600">
             Choose the plan that fits your production scale. No hidden fees.
          </p>
        </div>

        {/* Rental Tiers Comparison */}
        <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Rental Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {/* Hourly */}
           <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold mb-2">Hourly</h3>
              <p className="text-stone-500 mb-6 text-sm">Best for test batches & pop-ups.</p>
              <div className="mb-6">
                 <span className="text-3xl font-bold">€20-40</span> <span className="text-stone-500">/hour</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-stone-600">
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> Pay-as-you-go</li>
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> No commitment</li>
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> Standard equipment access</li>
              </ul>
              <Link to="/search"><Button fullWidth variant="outline">Browse Hourly</Button></Link>
           </div>

           {/* Monthly Basic */}
           <div className="bg-white p-8 rounded-xl shadow-md border-2 border-primary-600 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <h3 className="text-xl font-bold mb-2">Monthly Basic</h3>
              <p className="text-stone-500 mb-6 text-sm">Best for small businesses (1-2 people).</p>
              <div className="mb-6">
                 <span className="text-3xl font-bold">~€500</span> <span className="text-stone-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-stone-600">
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> ~50 hours/month</li>
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> Priority booking</li>
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> Storage included</li>
              </ul>
              <Link to="/search"><Button fullWidth>Browse Monthly</Button></Link>
           </div>

           {/* Pro / Production */}
           <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h3 className="text-xl font-bold mb-2">Monthly Pro</h3>
              <p className="text-stone-500 mb-6 text-sm">Best for scaling businesses (3+ people).</p>
              <div className="mb-6">
                 <span className="text-3xl font-bold">~€1500</span> <span className="text-stone-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-stone-600">
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> Unlimited hours</li>
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> Dedicated shelf space</li>
                 <li className="flex gap-2"><Check size={16} className="text-primary-600"/> 24/7 Access</li>
              </ul>
              <Button fullWidth variant="outline" onClick={() => alert('Contact support for Pro plans')}>Contact Sales</Button>
           </div>
        </div>

        {/* Membership Plans */}
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-white">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                 <h2 className="text-2xl font-serif font-bold mb-4">Entrepreneur Pro Membership</h2>
                 <p className="text-stone-400 mb-6">Boost your business with perks beyond just kitchen space.</p>
                 <div className="text-3xl font-bold mb-6">€29 <span className="text-sm font-normal text-stone-500">/month</span></div>
                 <ul className="space-y-2 mb-8 text-stone-300">
                    <li className="flex gap-2"><Check size={18} className="text-emerald-400"/> 10% discount on all rentals</li>
                    <li className="flex gap-2"><Check size={18} className="text-emerald-400"/> Free access to 2 workshops/year</li>
                    <li className="flex gap-2"><Check size={18} className="text-emerald-400"/> Quarterly consulting session</li>
                 </ul>
                 <Button variant="primary" fullWidth>Join Pro</Button>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-stone-700 pt-8 md:pt-0 md:pl-12">
                 <h2 className="text-2xl font-serif font-bold mb-4">Host Premium</h2>
                 <p className="text-stone-400 mb-6">Maximize visibility and earnings for your kitchen.</p>
                 <div className="text-3xl font-bold mb-6">€49 <span className="text-sm font-normal text-stone-500">/month</span></div>
                 <ul className="space-y-2 mb-8 text-stone-300">
                    <li className="flex gap-2"><Check size={18} className="text-emerald-400"/> Reduced commission (10% vs 15%)</li>
                    <li className="flex gap-2"><Check size={18} className="text-emerald-400"/> Top-of-search visibility</li>
                    <li className="flex gap-2"><Check size={18} className="text-emerald-400"/> Advanced analytics dashboard</li>
                 </ul>
                 <Button variant="primary" fullWidth>Upgrade Listing</Button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};