import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Users, TrendingUp, Star, Sparkles, PlusCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { KitchenCard } from '../components/KitchenCard';
import { KITCHENS } from '../constants';

export const Home: React.FC = () => {
  const featuredKitchens = KITCHENS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Pilot Program Banner (Bonus Section 15.1) */}
      <div className="bg-stone-900 text-white px-4 py-3 text-center text-sm font-medium">
         <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-amber-400" />
            <span>Join our Pilot Program: Get 50% Off Your First Month of Kitchen Rental!</span>
            <Link to="/entrepreneurs" className="underline hover:text-primary-300 ml-2">Apply Now &rarr;</Link>
         </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=1920&q=80" 
            alt="Black Chef in Professional Kitchen" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=80"; // Fallback to kitchen interior
            }}
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
            Flexible, Fully Equipped Kitchens<br/> for Food Entrepreneurs in the Netherlands
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/search">
              <Button size="lg" className="w-full sm:w-auto min-w-[220px] gap-2 h-14 text-lg">
                <Search size={22} />
                Find a Kitchen
              </Button>
            </Link>
            <Link to="/owners">
              <Button size="lg" className="w-full sm:w-auto min-w-[220px] gap-2 h-14 text-lg">
                <PlusCircle size={22} />
                List Your Kitchen
              </Button>
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80">
             <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <ShieldCheck size={18} className="text-emerald-400" /> NVWA Compliant
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <ShieldCheck size={18} className="text-emerald-400" /> HACCP Certified
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <Star size={18} className="text-amber-400" /> Trusted by 200+ Businesses
             </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-primary-50 py-12 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="flex justify-center mb-4 text-primary-700">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">+50% Growth</h3>
              <p className="text-stone-600">In Dutch plant-based food sales last year. We support innovation.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-primary-700">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">NVWA Compliant</h3>
              <p className="text-stone-600">All listings verified for hygiene and safety standards.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4 text-primary-700">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Community Driven</h3>
              <p className="text-stone-600">Join a network of local entrepreneurs and suppliers like Sligro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">Popular Kitchens</h2>
              <p className="text-stone-500">Highly rated spaces ready for your next production run.</p>
            </div>
            <Link to="/search" className="hidden sm:flex items-center text-primary-700 font-medium hover:text-primary-800">
              View all listings <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredKitchens.map(kitchen => (
              <KitchenCard key={kitchen.id} kitchen={kitchen} />
            ))}
          </div>
          
          <div className="mt-8 sm:hidden text-center">
            <Link to="/search">
              <Button variant="outline" fullWidth>View all listings</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800 skew-x-12 transform translate-x-20 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to scale your food business?</h2>
          <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a HACCP-certified prep kitchen for a day or a production facility for a month, CulinaryStart has the space for you.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/entrepreneurs">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                For Entrepreneurs
              </Button>
            </Link>
            <Link to="/owners">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                For Kitchen Owners
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};