import React from 'react';
import { ChefHat, Heart, Globe, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
       {/* Hero */}
       <div className="bg-stone-50 py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Mission</h1>
             <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
               Our mission is to be the bridge between kitchen owners and food entrepreneurs, making professional kitchen spaces accessible, affordable, and hyper-flexible for entrepreneurs of all sizes. We provide cost-effective alternatives to traditional rentals through flexible options like hourly, daily, and monthly bookings. Ultimately, we aim to serve as a catalyst for innovation, creativity, and success in the Dutch food industry, promoting sustainable and eco-friendly practices by collaborating with local farmers and suppliers.
             </p>
          </div>
       </div>

       {/* Story */}
       <section className="py-20 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Our Story</h2>
          <div className="prose prose-stone max-w-none text-lg text-stone-600">
             <p className="mb-6">
                CulinaryStart was born from a pivotal observation: while the Netherlands boasts incredible food talent, the financial and logistical barriers to entry, particularly the high cost of securing commercial kitchen space, were too prohibitive for aspiring entrepreneurs.
             </p>
             <p className="mb-6">
                We were driven by a passion for cooking and a belief in the strength of community, used extensive experience gained in the oil and gas industry—including engineering, project management, and data analysis—along with an MBA earned in the Netherlands, to develop a scalable solution. The journey was fueled by a desire to empower entrepreneurs and address the constraints hindering their growth.
             </p>
             <p className="mb-6">
                We pioneered an Airbnb-like platform to harness the potential of underutilized kitchen spaces by crowd-sourcing usable kitchens in public buildings, homes, and other non-traditional locations. This innovative model creates a powerful "win-win situation": kitchen owners monetize their idle assets (like a bakery closed in the afternoon or a restaurant during off-peak hours) while food entrepreneurs gain essential professional infrastructure at a fraction of the traditional cost.
             </p>
             <p>
                Today, CulinaryStart is dedicated to building an established, collaborative community. Beyond rental access, we provide resources, networking opportunities, and knowledge-sharing to help Dutch food businesses navigate regulatory needs, achieve NVWA compliance, meet sustainability goals, and successfully scale their market presence.
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