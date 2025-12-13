import React from 'react';
import { ShieldCheck, FileText, Search, Phone, Mail, CheckCircle, HelpCircle, ArrowRight, Calendar, UserCheck, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';

export const ComplianceConsulting: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton to="/services" label="Back to Services" />
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 mt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-4">
             <ShieldCheck size={14} /> Official Partner Service
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Expert Dutch Food Safety Compliance (NVWA + HACCP) for Kitchen Owners
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            Don't let regulations slow you down. We handle the hard parts so you can focus on running your kitchen.
          </p>
        </div>

        {/* Why Choose Us - Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                 <UserCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">100% Certified Experts</h3>
              <p className="text-stone-500 text-sm">Every consultant has 5+ years in food safety and is NVWA-certified.</p>
           </div>
           <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                 <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">92% Pass Rate</h3>
              <p className="text-stone-500 text-sm">For clients who use our Site Inspection service before their official NVWA audit.</p>
           </div>
           <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-emerald-50 p-4 rounded-full mb-4">
                 <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Trusted Locally</h3>
              <p className="text-stone-500 text-sm">Used by 80% of CulinaryStart’s Amsterdam kitchen owners.</p>
           </div>
        </div>

        {/* Service Deep Dives */}
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           
           {/* Service 1 */}
           <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:border-primary-500 transition-colors flex flex-col">
              <div className="bg-stone-900 text-white p-6">
                 <h3 className="text-xl font-bold mb-1">1-on-1 Consultation</h3>
                 <p className="text-stone-400 text-sm">Strategy & Guidance</p>
              </div>
              <div className="p-6 flex-grow">
                 <p className="text-stone-600 mb-6 min-h-[48px]">
                    Tailored to your kitchen type (ghost kitchen, bakery, etc.) — we cover HACCP plan drafting, NVWA requirement checklists, and staff training tips.
                 </p>
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>Customized advice for your specific layout</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>60min video or phone call</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>2-page actionable follow-up report</span>
                    </li>
                 </ul>
              </div>
              <div className="p-6 border-t border-stone-100 mt-auto bg-stone-50">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-stone-900">€99</span>
                    <span className="text-xs text-stone-500 uppercase">One-time fee</span>
                 </div>
                 <Button fullWidth>Book Consultation</Button>
              </div>
           </div>

           {/* Service 2 */}
           <div className="bg-white rounded-xl overflow-hidden border-2 border-primary-600 shadow-md transform md:-translate-y-4 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <div className="bg-primary-700 text-white p-6">
                 <h3 className="text-xl font-bold mb-1">Site Inspection</h3>
                 <p className="text-primary-100 text-sm">Mock Audit & Fixes</p>
              </div>
              <div className="p-6 flex-grow">
                 <p className="text-stone-600 mb-6 min-h-[48px]">
                    A pre-NVWA audit walkthrough to identify gaps (e.g., cross-contamination risks, cleaning protocols) before the inspector arrives.
                 </p>
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>2hr on-site visit (Netherlands-wide)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>Detailed 10-point "fix list"</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>Comprehensive 4-page audit report</span>
                    </li>
                 </ul>
              </div>
              <div className="p-6 border-t border-stone-100 mt-auto bg-primary-50">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-stone-900">€250</span>
                    <span className="text-xs text-stone-500 uppercase">One-time fee</span>
                 </div>
                 <Button fullWidth>Schedule Inspection</Button>
              </div>
           </div>

           {/* Service 3 */}
           <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:border-primary-500 transition-colors flex flex-col">
              <div className="bg-stone-900 text-white p-6">
                 <h3 className="text-xl font-bold mb-1">License Filing</h3>
                 <p className="text-stone-400 text-sm">Paperwork & Processing</p>
              </div>
              <div className="p-6 flex-grow">
                 <p className="text-stone-600 mb-6 min-h-[48px]">
                    Complete NVWA application form filling, document review, and follow-up with authorities. We cut processing time by up to 2 weeks.
                 </p>
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>Full document review & validation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>Direct liaison with NVWA on your behalf</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-stone-700">
                       <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                       <span>Support until license approval</span>
                    </li>
                 </ul>
              </div>
              <div className="p-6 border-t border-stone-100 mt-auto bg-stone-50">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-stone-900">€199</span>
                    <span className="text-xs text-stone-500 uppercase">One-time fee</span>
                 </div>
                 <Button fullWidth>Start Filing</Button>
              </div>
           </div>

        </div>

        {/* CTA Section */}
        <div className="bg-stone-900 rounded-2xl p-8 md:p-16 text-center text-white mb-20">
           <h2 className="text-3xl font-serif font-bold mb-6">Not sure what you need?</h2>
           <p className="text-stone-300 mb-8 text-lg">
              Let's chat about your kitchen's specific status. No pressure, just clarity.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 border-none gap-2">
                 <Calendar size={20} /> Book a free 15min intro call
              </Button>
              <div className="flex items-center gap-2 text-stone-300 text-sm mt-4 sm:mt-0">
                 <span className="hidden sm:inline">|</span>
                 <Mail size={16} /> Email: compliance@culinarystart.nl
                 <span className="text-xs bg-stone-800 px-2 py-0.5 rounded text-stone-400">Response: 2hrs</span>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
           <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                 <h3 className="font-bold text-stone-900 mb-2 flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    How long does NVWA licensing take?
                 </h3>
                 <p className="text-stone-600 pl-8">
                    Typically <strong>4-6 weeks</strong> if you do it yourself. With our License Filing assistance, we ensure the application is error-free, which often prevents delays and can speed up the process by up to 2 weeks.
                 </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                 <h3 className="font-bold text-stone-900 mb-2 flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    Do I need HACCP for a ghost kitchen?
                 </h3>
                 <p className="text-stone-600 pl-8">
                    <strong>Yes.</strong> All commercial kitchens in the Netherlands, regardless of whether you serve customers on-site or via delivery (ghost kitchen), require a valid HACCP plan to operate legally.
                 </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                 <h3 className="font-bold text-stone-900 mb-2 flex items-start gap-3">
                    <HelpCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    What happens if I fail the NVWA audit?
                 </h3>
                 <p className="text-stone-600 pl-8">
                    If you fail, the NVWA will provide a report of violations. You may face fines or temporary closure. Our Site Inspection service is designed specifically to prevent this by catching issues <em>before</em> the inspector sees them.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};