import React from 'react';
import { ChefHat, Heart, Globe, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
       {/* Hero */}
       <div className="bg-stone-50 py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Mission</h1>
             <p className="text-xl text-stone-600">
               To empower the Dutch food industry by making professional kitchen spaces accessible, affordable, and sustainable for entrepreneurs of all sizes.
             </p>
          </div>
       </div>

       {/* Story */}
       <section className="py-20 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Our Story</h2>
          <div className="prose prose-stone max-w-none text-lg text-stone-600">
             <p className="mb-6">
                CulinaryStart was born from a simple observation: The Netherlands is full of incredible food talent, but the barrier to entry—specifically the cost of commercial kitchen space—is too high.
             </p>
             <p className="mb-6">
                Founded in 2023, we set out to bridge the gap between underutilized commercial kitchens and the growing wave of food entrepreneurs. Whether it's a bakery idle in the afternoons or a restaurant closed for lunch service, we saw opportunity where others saw empty space.
             </p>
             <p>
                Today, we are building a community that not only shares space but shares knowledge, helping Dutch food businesses navigate NVWA compliance, sustainability goals, and market expansion.
             </p>
          </div>
       </section>

       {/* Values */}
       <section className="bg-stone-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-serif font-bold text-center mb-16">Why We Do It</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                   <div className="bg-stone-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="text-emerald-400 w-10 h-10" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Innovation</h3>
                   <p className="text-stone-400">Enabling the next generation of plant-based and delivery-first startups.</p>
                </div>
                <div>
                   <div className="bg-stone-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="text-emerald-400 w-10 h-10" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                   <p className="text-stone-400">Reducing waste by maximizing the utility of existing infrastructure.</p>
                </div>
                <div>
                   <div className="bg-stone-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="text-emerald-400 w-10 h-10" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Community</h3>
                   <p className="text-stone-400">Connecting owners and makers to strengthen the local food economy.</p>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};