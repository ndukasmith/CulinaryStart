import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Map, List, ChevronDown, ChevronUp, Save, RotateCcw, Filter, Star, Check } from 'lucide-react';
import { Button } from '../components/Button';
import { KitchenCard } from '../components/KitchenCard';
import { KITCHENS } from '../constants';

// Helper component for collapsible filter sections
const FilterSection: React.FC<{
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  activeCount?: number;
}> = ({ title, isOpen, onToggle, children, activeCount }) => (
  <div className="border-b border-stone-200 py-5">
    <button 
      onClick={onToggle} 
      className="flex justify-between items-center w-full text-left group focus:outline-none"
    >
      <div className="flex items-center gap-2">
        <span className="font-bold text-stone-900 group-hover:text-primary-700 text-sm uppercase tracking-wide">{title}</span>
        {activeCount && activeCount > 0 ? (
          <span className="bg-primary-100 text-primary-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {activeCount}
          </span>
        ) : null}
      </div>
      {isOpen ? <ChevronUp size={16} className="text-stone-400" /> : <ChevronDown size={16} className="text-stone-400" />}
    </button>
    
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="space-y-3">
        {children}
      </div>
    </div>
  </div>
);

export const Search: React.FC = () => {
  // --- UI State for Collapsible Sections ---
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    location: true,
    type: true,
    price: true,
    equipment: true,
    certifications: false,
    amenities: false,
    host: false,
    terms: false,
    ratings: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // --- Filter State ---
  const [locationFilters, setLocationFilters] = useState({
    country: 'Netherlands',
    region: '',
    city: '',
    neighborhood: '',
    proximity: 10,
    address: ''
  });

  const [kitchenTypes, setKitchenTypes] = useState<string[]>([]);
  
  const [priceFilters, setPriceFilters] = useState({
    maxPrice: 200,
    minDuration: '4hr',
    weeklyDiscount: false
  });

  const [equipmentFilters, setEquipmentFilters] = useState<Record<string, boolean>>({});
  const [certFilters, setCertFilters] = useState<Record<string, boolean>>({});
  const [amenityFilters, setAmenityFilters] = useState<Record<string, boolean>>({});
  const [hostTypeFilters, setHostTypeFilters] = useState<string[]>([]);
  const [bookingTerms, setBookingTerms] = useState({
    sameDay: false,
    cancellation: 'flexible', // flexible, strict, non-refundable
    addOns: [] as string[]
  });
  const [ratingFilters, setRatingFilters] = useState({
    minRating: 3,
    minReviews: 0,
    verifiedOnly: false
  });

  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // --- Filter Handlers ---
  const handleTypeChange = (type: string) => {
    setKitchenTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<any>>, key: string) => {
    setter((prev: any) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAllFilters = () => {
    setKitchenTypes([]);
    setLocationFilters(prev => ({ ...prev, region: '', city: '', neighborhood: '', proximity: 10 }));
    setPriceFilters({ maxPrice: 200, minDuration: '4hr', weeklyDiscount: false });
    setEquipmentFilters({});
    setCertFilters({});
    setAmenityFilters({});
    // Reset other states as needed
  };

  // --- Filtering Logic (Client Side) ---
  const filteredKitchens = KITCHENS.filter(k => {
    // 1. Kitchen Type Filter
    if (kitchenTypes.length > 0 && !kitchenTypes.includes(k.type) && !kitchenTypes.includes('All')) {
       // Allow partial matches for demo purposes if types strictly don't match mock data
       const typeMatch = kitchenTypes.some(t => k.type.toLowerCase().includes(t.toLowerCase()) || k.description.toLowerCase().includes(t.toLowerCase()));
       if (!typeMatch) return false;
    }

    // 2. Price Filter
    if (k.pricePerHour > priceFilters.maxPrice) return false;

    // 3. Location Filter (Simple String Match for City/Region)
    if (locationFilters.city && !k.location.toLowerCase().includes(locationFilters.city.toLowerCase())) return false;
    if (locationFilters.region && !k.location.toLowerCase().includes(locationFilters.region.toLowerCase())) return false;

    // 4. Certification Filter
    const activeCerts = Object.keys(certFilters).filter(key => certFilters[key]);
    if (activeCerts.length > 0) {
      const hasAllCerts = activeCerts.every(cert => 
        k.certifications.some(c => c.toLowerCase().includes(cert.toLowerCase()))
      );
      if (!hasAllCerts) return false;
    }

    // 5. Equipment/Amenities Filter (Soft match on amenities array)
    const activeEquip = Object.keys(equipmentFilters).filter(key => equipmentFilters[key]);
    if (activeEquip.length > 0) {
       // Check if listing has at least one of the selected specialized equipment
       const hasEquip = activeEquip.some(eq => 
          k.amenities.some(a => a.toLowerCase().includes(eq.toLowerCase())) || 
          k.description.toLowerCase().includes(eq.toLowerCase())
       );
       if (!hasEquip) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-stone-50 pt-6 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Advanced Filter Sidebar --- */}
          <div className="hidden lg:block w-[340px] flex-shrink-0">
             <div className="bg-white rounded-xl border border-stone-200 shadow-sm sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
                
                {/* Header */}
                <div className="p-5 border-b border-stone-200 flex justify-between items-center bg-stone-50/50 backdrop-blur-sm sticky top-0 z-10">
                   <div className="flex items-center gap-2 text-stone-900 font-bold">
                      <Filter size={18} /> Filters
                   </div>
                   <div className="flex gap-3 text-xs font-medium">
                      <button onClick={resetAllFilters} className="text-stone-500 hover:text-red-600 flex items-center gap-1 transition-colors">
                         <RotateCcw size={12} /> Reset
                      </button>
                      <button onClick={() => alert('Preset Saved!')} className="text-primary-700 hover:text-primary-800 flex items-center gap-1 transition-colors">
                         <Save size={12} /> Save
                      </button>
                   </div>
                </div>

                <div className="px-5 pb-8">
                  
                  {/* 1. Location */}
                  <FilterSection title="Location" isOpen={openSections.location} onToggle={() => toggleSection('location')}>
                     <div>
                        <label className="block text-xs font-bold text-stone-500 mb-1">Country</label>
                        <select 
                          value={locationFilters.country} 
                          disabled 
                          className="w-full text-sm border-stone-200 bg-stone-50 text-stone-500 rounded-md py-2 px-3 cursor-not-allowed"
                        >
                           <option>Netherlands</option>
                        </select>
                     </div>
                     <div className="grid grid-cols-2 gap-3">
                        <div>
                           <label className="block text-xs font-bold text-stone-500 mb-1">Region</label>
                           <select 
                              className="w-full text-sm border-stone-300 rounded-md py-2 px-3 focus:ring-primary-500 focus:border-primary-500"
                              value={locationFilters.region}
                              onChange={(e) => setLocationFilters({...locationFilters, region: e.target.value})}
                           >
                              <option value="">Any</option>
                              <option value="Noord-Holland">Noord-Holland</option>
                              <option value="Zuid-Holland">Zuid-Holland</option>
                              <option value="Utrecht">Utrecht</option>
                              <option value="Brabant">Noord-Brabant</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-stone-500 mb-1">City</label>
                           <select 
                              className="w-full text-sm border-stone-300 rounded-md py-2 px-3 focus:ring-primary-500 focus:border-primary-500"
                              value={locationFilters.city}
                              onChange={(e) => setLocationFilters({...locationFilters, city: e.target.value})}
                           >
                              <option value="">Any</option>
                              <option value="Amsterdam">Amsterdam</option>
                              <option value="Rotterdam">Rotterdam</option>
                              <option value="Utrecht">Utrecht</option>
                              <option value="Eindhoven">Eindhoven</option>
                           </select>
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-stone-500 mb-1">Neighborhood / Zip</label>
                        <input 
                           type="text" 
                           placeholder="e.g. De Pijp" 
                           className="w-full text-sm border-stone-300 rounded-md py-2 px-3 focus:ring-primary-500 focus:border-primary-500"
                           value={locationFilters.neighborhood}
                           onChange={(e) => setLocationFilters({...locationFilters, neighborhood: e.target.value})}
                        />
                     </div>
                     <div className="pt-2">
                        <div className="flex justify-between text-xs mb-2">
                           <span className="font-bold text-stone-600">Proximity</span>
                           <span className="text-primary-700 font-bold">{locationFilters.proximity} km</span>
                        </div>
                        <input 
                           type="range" 
                           min="0" max="50" 
                           value={locationFilters.proximity}
                           onChange={(e) => setLocationFilters({...locationFilters, proximity: Number(e.target.value)})}
                           className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                        />
                        <p className="text-[10px] text-stone-400 mt-1">From your current location or input address</p>
                     </div>
                  </FilterSection>

                  {/* 2. Kitchen Type */}
                  <FilterSection title="Kitchen Type" isOpen={openSections.type} onToggle={() => toggleSection('type')} activeCount={kitchenTypes.length}>
                     <div className="space-y-2">
                        {[
                           'Commercial', 'Ghost Kitchen', 'Studio', 'Catering', 'Bakery', 
                           'Pastry Lab', 'Butchery', 'Brewery', 'Meal Prep Hub', 'Kosher/Halal-Specific'
                        ].map(type => (
                           <label key={type} className="flex items-center group cursor-pointer">
                              <div className="relative flex items-center">
                                 <input 
                                    type="checkbox" 
                                    className="peer h-4 w-4 rounded border-stone-300 text-primary-600 focus:ring-primary-500 transition-all"
                                    checked={kitchenTypes.includes(type)}
                                    onChange={() => handleTypeChange(type)}
                                 />
                              </div>
                              <span className="ml-3 text-sm text-stone-600 group-hover:text-stone-900 transition-colors">{type}</span>
                           </label>
                        ))}
                     </div>
                  </FilterSection>

                  {/* 3. Pricing & Terms */}
                  <FilterSection title="Pricing & Duration" isOpen={openSections.price} onToggle={() => toggleSection('price')}>
                     <div className="mb-4">
                        <div className="flex justify-between text-xs mb-2">
                           <span className="font-bold text-stone-600">Hourly Rate</span>
                           <span className="text-primary-700 font-bold">€0 - €{priceFilters.maxPrice}</span>
                        </div>
                        <input 
                           type="range" 
                           min="0" max="500" step="10"
                           value={priceFilters.maxPrice}
                           onChange={(e) => setPriceFilters({...priceFilters, maxPrice: Number(e.target.value)})}
                           className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                        />
                     </div>
                     
                     <div className="mb-4">
                        <label className="block text-xs font-bold text-stone-500 mb-1">Min. Booking Duration</label>
                        <div className="flex bg-stone-100 p-1 rounded-md">
                           {['1hr', '2hr', '4hr', '8hr'].map(d => (
                              <button 
                                 key={d}
                                 onClick={() => setPriceFilters({...priceFilters, minDuration: d})}
                                 className={`flex-1 text-xs py-1.5 rounded-sm font-medium transition-all ${
                                    priceFilters.minDuration === d 
                                    ? 'bg-white text-primary-700 shadow-sm' 
                                    : 'text-stone-500 hover:text-stone-700'
                                 }`}
                              >
                                 {d}
                              </button>
                           ))}
                        </div>
                     </div>

                     <label className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm text-stone-600">Weekly/Monthly Discount</span>
                        <div className={`w-9 h-5 rounded-full relative transition-colors ${priceFilters.weeklyDiscount ? 'bg-primary-600' : 'bg-stone-300'}`} onClick={() => setPriceFilters({...priceFilters, weeklyDiscount: !priceFilters.weeklyDiscount})}>
                           <div className={`absolute top-1 left-1 bg-white w-3 h-3 rounded-full transition-transform ${priceFilters.weeklyDiscount ? 'translate-x-4' : ''}`}></div>
                        </div>
                     </label>
                  </FilterSection>

                  {/* 4. Equipment (Conditional) */}
                  <FilterSection 
                     title="Equipment" 
                     isOpen={openSections.equipment} 
                     onToggle={() => toggleSection('equipment')}
                     activeCount={Object.values(equipmentFilters).filter(Boolean).length}
                  >
                     {/* Show Bakery Equipment if 'Bakery' or 'Pastry Lab' is selected */}
                     {(kitchenTypes.includes('Bakery') || kitchenTypes.includes('Pastry Lab')) && (
                        <div className="mb-4 animate-fadeIn">
                           <h4 className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2 border-b border-primary-100 pb-1">Bakery Specific</h4>
                           <div className="space-y-2">
                              {['Industrial Mixer (20qt)', 'Industrial Mixer (40qt+)', 'Proofing Cabinet (12 tray)', 'Oven Deck (2+)', 'Dough Sheeter'].map(item => (
                                 <label key={item} className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" 
                                       checked={!!equipmentFilters[item]} 
                                       onChange={() => handleCheckboxChange(setEquipmentFilters, item)} 
                                    />
                                    <span className="ml-2 text-sm text-stone-600">{item}</span>
                                 </label>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* Show Commercial Equipment if 'Commercial', 'Ghost Kitchen', 'Catering' selected, or if nothing selected (default) */}
                     {(kitchenTypes.length === 0 || kitchenTypes.some(t => ['Commercial', 'Ghost Kitchen', 'Catering', 'Meal Prep Hub'].includes(t))) && (
                        <div className="mb-4 animate-fadeIn">
                           <h4 className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2 border-b border-primary-100 pb-1">Commercial Standard</h4>
                           <div className="space-y-2">
                              {['Convection Oven (Gas)', 'Convection Oven (Electric)', 'Walk-in Fridge (>50sqft)', 'Deep Fryer', 'Flat Top Griddle', 'Loading Dock'].map(item => (
                                 <label key={item} className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500"
                                       checked={!!equipmentFilters[item]} 
                                       onChange={() => handleCheckboxChange(setEquipmentFilters, item)}
                                    />
                                    <span className="ml-2 text-sm text-stone-600">{item}</span>
                                 </label>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* Show Catering Equipment if 'Catering' selected */}
                     {(kitchenTypes.includes('Catering')) && (
                        <div className="mb-2 animate-fadeIn">
                           <h4 className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2 border-b border-primary-100 pb-1">Catering Specific</h4>
                           <div className="space-y-2">
                              {['Chafing Dishes', 'Portable Warmers', 'Serving Trays'].map(item => (
                                 <label key={item} className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500"
                                       checked={!!equipmentFilters[item]} 
                                       onChange={() => handleCheckboxChange(setEquipmentFilters, item)}
                                    />
                                    <span className="ml-2 text-sm text-stone-600">{item}</span>
                                 </label>
                              ))}
                           </div>
                        </div>
                     )}
                  </FilterSection>

                  {/* 5. Certifications */}
                  <FilterSection title="Certifications" isOpen={openSections.certifications} onToggle={() => toggleSection('certifications')}>
                     <div className="space-y-2">
                        {['HACCP Certified', 'Organic Certified', 'Halal Certified', 'Kosher Certified', 'Gluten-Free Dedicated'].map(cert => (
                           <label key={cert} className="flex items-center cursor-pointer">
                              <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500"
                                 checked={!!certFilters[cert]} 
                                 onChange={() => handleCheckboxChange(setCertFilters, cert)}
                              />
                              <span className="ml-2 text-sm text-stone-600">{cert}</span>
                           </label>
                        ))}
                     </div>
                  </FilterSection>

                  {/* 6. Access & Amenities */}
                  <FilterSection title="Access & Amenities" isOpen={openSections.amenities} onToggle={() => toggleSection('amenities')}>
                     <div className="space-y-3">
                        <div className="flex items-center justify-between">
                           <span className="text-sm text-stone-600">24/7 Access</span>
                           <input type="checkbox" className="toggle-checkbox" />
                        </div>
                        <div className="flex items-center justify-between">
                           <span className="text-sm text-stone-600">Loading Dock</span>
                           <input type="checkbox" className="toggle-checkbox" />
                        </div>
                        <div className="border-t border-stone-100 pt-2 space-y-2">
                           {['Parking (On-site)', 'Wi-Fi (High Speed)', 'AV System', 'Teaching Island', 'Commercial Dishwasher'].map(am => (
                              <label key={am} className="flex items-center cursor-pointer">
                                 <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" 
                                    checked={!!amenityFilters[am]} 
                                    onChange={() => handleCheckboxChange(setAmenityFilters, am)}
                                 />
                                 <span className="ml-2 text-sm text-stone-600">{am}</span>
                              </label>
                           ))}
                        </div>
                     </div>
                  </FilterSection>

                  {/* 7. Ratings */}
                  <FilterSection title="Ratings & Reviews" isOpen={openSections.ratings} onToggle={() => toggleSection('ratings')}>
                     <div className="mb-4">
                        <div className="flex justify-between text-xs mb-2">
                           <span className="font-bold text-stone-600">Min Rating</span>
                           <div className="flex items-center text-amber-500 font-bold">
                              <Star size={12} fill="currentColor" className="mr-1"/> {ratingFilters.minRating}+
                           </div>
                        </div>
                        <input 
                           type="range" 
                           min="3" max="5" step="0.5"
                           value={ratingFilters.minRating}
                           onChange={(e) => setRatingFilters({...ratingFilters, minRating: Number(e.target.value)})}
                           className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                           <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" />
                           <span className="ml-2 text-sm text-stone-600">Verified renters only</span>
                        </label>
                        <div className="flex items-center gap-2">
                           <span className="text-xs text-stone-500">Min Reviews:</span>
                           <select className="text-xs border-stone-200 rounded py-1 px-2">
                              <option>10+</option>
                              <option>20+</option>
                              <option>50+</option>
                           </select>
                        </div>
                     </div>
                  </FilterSection>

                  {/* 8. Host Type */}
                  <FilterSection title="Host Type" isOpen={openSections.host} onToggle={() => toggleSection('host')}>
                     <div className="space-y-2">
                        {['Independent Chef', 'Restaurant Affiliate', 'Bakery Chain', 'Shared Kitchen Collective'].map(host => (
                           <label key={host} className="flex items-center cursor-pointer">
                              <input type="checkbox" className="rounded border-stone-300 text-primary-600 focus:ring-primary-500" />
                              <span className="ml-2 text-sm text-stone-600">{host}</span>
                           </label>
                        ))}
                     </div>
                  </FilterSection>

                </div>
             </div>
          </div>

          {/* --- Main Content --- */}
          <div className="flex-1 min-w-0">
            {/* Top Bar */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mb-6 sticky top-24 lg:static z-10 lg:z-auto">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="relative w-full md:w-96">
                     <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} />
                     <input 
                       type="text"
                       placeholder="Quick search by keyword (e.g. 'Oven', 'De Pijp')..."
                       className="w-full pl-10 pr-4 py-2.5 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                       value={locationFilters.address}
                       onChange={(e) => setLocationFilters({...locationFilters, address: e.target.value})}
                     />
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                    <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-lg text-sm font-bold text-stone-700">
                       <Filter size={16} /> Filters
                    </button>

                    <div className="flex bg-stone-100 rounded-lg p-1">
                       <button 
                         onClick={() => setViewMode('list')}
                         className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-primary-700' : 'text-stone-500 hover:text-stone-700'}`}
                       >
                         <List size={20} />
                       </button>
                       <button 
                         onClick={() => setViewMode('map')}
                         className={`p-2 rounded-md transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-primary-700' : 'text-stone-500 hover:text-stone-700'}`}
                       >
                         <Map size={20} />
                       </button>
                    </div>
                    
                    <select className="text-sm border-stone-300 rounded-lg shadow-sm text-stone-600 py-2.5 pl-3 pr-8 focus:ring-primary-500 focus:border-primary-500">
                      <option>Recommended</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating: High to Low</option>
                    </select>
                  </div>
               </div>
               
               {/* Active Filter Chips (Demo) */}
               {kitchenTypes.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-100">
                     {kitchenTypes.map(type => (
                        <span key={type} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold border border-primary-100">
                           {type} <button onClick={() => handleTypeChange(type)} className="hover:text-primary-900 ml-1">×</button>
                        </span>
                     ))}
                     <button onClick={resetAllFilters} className="text-xs text-stone-500 hover:text-stone-900 underline ml-2">Clear all</button>
                  </div>
               )}
            </div>

            {/* Results Count */}
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-xl font-bold text-stone-900">
                {filteredKitchens.length} Kitchens in Netherlands
              </h2>
              <span className="text-sm text-stone-500">Showing results</span>
            </div>

            {viewMode === 'list' ? (
              <>
                {filteredKitchens.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {filteredKitchens.map(kitchen => (
                      <KitchenCard key={kitchen.id} kitchen={kitchen} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-24 bg-white rounded-xl border border-stone-200 border-dashed">
                    <SearchIcon size={48} className="mx-auto text-stone-300 mb-4" />
                    <h3 className="text-xl font-bold text-stone-900 mb-2">No kitchens found</h3>
                    <p className="text-stone-500 mb-6 max-w-sm mx-auto">We couldn't find any kitchens matching your specific criteria. Try adjusting your filters.</p>
                    <Button onClick={resetAllFilters} variant="outline">Reset Filters</Button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-stone-200 rounded-xl h-[600px] flex items-center justify-center border border-stone-300 relative overflow-hidden group">
                 {/* Map Placeholder Graphic */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Map_of_Amsterdam.svg/2560px-Map_of_Amsterdam.svg.png')] bg-cover bg-center"></div>
                 <div className="text-center relative z-10 bg-white/90 p-8 rounded-xl shadow-lg backdrop-blur-sm">
                   <Map size={48} className="mx-auto text-primary-600 mb-4" />
                   <h3 className="text-xl font-bold text-stone-900 mb-2">Map View Visualization</h3>
                   <p className="text-stone-500 mb-4">Interactive Google Maps integration would render here with {filteredKitchens.length} pins.</p>
                   <Button onClick={() => setViewMode('list')} variant="outline" size="sm">Switch to List</Button>
                 </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};