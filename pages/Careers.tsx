import React from 'react';
import { Button } from '../components/Button';
import { Briefcase, Heart, Coffee } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton />
          <div className="text-center mb-16">
             <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Join the CulinaryStart Team</h1>
             <p className="text-xl text-stone-600">
                We're growing fast in the Netherlands. Help us shape the future of food entrepreneurship.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             <div className="text-center p-6 bg-stone-50 rounded-lg">
                <Heart className="mx-auto text-primary-600 mb-3" size={32} />
                <h3 className="font-bold mb-2">Values</h3>
                <p className="text-sm text-stone-600">Transparency, Collaboration, and Support.</p>
             </div>
             <div className="text-center p-6 bg-stone-50 rounded-lg">
                <Coffee className="mx-auto text-primary-600 mb-3" size={32} />
                <h3 className="font-bold mb-2">Perks</h3>
                <p className="text-sm text-stone-600">Remote-first culture, delicious team lunches.</p>
             </div>
             <div className="text-center p-6 bg-stone-50 rounded-lg">
                <Briefcase className="mx-auto text-primary-600 mb-3" size={32} />
                <h3 className="font-bold mb-2">Impact</h3>
                <p className="text-sm text-stone-600">Directly help small local businesses thrive.</p>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-stone-900 mb-6">Open Positions</h2>
          <div className="space-y-4">
             {[
               { title: 'Community Manager', loc: 'Amsterdam (Hybrid)', type: 'Full-time' },
               { title: 'Marketing Specialist', loc: 'Remote (NL)', type: 'Full-time' },
               { title: 'IT Support Engineer', loc: 'Rotterdam', type: 'Part-time' }
             ].map((job, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-6 border border-stone-200 rounded-lg hover:border-primary-500 transition-colors">
                   <div className="mb-4 sm:mb-0 text-center sm:text-left">
                      <h3 className="font-bold text-lg text-stone-900">{job.title}</h3>
                      <p className="text-stone-500 text-sm">{job.loc} • {job.type}</p>
                   </div>
                   <Button variant="outline" size="sm">Apply Now</Button>
                </div>
             ))}
          </div>

       </div>
    </div>
  );
};
