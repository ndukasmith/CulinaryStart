import React from 'react';
import { TrendingUp, Megaphone, Compass, Briefcase, PenTool, Users, Quote } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 mt-6">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-700 mb-6 leading-tight">
            The Minds Behind CulinaryStart—Passionate About Empowering Food Entrepreneurs
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            We’re building a team of experts dedicated to tearing down barriers for underserved culinary founders.
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          
          {/* Card 1: Nduka Odim */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="h-80 overflow-hidden bg-stone-200 relative">
              <img 
                src="/mypictures/IMG_20251203_104009.jpg" 
                alt="Nduka Odim (Founder & CEO of CulinaryStart)"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-stone-900">Nduka Odim</h3>
                <p className="text-primary-600 font-bold text-lg">Founder & CEO</p>
              </div>
              <div className="prose prose-sm text-stone-600 mb-6 flex-grow">
                <p className="mb-3">
                  Nduka is a food industry enthusiast and advocate for refugee inclusion, driven by a vision to make culinary entrepreneurship accessible to all. With 5+ years supporting Dutch food startups and deep experience in community engagement, he identified the critical gap between underutilized kitchens and underserved founders.
                </p>
                <p>
                   Nduka’s background in business development and his personal commitment to cultural preservation through food fuel CulinaryStart’s mission to democratize access to professional kitchen spaces. When he’s not building partnerships, you’ll find him testing new recipes from refugee entrepreneurs.
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 mt-auto">
                <p className="text-stone-500 italic text-sm">
                  "I’ve sampled over 100 cultural dishes from our early users—my favorite is Somali sambusa!"
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: CFO */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 flex flex-col h-full">
            <div className="h-64 bg-stone-50 flex items-center justify-center border-b border-stone-100">
               <div className="bg-white p-6 rounded-full shadow-sm border border-stone-100">
                 <TrendingUp size={48} className="text-primary-600" />
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-stone-400">To Be Announced</h3>
                <p className="text-primary-600 font-bold text-lg">Chief Financial Officer (CFO)</p>
              </div>
              <p className="text-stone-600 text-sm mb-6 flex-grow">
                Our upcoming CFO will bring deep expertise in startup finance, scalable business models, and cash flow optimization—with a focus on social impact. They’ll oversee budgeting, revenue projections, and investor relations, ensuring CulinaryStart remains affordable for entrepreneurs while building long-term profitability. We’re actively recruiting a specialist with a track record in food tech or impact-driven startups to join our mission.
              </p>
              <div className="mt-auto pt-4 border-t border-stone-100">
                 <span className="inline-flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wide">
                    <Briefcase size={14} /> Future Role
                 </span>
              </div>
            </div>
          </div>

          {/* Card 3: CMO */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 flex flex-col h-full">
            <div className="h-64 bg-stone-50 flex items-center justify-center border-b border-stone-100">
               <div className="bg-white p-6 rounded-full shadow-sm border border-stone-100">
                 <Megaphone size={48} className="text-primary-600" />
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-stone-400">To Be Announced</h3>
                <p className="text-primary-600 font-bold text-lg">Chief Marketing Officer (CMO)</p>
              </div>
              <p className="text-stone-600 text-sm mb-6 flex-grow">
                Our future CMO will lead community-driven marketing strategies tailored to underserved food entrepreneurs—refugees, budget-conscious founders, and culinary students. They’ll bring expertise in Dutch digital marketing, influencer partnerships, and SEO, with a passion for amplifying diverse voices in the food industry. We’re seeking a creative leader to grow our user base and share CulinaryStart’s impact story.
              </p>
              <div className="mt-auto pt-4 border-t border-stone-100">
                 <span className="inline-flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wide">
                    <Briefcase size={14} /> Future Role
                 </span>
              </div>
            </div>
          </div>

          {/* Card 4: Mentor */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 flex flex-col h-full">
            <div className="h-64 bg-stone-50 flex items-center justify-center border-b border-stone-100">
               <div className="bg-white p-6 rounded-full shadow-sm border border-stone-100">
                 <Compass size={48} className="text-primary-600" />
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-stone-400">To Be Announced</h3>
                <p className="text-primary-600 font-bold text-lg">Strategic Mentor</p>
              </div>
              <p className="text-stone-600 text-sm mb-6 flex-grow">
                Our strategic mentor will bring decades of expertise in Dutch hospitality, shared kitchen operations, and food safety compliance (HACCP, NVWA). They’ll guide our team on scaling kitchen partnerships, navigating industry regulations, and nurturing entrepreneur success—with a focus on supporting marginalized founders. We’re recruiting a seasoned industry veteran to help shape CulinaryStart’s growth and impact.
              </p>
              <div className="mt-auto pt-4 border-t border-stone-100">
                 <span className="inline-flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wide">
                    <Briefcase size={14} /> Future Role
                 </span>
              </div>
            </div>
          </div>

        </div>

        {/* Extended Team Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-stone-200 mb-20 shadow-sm">
           <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-700 mb-8 text-center">Our Extended Network of Experts</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                 <div className="bg-primary-50 p-3 rounded-lg text-primary-700">
                    <Briefcase size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-stone-900 text-lg">Operations Manager</h4>
                    <p className="text-stone-400 text-sm italic mb-1 font-medium">To Be Announced</p>
                    <p className="text-stone-600 text-sm">Oversees kitchen compliance and user support.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary-50 p-3 rounded-lg text-primary-700">
                    <PenTool size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-stone-900 text-lg">UX/UI Designer</h4>
                    <p className="text-stone-400 text-sm italic mb-1 font-medium">To Be Announced</p>
                    <p className="text-stone-600 text-sm">Refines the platform for multilingual, user-friendly access.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-primary-50 p-3 rounded-lg text-primary-700">
                    <Users size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-stone-900 text-lg">Community Manager</h4>
                    <p className="text-stone-400 text-sm italic mb-1 font-medium">To Be Announced</p>
                    <p className="text-stone-600 text-sm">Runs workshops, connects users, and shares success stories.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Closing Mission Section */}
        <div className="max-w-4xl mx-auto text-center px-4">
           <Quote size={48} className="text-primary-300 mx-auto mb-6 opacity-50" />
           <blockquote className="text-xl md:text-2xl font-serif italic text-stone-700 leading-relaxed mb-8">
             "We’re more than a team—we’re a community of food lovers, advocates, and problem-solvers. Our goal is to tear down barriers for anyone with a culinary dream, whether they’re a refugee rebuilding their life or a student launching their first business. Together, we’re building a food ecosystem that’s inclusive, sustainable, and profitable for all."
           </blockquote>
        </div>

      </div>
    </div>
  );
};