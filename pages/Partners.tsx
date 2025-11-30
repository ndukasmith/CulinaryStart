import React from 'react';
import { PARTNERS } from '../constants';
import { Button } from '../components/Button';
import { Search, Handshake, Users, ArrowUpRight } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Our Partners</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to give Dutch food entrepreneurs the best tools, ingredients, and reach.
          </p>
        </div>

        {/* Partner Directory */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-16">
           <div className="p-6 border-b border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-stone-900">Partner Directory</h2>
              <div className="relative w-full md:w-64">
                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={16} />
                 <input type="text" placeholder="Search partners..." className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md text-sm" />
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
              {PARTNERS.map((partner, idx) => (
                 <div key={idx} className="bg-white p-8 hover:bg-stone-50 transition-colors">
                    <div className="h-16 mb-6 flex items-center">
                       {/* Placeholder for Logo */}
                       {partner.logoUrl ? (
                         <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-[160px] object-contain" />
                       ) : (
                         <span className="text-2xl font-bold text-stone-800">{partner.name}</span>
                       )}
                    </div>
                    <p className="text-stone-600 mb-6 min-h-[48px]">{partner.description}</p>
                    <a href="#" className="inline-flex items-center text-primary-700 font-bold hover:underline">
                       Connect Now <ArrowUpRight size={16} className="ml-1" />
                    </a>
                 </div>
              ))}
              {/* Mock Extra Partners */}
              <div className="bg-white p-8 hover:bg-stone-50 transition-colors">
                 <div className="h-16 mb-6 flex items-center">
                    <img src="https://placehold.co/200x80?text=StartLife" alt="StartLife" className="max-h-full max-w-[160px] object-contain" />
                 </div>
                 <p className="text-stone-600 mb-6 min-h-[48px]">Accelerating agrifoodtech startups with funding and mentorship.</p>
                 <a href="#" className="inline-flex items-center text-primary-700 font-bold hover:underline">Connect Now <ArrowUpRight size={16} className="ml-1" /></a>
              </div>
           </div>
        </div>

        {/* Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-primary-900 text-white p-8 rounded-xl">
              <Handshake className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Co-Branding Opportunities</h3>
              <p className="text-stone-300 mb-6">
                 Sponsor our next "Amsterdam Food Entrepreneur Mixer" or host a specialized workshop. Reach 150+ engaged local makers.
              </p>
              <Button onClick={() => window.location.href = 'mailto:sponsors@culinarystart.nl'} className="bg-white text-stone-900 hover:bg-stone-100 border-none">Become a Sponsor</Button>
           </div>

           <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
              <Users className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-stone-900">Affiliate Program</h3>
              <p className="text-stone-600 mb-6">
                 Earn 10% commission for referring new hosts or entrepreneurs to CulinaryStart. Free to join.
              </p>
              <Button onClick={() => alert('Application form coming soon! Contact support for early access.')} variant="outline">Join Affiliate Program</Button>
           </div>
        </div>

      </div>
    </div>
  );
};