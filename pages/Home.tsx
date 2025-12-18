
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Users, TrendingUp, Star, Sparkles, PlusCircle, ChefHat } from 'lucide-react';
import { Button } from '../components/Button';
import { KitchenCard } from '../components/KitchenCard';
import { KITCHENS } from '../constants';

export const Home: React.FC = () => {
  const featuredKitchens = KITCHENS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Pilot Program Banner */}
      <div className="bg-primary-900 text-white px-4 py-2.5 text-center text-sm font-medium">
         <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-emerald-400 animate-pulse" />
            <span>Join our 2025 Pilot Program: Get 50% Off Your First Kitchen Rental!</span>
            <Link to="/entrepreneurs" className="underline hover:text-emerald-300 ml-2 font-bold transition-colors">Apply Now &rarr;</Link>
         </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1920&q=80" 
            alt="Professional Commercial Kitchen" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=80";
            }}
          />
          <div className="absolute inset-0 bg-stone-900/65 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
             <ChefHat size={14} /> The Future of Dutch Culinary Business
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]">
            Professional Kitchens,<br/><span className="text-emerald-400 italic">On Your Terms.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-12">
            Access fully equipped, HACCP-certified commercial spaces across the Netherlands. Rent by the hour, day, or month.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/search">
              <Button size="lg" className="w-full sm:w-auto min-w-[240px] gap-2 h-16 text-xl bg-emerald-600 hover:bg-emerald-700 border-none">
                <Search size={24} />
                Browse Kitchens
              </Button>
            </Link>
            <Link to="/owners">
              <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[240px] gap-2 h-16 text-xl border-white/30 text-white hover:bg-white/10">
                <PlusCircle size={24} />
                List a Kitchen
              </Button>
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-stone-300 font-medium">
             <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
                <ShieldCheck size={18} className="text-emerald-500" /> NVWA Compliant
             </div>
             <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
                <ShieldCheck size={18} className="text-emerald-500" /> HACCP Certified
             </div>
             <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
                <Star size={18} className="text-amber-400" /> 4.9/5 Avg. Rating
             </div>
          </div>
        </div>
      </section>

      {/* Market Stats & Value Prop */}
      <section className="bg-white py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <TrendingUp size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">+50% Growth</h3>
              <p className="text-stone-600 leading-relaxed">Sustainable and plant-based food sectors are exploding. We provide the infrastructure to help you catch the wave.</p>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Zero Compliance Stress</h3>
              <p className="text-stone-600 leading-relaxed">Skip the licensing nightmare. All our listings are pre-vetted for Dutch hygiene and safety standards.</p>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Users size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Hyper-Flexible</h3>
              <p className="text-stone-600 leading-relaxed">From 4-hour prep shifts to 24/7 ghost kitchen units. Scale your workspace as your demand dictates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="text-primary-700 font-bold text-sm uppercase tracking-widest mb-2">Editor's Choice</div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Top-Rated Spaces</h2>
              <p className="text-stone-500 max-w-xl">These kitchens have consistently high reviews and premium equipment packages.</p>
            </div>
            <Link to="/search" className="mt-4 md:mt-0 flex items-center text-primary-700 font-bold hover:text-primary-800 transition-colors group">
              Explore All Listings <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredKitchens.map(kitchen => (
              <KitchenCard key={kitchen.id} kitchen={kitchen} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-[-20deg] translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Cook?</h2>
          <p className="text-stone-400 text-xl mb-12 leading-relaxed">
            Join the community of 200+ Dutch food entrepreneurs who scaled their businesses using CulinaryStart's kitchen network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/search">
              <Button size="lg" className="w-full sm:w-auto min-w-[240px] h-14 bg-emerald-600 hover:bg-emerald-700 border-none">
                Start Browsing
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[240px] h-14 text-white border-white/20 hover:bg-white/10">
                Join our Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
