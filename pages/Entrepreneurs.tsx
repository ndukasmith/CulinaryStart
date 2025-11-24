import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Entrepreneurs: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Grow Your Food Business Without the Kitchen Hassle
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Focus on your food, not the overhead. Rent professional, compliant kitchen space in the Netherlands by the hour or month.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/search">
                 <Button size="lg" className="gap-2">Find a Kitchen <ArrowRight size={20} /></Button>
               </Link>
               <Link to="/pricing">
                 <Button variant="outline" size="lg">See Pricing</Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points / Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-stone-200 rounded-xl hover:shadow-lg transition-shadow">
               <TrendingUp className="text-primary-600 w-12 h-12 mb-4" />
               <h3 className="text-xl font-bold mb-3">Cost Savings</h3>
               <p className="text-stone-600">No upfront investment in infrastructure. Pay only for what you use and save €5000+/year vs leasing.</p>
            </div>
            <div className="p-6 border border-stone-200 rounded-xl hover:shadow-lg transition-shadow">
               <Users className="text-primary-600 w-12 h-12 mb-4" />
               <h3 className="text-xl font-bold mb-3">Flexibility</h3>
               <p className="text-stone-600">Scale up for holiday catering or down for test batches. No long-term commitments required.</p>
            </div>
            <div className="p-6 border border-stone-200 rounded-xl hover:shadow-lg transition-shadow">
               <ShieldCheck className="text-primary-600 w-12 h-12 mb-4" />
               <h3 className="text-xl font-bold mb-3">Compliance Support</h3>
               <p className="text-stone-600">Avoid NVWA fines. Our kitchens are pre-certified and we offer free HACCP guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-stone-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Dutch Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-stone-200">
                     <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Chef" />
                  </div>
                  <div className="p-6 md:w-2/3">
                     <h4 className="font-bold text-lg mb-1">Emma's Plant-Based Meals</h4>
                     <p className="text-stone-500 text-sm mb-4">Amsterdam • Monthly Renter</p>
                     <p className="text-stone-600 italic mb-4">"Started with 10 hours/week at CulinaryStart. Now serving 500+ customers/month via Thuisbezorgd.nl."</p>
                     <a href="#" className="text-primary-700 font-bold text-sm">Read full story</a>
                  </div>
               </div>
               <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-stone-200">
                     <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Baker" />
                  </div>
                  <div className="p-6 md:w-2/3">
                     <h4 className="font-bold text-lg mb-1">Bakkerij De Toekomst</h4>
                     <p className="text-stone-500 text-sm mb-4">Rotterdam • Seasonal Renter</p>
                     <p className="text-stone-600 italic mb-4">"The industrial mixers available saved me from buying expensive equipment for my holiday rush."</p>
                     <a href="#" className="text-primary-700 font-bold text-sm">Read full story</a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-serif font-bold mb-6">Resources for Starters</h2>
           <p className="text-stone-600 mb-8">Download our free guides to get started on the right foot.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">HACCP Checklist (NL)</Button>
              <Button variant="outline">KVK Registration Guide</Button>
              <Button variant="outline">Business Plan Template</Button>
           </div>
        </div>
      </section>

      <section className="bg-stone-900 text-white py-12 text-center">
         <h2 className="text-2xl font-bold mb-4">Ready to cook?</h2>
         <Link to="/search">
            <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-200">Browse Kitchens</Button>
         </Link>
      </section>
    </div>
  );
};