
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Quote, ChefHat, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';

// Mock Data for the stories
const STORIES: Record<string, any> = {
  'emma': {
    title: "Emma's Plant-Based Meals",
    subtitle: "From a home kitchen to 500+ monthly orders in Amsterdam.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1200&q=80",
    quote: "Started with 10 hours/week at CulinaryStart. Now serving 500+ customers/month via Thuisbezorgd.nl.",
    location: "Amsterdam",
    type: "Monthly Renter",
    content: (
      <>
        <p className="mb-4">
          Emma de Jong always had a passion for vegan cooking. Starting in her small apartment in De Pijp, she quickly realized that her residential oven couldn't keep up with the demand from her growing Instagram following.
        </p>
        <p className="mb-4">
          "I was turning away orders because I simply didn't have the space," Emma recalls. "Leasing a commercial space required a 2-year contract and a €10,000 deposit. I wasn't ready for that risk."
        </p>
        <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">The CulinaryStart Solution</h3>
        <p className="mb-4">
          Emma found a <strong>Commercial Prep Kitchen</strong> on CulinaryStart located just 10 minutes from her home. She started with the "Monthly Basic" plan, giving her 50 hours of kitchen access per month.
        </p>
        <p className="mb-4">
          The access to industrial convection ovens meant she could prep a week's worth of meals in a single afternoon. The NVWA-compliant facility also allowed her to immediately list on major delivery platforms like Thuisbezorgd.nl.
        </p>
        <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">Results</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Production Speed:</strong> Increased by 300%.</li>
          <li><strong>Revenue:</strong> Grew from €800 to €4,500 monthly in 6 months.</li>
          <li><strong>Next Steps:</strong> Emma is now upgrading to a dedicated ghost kitchen unit found via the platform.</li>
        </ul>
      </>
    )
  },
  'bakkerij': {
    title: "Bakkerij De Toekomst",
    subtitle: "Scaling up for the holiday rush without capital expenditure.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
    quote: "The industrial mixers available saved me from buying expensive equipment for my holiday rush.",
    location: "Rotterdam",
    type: "Seasonal Renter",
    content: (
      <>
        <p className="mb-4">
          Lucas van den Berg runs a popular artisanal bakery in Rotterdam. While his shop is perfect for daily bread, the holiday season (Sinterklaas and Christmas) always posed a logistical nightmare.
        </p>
        <p className="mb-4">
          "We need to produce thousands of kruidnoten and kerststollen in December. My mixer capacity was the bottleneck, but buying a second industrial mixer for just two months of use didn't make financial sense," Lucas explains.
        </p>
        <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">The Flexible Fix</h3>
        <p className="mb-4">
          Lucas used CulinaryStart to find a <strong>Spacious Bakery Studio</strong> that was idle during the evenings. He booked the space for 4 hours every night during November and December.
        </p>
        <p className="mb-4">
          This "satellite kitchen" approach allowed his team to double their dough production without cluttering their main storefront or investing in depreciating assets.
        </p>
        <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">Results</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Output:</strong> Produced 200kg of extra dough per week.</li>
          <li><strong>Savings:</strong> Saved approx. €8,000 on equipment purchase.</li>
          <li><strong>Efficiency:</strong> Zero downtime in the main bakery.</li>
        </ul>
      </>
    )
  }
};

export const SuccessStory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !STORIES[id]) {
    return <Navigate to="/entrepreneurs" replace />;
  }

  const story = STORIES[id];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Image */}
      <div className="h-[400px] w-full relative">
        <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-900/50"></div>
        <div className="absolute top-8 left-4 sm:left-8 z-10">
           <BackButton to="/entrepreneurs" label="Back to Stories" variant="dark" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 bg-gradient-to-t from-stone-900 to-transparent">
           <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-wider text-sm mb-3">
                 <ChefHat size={16} /> Success Story
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{story.title}</h1>
              <p className="text-stone-200 text-xl">{story.subtitle}</p>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
         <div className="bg-white rounded-xl shadow-xl border border-stone-200 p-8 md:p-12">
            
            {/* Meta Data */}
            <div className="flex gap-6 mb-8 border-b border-stone-100 pb-8">
               <div>
                  <span className="block text-xs font-bold text-stone-400 uppercase">Location</span>
                  <span className="font-bold text-stone-900">{story.location}</span>
               </div>
               <div>
                  <span className="block text-xs font-bold text-stone-400 uppercase">Member Type</span>
                  <span className="font-bold text-stone-900">{story.type}</span>
               </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
               <Quote className="text-primary-300 w-8 h-8 mb-2" />
               <p className="text-xl font-serif italic text-primary-900">"{story.quote}"</p>
            </blockquote>

            {/* Article Content */}
            <div className="prose prose-stone max-w-none text-lg text-stone-600">
               {story.content}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-stone-900 text-white p-8 rounded-xl text-center">
               <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
               <h3 className="text-2xl font-bold mb-2">Write your own success story</h3>
               <p className="text-stone-300 mb-6">Join {story.title} and hundreds of others growing with CulinaryStart.</p>
               <Link to="/search">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 border-none">Find Your Kitchen</Button>
               </Link>
            </div>

         </div>
      </div>
    </div>
  );
};
