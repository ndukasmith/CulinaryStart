import React from 'react';
import { CheckCircle, Users, BookOpen, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Expert Consulting",
      icon: <CheckCircle className="w-12 h-12 text-primary-600" />,
      description: "Get help with Dutch food safety compliance, NVWA licensing, and HACCP implementation from certified experts.",
      features: ["1-on-1 Consultation", "Site Inspection", "License Filing Assistance"],
      link: "/compliance"
    },
    {
      title: "Culinary Workshops",
      icon: <BookOpen className="w-12 h-12 text-primary-600" />,
      description: "Join workshops on sustainable cooking, plant-based recipe development, and delivery optimization.",
      features: ["Monthly Schedule", "Guest Chefs", "Certification Included"],
      link: "/community"
    },
    {
      title: "Networking Events",
      icon: <Users className="w-12 h-12 text-primary-600" />,
      description: "Connect with local suppliers, investors, and other entrepreneurs via our partnerships with KHN and StartLife.",
      features: ["Quarterly Meetups", "Supplier showcases", "Investor Pitch Nights"],
      link: "/community"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">More Than Just A Kitchen</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We provide the ecosystem you need to thrive in the Dutch food industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="mb-6 bg-primary-50 w-20 h-20 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-stone-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link} className="mt-auto">
                <Button variant="outline" fullWidth className="justify-between group">
                  Learn More 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Partners Strip */}
        <div className="mt-20 pt-10 border-t border-stone-200 text-center">
          <p className="text-stone-400 font-medium mb-8 uppercase tracking-wider">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
             {/* Mock logos via text for simplicity */}
             <span className="text-2xl font-bold text-stone-800">Sligro</span>
             <span className="text-2xl font-bold text-stone-800">Thuisbezorgd.nl</span>
             <span className="text-2xl font-bold text-stone-800">StartLife</span>
             <span className="text-2xl font-bold text-stone-800">Rabobank</span>
          </div>
        </div>
      </div>
    </div>
  );
};