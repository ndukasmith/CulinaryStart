
import React from 'react';
import { BackButton } from '../components/BackButton';
import { Link } from 'react-router-dom';
import { ShieldCheck, Trash2, Wrench, AlertOctagon, Scale } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-stone-200 mt-6 animate-fadeIn">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary-100 text-primary-700 rounded-lg">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Terms of Service</h1>
              <p className="text-stone-500">Last Updated: November 2025</p>
            </div>
          </div>
          
          <div className="prose prose-stone max-w-none text-stone-600">
            <p className="lead text-lg mb-8">
              Welcome to CulinaryStart. These terms govern your use of our platform. By booking or listing a kitchen, you enter into a legally binding agreement to uphold the highest standards of the Dutch culinary industry.
            </p>

            {/* --- Section 1: User Conduct --- */}
            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4 flex items-center gap-2">
              <ShieldCheck className="text-primary-600" size={24} /> 1. User Conduct & Professionalism
            </h2>
            <p className="mb-4">
              All Food Entrepreneurs and Kitchen Owners must maintain a professional demeanor. The shared kitchen ecosystem relies on mutual respect and strict adherence to safety.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>HACCP Compliance:</strong> All users must operate in accordance with Dutch hygiene codes (Warenwet).</li>
              <li><strong>Respect for Shared Space:</strong> Do not monopolize shared equipment (e.g., blast chillers) beyond your booked slot.</li>
              <li><strong>Prohibited Activities:</strong> No smoking, vaping, or consumption of illegal substances. Unauthorized guests not listed in the booking are strictly prohibited from entering the production area.</li>
              <li><strong>Unauthorized Modifications:</strong> You may not modify the kitchen layout, electrical systems, or plumbing without explicit written consent from the Kitchen Owner and CulinaryStart.</li>
            </ul>

            {/* --- Section 2: Cleanliness & Waste --- */}
            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4 flex items-center gap-2">
              <Trash2 className="text-primary-600" size={24} /> 2. Strict Cleanliness & Waste Management
            </h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-6">
              <h4 className="text-emerald-900 font-bold mb-2">The "Broom-Clean" Standard</h4>
              <p className="text-emerald-800 text-sm mb-0">
                You are required to return the kitchen in the exact state you found it, or better. Failure to meet this standard will result in an immediate cleaning fee deduction from your security deposit.
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Surface Sanitization:</strong> All workstations, stovetops, and stainless steel surfaces must be wiped down with food-safe sanitizers.</li>
              <li><strong>Equipment Cleaning:</strong> Pots, pans, and utensils must be washed, dried, and returned to their designated storage. Mixers and ovens must be cleared of all food residue.</li>
              <li><strong>Waste Sorting (Dutch Regulations):</strong> You must sort waste into Organic (GFT), Recycling (PMD/Papier), and General Waste. Overflowing bins are prohibited.</li>
              <li><strong>Hazardous Waste:</strong> Used cooking oil must be poured into designated collection containers. <strong>NEVER</strong> pour oil down the drains.</li>
              <li><strong>Food Labels:</strong> All items in shared cold storage must be labeled with: <em>Entrepreneur Name, Date, and Contents</em>. Unlabeled items will be disposed of at the end of the day.</li>
            </ul>

            {/* --- Section 3: Property Protection --- */}
            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4 flex items-center gap-2">
              <Wrench className="text-primary-600" size={24} /> 3. Property & Equipment Protection
            </h2>
            <p className="mb-4">
              Kitchens represent high-value investments. Users are strictly liable for the equipment they operate.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Operating Guidelines:</strong> Equipment must be used only for its intended purpose. If you are unfamiliar with a specific appliance (e.g., a Combi-Oven or Dough Sheeter), you must request an induction from the Owner.</li>
              <li><strong>Facility Care:</strong> Avoid dragging heavy equipment across floors or scratching wall panels. Use only approved cleaning tools (no steel wool on non-stick or polished surfaces).</li>
              <li><strong>Immediate Reporting:</strong> You must report any malfunction, breakage, or safety hazard (e.g., a gas smell or leaky faucet) within <strong>60 minutes</strong> of discovery via the CulinaryStart platform.</li>
            </ul>

            {/* --- Section 4: Consequences --- */}
            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4 flex items-center gap-2 text-red-700">
              <AlertOctagon size={24} /> 4. Consequences for Violations
            </h2>
            <p className="mb-6">
              To protect the community, CulinaryStart enforces a strict penalty system for any breaches of conduct or cleanliness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-stone-200 p-4 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Financial Penalties</h4>
                <ul className="text-sm space-y-1 text-stone-600">
                  <li>• Uncleaned Kitchen: €50 – €150 Fee</li>
                  <li>• Abandoned Food/Trash: €30 Disposal Fee</li>
                  <li>• Minor Property Damage: Full Repair Cost</li>
                  <li>• Major Damage: Security Deposit Forfeiture</li>
                </ul>
              </div>
              <div className="border border-stone-200 p-4 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">Account Status</h4>
                <ul className="text-sm space-y-1 text-stone-600">
                  <li>• 1st Infraction: Written Warning</li>
                  <li>• 2nd Infraction: 30-Day Booking Ban</li>
                  <li>• 3rd Infraction: Permanent Account Deletion</li>
                  <li>• Illegal Activity: Immediate Life-time Ban</li>
                </ul>
              </div>
            </div>

            {/* --- Section 5: Dispute Resolution --- */}
            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-4 flex items-center gap-2">
              <Scale className="text-primary-600" size={24} /> 5. Dispute Resolution
            </h2>
            <p className="mb-4">
              Conflicts regarding cleanliness or damage are handled via our three-step process:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-8">
              <li><strong>Direct Resolution:</strong> Parties must attempt to resolve the issue via the in-app chat within 48 hours.</li>
              <li><strong>Platform Mediation:</strong> If unresolved, CulinaryStart will review time-stamped photos (mandatory for every check-in/out) and issue a binding decision.</li>
              <li><strong>Legal Recourse:</strong> Serious violations involving significant damage or illegal acts will be handled by the Dutch Civil Courts in Amsterdam.</li>
            </ol>

            <hr className="my-12 border-stone-200" />
            
            <div className="text-center p-8 bg-stone-900 text-white rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Agreement</h3>
              <p className="text-stone-400 text-sm mb-6">
                By clicking "Accept" or continuing to use the platform, you agree that you have read and understood the obligations regarding cleanliness, conduct, and the financial consequences of non-compliance.
              </p>
              <div className="flex justify-center gap-4">
                 <Link to="/search">
                   <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md font-bold transition-colors">I Accept</button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
