import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '../components/Button';

export const Press: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8">Press Room</h1>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mb-12">
             <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
             <p className="text-stone-600 mb-6">
                For interview requests, high-res assets, or comments on the Dutch shared kitchen market, please contact our media team.
             </p>
             <a href="mailto:press@culinarystart.nl" className="inline-flex items-center text-primary-700 font-bold hover:underline text-lg">
                <Mail className="mr-2" /> press@culinarystart.nl
             </a>
          </div>

          <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
          <div className="space-y-6 mb-12">
             <div className="bg-white p-6 rounded-lg border border-stone-200">
                <span className="text-xs font-bold text-primary-600 uppercase">Oct 1, 2023</span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">CulinaryStart Launches in Amsterdam</h3>
                <p className="text-stone-600 mb-4">The platform aims to reduce overhead for food startups by 70%.</p>
                <Button variant="outline" size="sm">Read Release</Button>
             </div>
             <div className="bg-white p-6 rounded-lg border border-stone-200">
                <span className="text-xs font-bold text-primary-600 uppercase">Sep 15, 2023</span>
                <h3 className="text-xl font-bold text-stone-900 mt-1 mb-2">Partnership Announced with Sligro Food Group</h3>
                <p className="text-stone-600 mb-4">Members now receive exclusive wholesale benefits.</p>
                <Button variant="outline" size="sm">Read Release</Button>
             </div>
          </div>

          <div className="flex gap-4">
             <Button className="gap-2"><Download size={18}/> Download Media Kit</Button>
             <Button variant="outline" className="gap-2"><Download size={18}/> Download Brand Assets</Button>
          </div>
       </div>
    </div>
  );
};