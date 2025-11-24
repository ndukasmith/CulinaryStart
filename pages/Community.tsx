import React from 'react';
import { MessageSquare, Calendar, Users, Heart } from 'lucide-react';
import { EVENTS } from '../constants';
import { Button } from '../components/Button';

export const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">CulinaryStart Community</h1>
          <p className="text-xl text-stone-600">Connect, collaborate, and grow with fellow Dutch food entrepreneurs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Forum Preview */}
           <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                 <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2"><MessageSquare className="text-primary-600"/> Latest Discussions</h2>
                    <Button size="sm" variant="outline">View Forum</Button>
                 </div>
                 <div className="space-y-4">
                    {[
                      { title: 'Best suppliers for organic flour in Utrecht?', author: 'BakeryTom', replies: 12 },
                      { title: 'Tips for passing the new NVWA allergen inspection', author: 'ChefAnna', replies: 8 },
                      { title: 'Looking for a shared delivery partner in Rotterdam', author: 'VeganExpress', replies: 5 }
                    ].map((topic, i) => (
                       <div key={i} className="flex justify-between items-center p-3 hover:bg-stone-50 rounded cursor-pointer border-b border-stone-100 last:border-0">
                          <div>
                             <h4 className="font-medium text-stone-900">{topic.title}</h4>
                             <p className="text-xs text-stone-500">Posted by {topic.author}</p>
                          </div>
                          <div className="text-xs font-bold text-stone-400 flex items-center gap-1">
                             <MessageSquare size={12} /> {topic.replies}
                          </div>
                       </div>
                    ))}
                 </div>
              </section>

              <section className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                 <h2 className="text-xl font-bold flex items-center gap-2 mb-6"><Calendar className="text-primary-600"/> Upcoming Events</h2>
                 <div className="grid gap-4">
                    {EVENTS.map(event => (
                       <div key={event.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-stone-200 rounded-lg hover:border-primary-300 transition-colors">
                          <div className="bg-primary-50 text-primary-800 p-3 rounded-lg text-center min-w-[80px] flex flex-col justify-center">
                             <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                             <span className="text-lg font-bold">{event.date.split(' ')[1]}</span>
                          </div>
                          <div className="flex-1">
                             <div className="flex justify-between items-start">
                                <h4 className="font-bold text-stone-900">{event.title}</h4>
                                <span className="text-xs font-bold bg-stone-100 px-2 py-1 rounded">{event.type}</span>
                             </div>
                             <p className="text-sm text-stone-500 mt-1">{event.location}</p>
                             <div className="mt-3 flex justify-between items-center">
                                <span className="font-bold text-primary-700">{event.price}</span>
                                <button className="text-sm font-medium text-stone-900 hover:underline">Register &rarr;</button>
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <div className="space-y-8">
              <div className="bg-primary-700 text-white p-6 rounded-xl shadow-md">
                 <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Heart size={20}/> Mentorship Program</h3>
                 <p className="text-primary-100 text-sm mb-4">Connect with experienced Dutch food business owners.</p>
                 <Button variant="secondary" fullWidth size="sm" className="bg-white text-primary-800 hover:bg-primary-50">Apply as Mentee</Button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                 <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Users size={20}/> Collective Purchasing</h3>
                 <p className="text-stone-600 text-sm mb-4">
                    Save 15% on bulk orders via Sligro when you order with other members.
                 </p>
                 <Button variant="outline" fullWidth size="sm">Join Group Order</Button>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};