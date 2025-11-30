import React, { useState } from 'react';
import { Search as SearchIcon, SlidersHorizontal, MapPin, Map, List } from 'lucide-react';
import { Button } from '../components/Button';
import { KitchenCard } from '../components/KitchenCard';
import { KITCHENS } from '../constants';

export const Search: React.FC = () => {
  const [location, setLocation] = useState('');
  const [kitchenType, setKitchenType] = useState('All');
  const [priceRange, setPriceRange] = useState<number>(200);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // Simple client-side filtering
  const filteredKitchens = KITCHENS.filter(k => {
    const matchesLocation = location === '' || k.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = kitchenType === 'All' || k.type === kitchenType;
    const matchesPrice = k.pricePerHour <= priceRange;
    return matchesLocation && matchesType && matchesPrice;
  });

  const handleReset = () => {
    setLocation('');
    setKitchenType('All');
    setPriceRange(200);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-6 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0 space-y-6">
             <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-stone-900">Filters</h3>
                  <button onClick={handleReset} className="text-xs text-primary-700 hover:underline cursor-pointer">Reset</button>
                </div>
                
                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-stone-700 mb-2">Location</label>
                  <select 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-sm border-stone-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">All Netherlands</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Rotterdam">Rotterdam</option>
                    <option value="Utrecht">Utrecht</option>
                    <option value="The Hague">The Hague</option>
                    <option value="Eindhoven">Eindhoven</option>
                  </select>
                </div>

                {/* Kitchen Type */}
                <div className="mb-6">
                   <label className="block text-sm font-medium text-stone-700 mb-2">Kitchen Type</label>
                   <div className="space-y-2">
                     {['Commercial', 'Ghost Kitchen', 'Studio', 'Catering', 'Bakery'].map(type => (
                       <label key={type} className="flex items-center">
                         <input 
                            type="checkbox" 
                            checked={kitchenType === type}
                            onChange={() => setKitchenType(kitchenType === type ? 'All' : type)}
                            className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" 
                          />
                         <span className="ml-2 text-sm text-stone-600">{type}</span>
                       </label>
                     ))}
                   </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Max Price: €{priceRange}/hr
                  </label>
                  <input 
                    type="range" 
                    min="30" 
                    max="200" 
                    step="5"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-stone-500 mt-1">
                    <span>€30</span>
                    <span>€200+</span>
                  </div>
                </div>

                {/* Equipment */}
                <div className="mb-6">
                   <label className="block text-sm font-medium text-stone-700 mb-2">Equipment</label>
                   <div className="space-y-2">
                     {['Convection Oven', 'Walk-in Fridge', 'Industrial Mixer', 'Fryer'].map(item => (
                       <label key={item} className="flex items-center">
                         <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" />
                         <span className="ml-2 text-sm text-stone-600">{item}</span>
                       </label>
                     ))}
                   </div>
                </div>

                {/* Certifications */}
                <div>
                   <label className="block text-sm font-medium text-stone-700 mb-2">Certifications</label>
                   <div className="space-y-2">
                     {['HACCP Certified', 'Organic Certified', 'Halal'].map(item => (
                       <label key={item} className="flex items-center">
                         <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" />
                         <span className="ml-2 text-sm text-stone-600">{item}</span>
                       </label>
                     ))}
                   </div>
                </div>

             </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
               <div className="relative w-full sm:w-96">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
                <input 
                  type="text"
                  placeholder="Quick search by city or keyword..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-stone-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
               </div>
               
               <div className="flex items-center gap-3 w-full sm:w-auto">
                 <div className="flex bg-stone-100 rounded p-1">
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-primary-700' : 'text-stone-500'}`}
                    >
                      <List size={20} />
                    </button>
                    <button 
                      onClick={() => setViewMode('map')}
                      className={`p-1.5 rounded ${viewMode === 'map' ? 'bg-white shadow-sm text-primary-700' : 'text-stone-500'}`}
                    >
                      <Map size={20} />
                    </button>
                 </div>
                 <select className="text-sm border-stone-300 rounded-md shadow-sm text-stone-600">
                   <option>Sort: Recommended</option>
                   <option>Price: Low to High</option>
                   <option>Price: High to Low</option>
                   <option>Rating</option>
                 </select>
               </div>
            </div>

            {/* Results */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-stone-900">
                {filteredKitchens.length} Kitchens Available
              </h2>
            </div>

            {viewMode === 'list' ? (
              <>
                {filteredKitchens.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredKitchens.map(kitchen => (
                      <KitchenCard key={kitchen.id} kitchen={kitchen} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white rounded-lg border border-stone-200">
                    <SearchIcon size={48} className="mx-auto text-stone-300 mb-4" />
                    <h3 className="text-lg font-medium text-stone-900">No kitchens found</h3>
                    <p className="text-stone-500 mb-4">Try adjusting your search filters.</p>
                    <Button onClick={handleReset} variant="outline" size="sm">Clear All Filters</Button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-stone-200 rounded-lg h-[600px] flex items-center justify-center border border-stone-300">
                 <div className="text-center">
                   <Map size={48} className="mx-auto text-stone-400 mb-2" />
                   <p className="text-stone-500 font-medium">Map View Visualization</p>
                   <p className="text-sm text-stone-400">Interactive Google Maps integration would go here.</p>
                 </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};