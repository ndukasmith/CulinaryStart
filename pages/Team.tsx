
import React from 'react';
import { TrendingUp, Megaphone, Compass, Briefcase, PenTool, Users, Quote, Linkedin, Mail } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <BackButton />
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 mt-6">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-6 leading-tight">
            Meet the Visionaries behind CulinaryStart
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            We are building the future of the Dutch food industry, one shared kitchen at a time.
          </p>
        </div>

        {/* Featured Founder Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-200 mb-20 relative">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 relative bg-stone-100">
               {/* Fixed the 'space above name' issue by making the image section more integrated and balanced */}
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden">
                 <img 
                  src="/mypictures/IMG_20251203_104009.jpg" 
                  alt="Nduka Odim"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"; // Professional fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent lg:hidden"></div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wide mb-6 w-fit">
                Founder Spotlight
              </div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">Nduka Odim</h2>
              <p className="text-primary-700 font-bold text-xl mb-6">Founder & CEO</p>
              
              <div className="prose prose-lg text-stone-600 mb-8 max-w-none">
                <p>
                  Nduka is a food industry enthusiast and advocate for refugee inclusion, driven by a vision to make culinary entrepreneurship accessible to all. With over 5 years supporting Dutch food startups and deep experience in community engagement, he identified the critical gap between underutilized kitchens and underserved founders.
                </p>
                <p>
                  His background in business development and his personal commitment to cultural preservation through food fuel CulinaryStart’s mission to democratize access to professional kitchen spaces. When he’s not building partnerships, you’ll find him testing new recipes from refugee entrepreneurs and mentoring the next generation of Dutch food makers.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-stone-100">
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-stone-100 rounded-full text-stone-600 hover:bg-primary-100 hover:text-primary-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:nduka@culinarystart.nl" className="p-2 bg-stone-100 rounded-full text-stone-600 hover:bg-primary-100 hover:text-primary-700 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500 italic">
                  <Quote size={16} className="text-primary-300" />
                  "My favorite cultural discovery so far? Definitely Somali sambusa!"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Roles / Open Positions */}
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-10 text-center">Expanding the Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card: CFO */}
          <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col h-full hover:border-primary-300 transition-colors group">
            <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} className="text-primary-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-400 mb-1">To Be Announced</h3>
            <p className="text-primary-700 font-bold mb-4 uppercase text-xs tracking-widest">Chief Financial Officer</p>
            <p className="text-stone-600 text-sm mb-6 flex-grow">
              Recruiting a specialist to oversee startup finance, scalable business models, and cash flow optimization with a social impact focus.
            </p>
            <button className="text-xs font-bold text-stone-400 flex items-center gap-2 uppercase tracking-widest">
              <Briefcase size={14} /> Recruitment Active
            </button>
          </div>

          {/* Card: CMO */}
          <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col h-full hover:border-primary-300 transition-colors group">
            <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Megaphone size={28} className="text-primary-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-400 mb-1">To Be Announced</h3>
            <p className="text-primary-700 font-bold mb-4 uppercase text-xs tracking-widest">Chief Marketing Officer</p>
            <p className="text-stone-600 text-sm mb-6 flex-grow">
              Seeking a creative leader to drive community-centric marketing and amplify diverse voices in the Dutch food ecosystem.
            </p>
            <button className="text-xs font-bold text-stone-400 flex items-center gap-2 uppercase tracking-widest">
              <Briefcase size={14} /> Recruitment Active
            </button>
          </div>

          {/* Card: Mentor */}
          <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col h-full hover:border-primary-300 transition-colors group">
            <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass size={28} className="text-primary-700" />
            </div>
            <h3 className="text-xl font-bold text-stone-400 mb-1">To Be Announced</h3>
            <p className="text-primary-700 font-bold mb-4 uppercase text-xs tracking-widest">Strategic Advisor</p>
            <p className="text-stone-600 text-sm mb-6 flex-grow">
              Looking for industry veterans with deep expertise in hospitality and NVWA/HACCP regulations to guide our scaling.
            </p>
            <button className="text-xs font-bold text-stone-400 flex items-center gap-2 uppercase tracking-widest">
              <Briefcase size={14} /> Recruitment Active
            </button>
          </div>

        </div>

        {/* Expert Network */}
        <div className="bg-primary-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Extended Expert Network</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm h-fit">
                    <Briefcase size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Operations</h4>
                    <p className="text-stone-300 text-sm">Managing safety audits and multi-kitchen logistics across NL.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm h-fit">
                    <PenTool size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">UX & Design</h4>
                    <p className="text-stone-300 text-sm">Ensuring our platform is accessible and intuitive for all cultures.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm h-fit">
                    <Users size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Community</h4>
                    <p className="text-stone-300 text-sm">Connecting founders with mentors and local suppliers.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>

        {/* Impact Quote */}
        <div className="mt-20 text-center max-w-4xl mx-auto px-4">
           <Quote size={48} className="text-primary-300 mx-auto mb-8 opacity-40" />
           <blockquote className="text-2xl md:text-3xl font-serif italic text-stone-700 leading-relaxed mb-6">
             "We aren't just renting kitchens; we're launching dreams. Our team exists to tear down the walls that keep talent out of the professional food world."
           </blockquote>
           <div className="w-16 h-1 bg-primary-600 mx-auto"></div>
        </div>

      </div>
    </div>
  );
};
