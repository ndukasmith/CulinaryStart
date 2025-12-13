import React from 'react';
import { Calendar, Clock, MapPin, Award, CheckCircle, ChefHat, Download, Users, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';
import { Link } from 'react-router-dom';

export const CulinaryWorkshops: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/services" label="Back to Services" />
        
        {/* 1. Page Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 mt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wide mb-4">
             <ChefHat size={14} /> Professional Development
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Culinary Workshops for Food Entrepreneurs
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-medium mb-4">
            Sustainable Cooking, Plant-Based Recipes & Delivery Optimization
          </p>
          <p className="text-stone-500 max-w-3xl mx-auto">
            Hosted in our fully equipped commercial kitchens — led by award-winning guest chefs. <br className="hidden md:block" />
            <span className="text-primary-700 font-bold">Certification included with every workshop.</span>
          </p>
        </div>

        {/* 2. Workshop Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Workshop 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:border-primary-500 transition-all hover:shadow-md flex flex-col h-full">
             <div className="h-48 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80" alt="Sustainable Cooking" className="w-full h-full object-cover" />
               <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                 Most Popular
               </div>
             </div>
             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold text-stone-900 mb-2">Sustainable Cooking</h3>
               <p className="text-sm text-stone-500 mb-4 flex-grow">
                 Master zero-waste techniques and local sourcing to boost margins and eco-credentials.
               </p>
               
               <div className="space-y-3 mb-6">
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Reduce food waste by 30% (root-to-stem)</span>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Source from Dutch partner farms</span>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>EU sustainability label compliance</span>
                 </div>
               </div>

               <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-600 space-y-2 mb-6 border border-stone-100">
                  <div className="flex items-center gap-2"><Clock size={14} className="text-primary-600"/> <strong>Duration:</strong> 3hrs (+30min Q&A)</div>
                  <div className="flex items-center gap-2"><Award size={14} className="text-primary-600"/> <strong>Cert:</strong> Sustainable Practices</div>
                  <div className="flex items-center gap-2 text-primary-800 font-medium">
                     <Calendar size={14}/> Next: 22 Nov 2025 (10am)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 ml-6">
                     <MapPin size={12}/> CulinaryStart Ghost Kitchen, AMS
                  </div>
               </div>

               <Button fullWidth className="mt-auto">Book Slot (€79)</Button>
             </div>
          </div>

          {/* Workshop 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:border-primary-500 transition-all hover:shadow-md flex flex-col h-full">
             <div className="h-48 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Plant-Based" className="w-full h-full object-cover" />
             </div>
             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold text-stone-900 mb-2">Plant-Based Development</h3>
               <p className="text-sm text-stone-500 mb-4 flex-grow">
                 Create restaurant-worthy vegan dishes that sell, scale, and travel well.
               </p>
               
               <div className="space-y-3 mb-6">
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Dairy-free cheese & vegan proteins</span>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Scale recipes for delivery textures</span>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Pricing dishes for profitability</span>
                 </div>
               </div>

               <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-600 space-y-2 mb-6 border border-stone-100">
                  <div className="flex items-center gap-2"><Clock size={14} className="text-primary-600"/> <strong>Duration:</strong> 4hrs (Testing + Tasting)</div>
                  <div className="flex items-center gap-2"><Award size={14} className="text-primary-600"/> <strong>Cert:</strong> Plant-Based Design</div>
                  <div className="flex items-center gap-2 text-primary-800 font-medium">
                     <Calendar size={14}/> Next: 29 Nov 2025 (2pm)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 ml-6">
                     <MapPin size={12}/> Bakery Lab, The Hague
                  </div>
               </div>

               <Button fullWidth className="mt-auto">Book Slot (€79)</Button>
             </div>
          </div>

          {/* Workshop 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:border-primary-500 transition-all hover:shadow-md flex flex-col h-full">
             <div className="h-48 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=80" alt="Delivery Optimization" className="w-full h-full object-cover" />
             </div>
             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold text-stone-900 mb-2">Delivery Optimization</h3>
               <p className="text-sm text-stone-500 mb-4 flex-grow">
                 Streamline your ghost kitchen workflow and master platform algorithms.
               </p>
               
               <div className="space-y-3 mb-6">
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Packaging for 20+ min travel times</span>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Workflow hacks to reduce errors</span>
                 </div>
                 <div className="flex items-start gap-2 text-sm text-stone-700">
                   <CheckCircle size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                   <span>Thuisbezorgd/UberEats integration tips</span>
                 </div>
               </div>

               <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-600 space-y-2 mb-6 border border-stone-100">
                  <div className="flex items-center gap-2"><Clock size={14} className="text-primary-600"/> <strong>Duration:</strong> 2hrs (Interactive Demo)</div>
                  <div className="flex items-center gap-2"><Award size={14} className="text-primary-600"/> <strong>Cert:</strong> Delivery Operations</div>
                  <div className="flex items-center gap-2 text-primary-800 font-medium">
                     <Calendar size={14}/> Next: 6 Dec 2025 (6pm)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 ml-6">
                     <MapPin size={12}/> Virtual + In-Person Options
                  </div>
               </div>

               <Button fullWidth className="mt-auto">Book Slot (€79)</Button>
             </div>
          </div>
        </div>

        {/* 3. Guest Chef Spotlight */}
        <section className="bg-stone-900 rounded-2xl p-8 md:p-12 text-white mb-20">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-serif font-bold mb-6">Learn from Industry Leaders</h2>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=150&q=80" alt="Chef Lotte" className="w-16 h-16 rounded-full object-cover border-2 border-primary-500" />
                       <div>
                          <h4 className="font-bold text-lg">Chef Lotte</h4>
                          <p className="text-stone-400 text-sm">Winner, Netherlands Sustainable Chef 2024</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80" alt="Chef Raj" className="w-16 h-16 rounded-full object-cover border-2 border-primary-500" />
                       <div>
                          <h4 className="font-bold text-lg">Chef Raj</h4>
                          <p className="text-stone-400 text-sm">Owner, "Roots & Shoots" Plant-Based Restaurant</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="md:w-1/2 bg-stone-800 p-8 rounded-xl relative">
                 <div className="absolute top-6 left-6 text-primary-600 opacity-20">
                    <ChefHat size={64} />
                 </div>
                 <p className="text-lg italic text-stone-200 mb-4 relative z-10">
                    "These workshops turned my 10% food waste rate into 2% — game-changing for my ghost kitchen profitability."
                 </p>
                 <div className="flex items-center gap-2">
                    <span className="font-bold text-primary-400">Mark T.</span>
                    <span className="text-stone-500 text-sm">• FryCo Owner, CulinaryStart Renter</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Key Details & 5. CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           <div className="md:col-span-2 bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Everything Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <ul className="space-y-3 text-stone-600">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0"/> All ingredients provided</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0"/> Printed & digital recipe booklets</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0"/> Official Certification of Completion</li>
                 </ul>
                 <ul className="space-y-3 text-stone-600">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0"/> 1-month access to Chef Q&A Group</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0"/> Free cancellation (up to 7 days before)</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-emerald-500 flex-shrink-0"/> Ticket transferable to another attendee</li>
                 </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                 <div>
                    <span className="block text-sm text-stone-500">Bundle & Save</span>
                    <span className="text-2xl font-bold text-stone-900">€199 <span className="text-base font-normal text-stone-400">for all 3</span></span>
                 </div>
                 <div className="flex gap-3">
                    <Button variant="outline" className="gap-2"><Download size={16}/> Download Schedule</Button>
                    <Button className="gap-2" onClick={() => alert('Booking flow would open here')}>Book a Workshop Now <ArrowRight size={16}/></Button>
                 </div>
              </div>
              <p className="text-xs text-stone-400 mt-4 text-center sm:text-right">
                 *10% discount automatically applied for active CulinaryStart renters.
              </p>
           </div>

           {/* Newsletter Widget */}
           <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 flex flex-col justify-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                 <Calendar size={24} />
              </div>
              <h3 className="font-bold text-lg text-primary-900 mb-2">Never Miss a Class</h3>
              <p className="text-sm text-primary-800 mb-6">
                 New workshops are announced monthly. Get the schedule delivered to your inbox.
              </p>
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                 <input type="email" placeholder="Enter your email" className="w-full border-primary-200 rounded-md px-3 py-2 text-sm focus:ring-primary-500" required />
                 <Button fullWidth size="sm">Sign Up for Reminders</Button>
              </form>
           </div>
        </div>

        {/* 6. FAQ Section */}
        <div className="max-w-3xl mx-auto">
           <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                 <h3 className="font-bold text-stone-900 mb-2 flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    Do I need professional cooking experience?
                 </h3>
                 <p className="text-stone-600 pl-8">
                    No! Our workshops are designed for all levels, from home cooks looking to scale up to seasoned chefs wanting to learn new sustainable techniques.
                 </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                 <h3 className="font-bold text-stone-900 mb-2 flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    Can I bring a colleague from my kitchen?
                 </h3>
                 <p className="text-stone-600 pl-8">
                    Absolutely. We encourage teams to join. You can book multiple slots during checkout, and groups of 3+ get an additional 5% discount.
                 </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                 <h3 className="font-bold text-stone-900 mb-2 flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    Are the ingredients provided halal/kosher friendly?
                 </h3>
                 <p className="text-stone-600 pl-8">
                    We strive to be inclusive. The Plant-Based workshop is naturally vegan. For other workshops, please indicate dietary requirements at booking, and we will do our best to accommodate or advise.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};