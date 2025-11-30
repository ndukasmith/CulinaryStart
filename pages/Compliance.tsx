import React from 'react';
import { FileText, Download, ExternalLink, AlertTriangle } from 'lucide-react';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';

export const Compliance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        
        <div className="mb-12">
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Legal & Compliance Center</h1>
          <p className="text-lg text-stone-600">
            Navigate the Dutch food regulations with ease. We provide templates and guides to ensure your business stays compliant with NVWA and local laws.
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-12 rounded-r-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700">
                New allergen labeling requirements are in effect as of September 2023. <a href="#" className="font-medium underline hover:text-amber-600">Read the summary.</a>
              </p>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-8">
          
          <div className="border border-stone-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
              <FileText className="mr-2 text-primary-600" /> 
              HACCP Documentation
            </h2>
            <p className="text-stone-600 mb-4">
              Download standard hygiene code templates approved for small-scale catering and food production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} /> Hygiene Code Checklist (PDF)
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} /> Cleaning Schedule Template (XLSX)
              </Button>
            </div>
          </div>

          <div className="border border-stone-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
              <FileText className="mr-2 text-primary-600" /> 
              Rental Agreements
            </h2>
            <p className="text-stone-600 mb-4">
              Standardized legal contracts for kitchen rentals, protecting both the owner and the entrepreneur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} /> Short-term Rental Agreement (NL/EN)
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} /> Liability Waiver
              </Button>
            </div>
          </div>

          <div className="border border-stone-200 rounded-lg p-6 bg-stone-50">
             <h2 className="text-xl font-bold text-stone-900 mb-4">External Resources</h2>
             <ul className="space-y-3">
               <li>
                 <a href="#" className="flex items-center text-primary-700 hover:underline">
                   <ExternalLink size={14} className="mr-2" />
                   Official NVWA Website (Dutch Food Safety Authority)
                 </a>
               </li>
               <li>
                 <a href="#" className="flex items-center text-primary-700 hover:underline">
                   <ExternalLink size={14} className="mr-2" />
                   KVK (Chamber of Commerce) Registration Guide
                 </a>
               </li>
               <li>
                 <a href="#" className="flex items-center text-primary-700 hover:underline">
                   <ExternalLink size={14} className="mr-2" />
                   KHN Advice for Starters
                 </a>
               </li>
             </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
