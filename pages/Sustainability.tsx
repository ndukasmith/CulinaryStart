import React from 'react';
import { Leaf, Recycle, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
       <div className="bg-emerald-900 text-white py-20 text-center relative">
          <div className="absolute top-4 left-4 sm:left-8 z-10">
             <BackButton variant="dark" />
          </div>
          <div className="max-w-3xl mx-auto px-4 relative z-0">
             <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Commitment to a Greener Future</h1>
             <p className="text-xl text-emerald-100">
                We believe sharing resources is the first step towards a sustainable food system.
             </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
             <div>
                <Leaf className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Waste Reduction</h3>
                <p className="text-stone-600">Goal: Reduce kitchen waste by 30% by 2027 through shared composting programs.</p>
             </div>
             <div>
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Local Sourcing</h3>
                <p className="text-stone-600">Goal: Source 80% of partner ingredients from local Dutch farms to cut transport emissions.</p>
             </div>
             <div>
                <Recycle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">Circular Economy</h3>
                <p className="text-stone-600">Maximizing the utility of existing equipment prevents unnecessary manufacturing.</p>
             </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Rent a Sustainable Kitchen</h2>
                <p className="text-stone-600 max-w-xl">
                   Look for the "Eco-Friendly" badge on our listings. These kitchens use green energy, have strict recycling protocols, and use sustainable cleaning products.
                </p>
             </div>
             <Link to="/search">
                <Button size="lg" className="gap-2">Find Green Kitchens <ArrowRight size={20}/></Button>
             </Link>
          </div>
       </div>
    </div>
  );
};
