import React from 'react';
import { Mail, Phone, MessageCircle, FileText, Search } from 'lucide-react';
import { FAQS } from '../constants';

export const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">How can we help?</h1>
          <div className="relative max-w-lg mx-auto">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
             <input type="text" placeholder="Search for answers..." className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-full shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 text-center">
              <MessageCircle className="mx-auto text-primary-600 mb-3" size={32} />
              <h3 className="font-bold mb-1">Live Chat</h3>
              <p className="text-stone-500 text-sm mb-4">Mon-Fri, 9am - 5pm CET</p>
              <button className="text-primary-700 font-bold text-sm hover:underline">Start Chat</button>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 text-center">
              <Mail className="mx-auto text-primary-600 mb-3" size={32} />
              <h3 className="font-bold mb-1">Email Support</h3>
              <p className="text-stone-500 text-sm mb-4">Response within 24h</p>
              <a href="mailto:support@culinarystart.nl" className="text-primary-700 font-bold text-sm hover:underline">support@culinarystart.nl</a>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 text-center">
              <Phone className="mx-auto text-primary-600 mb-3" size={32} />
              <h3 className="font-bold mb-1">Phone</h3>
              <p className="text-stone-500 text-sm mb-4">Mon-Fri, 9am - 5pm CET</p>
              <a href="tel:+31680218178" className="text-primary-700 font-bold text-sm hover:underline">+31 6 80218178</a>
           </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
           <div className="p-6 border-b border-stone-200">
              <h2 className="text-xl font-bold text-stone-900">Frequently Asked Questions</h2>
           </div>
           <div className="divide-y divide-stone-200">
              {FAQS.map((faq, idx) => (
                 <div key={idx} className="p-6">
                    <span className="text-xs font-bold text-primary-600 uppercase mb-1 block">{faq.category}</span>
                    <h3 className="font-bold text-stone-900 mb-2">{faq.question}</h3>
                    <p className="text-stone-600">{faq.answer}</p>
                 </div>
              ))}
           </div>
           <div className="p-6 bg-stone-50 text-center">
              <p className="text-stone-600 mb-2">Can't find what you're looking for?</p>
              <button className="font-bold text-primary-700 hover:underline">Visit full Help Center</button>
           </div>
        </div>

      </div>
    </div>
  );
};