import React from 'react';
import { MapPin, Star, CheckCircle } from 'lucide-react';
import { Kitchen } from '../types';
import { Link } from 'react-router-dom';

interface KitchenCardProps {
  kitchen: Kitchen;
}

export const KitchenCard: React.FC<KitchenCardProps> = ({ kitchen }) => {
  return (
    <Link to={`/kitchen/${kitchen.id}`} className="group block bg-white rounded-lg overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={kitchen.imageUrl} 
          alt={kitchen.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-stone-900 shadow-sm">
          €{kitchen.pricePerHour}/hr
        </div>
        {kitchen.certifications.includes('HACCP Certified') && (
          <div className="absolute top-2 left-2 bg-emerald-600/90 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 shadow-sm">
            <CheckCircle size={12} /> HACCP
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-stone-900 line-clamp-1">{kitchen.title}</h3>
        </div>
        <div className="flex items-center text-stone-500 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          {kitchen.location}
          <span className="mx-2">•</span>
          <Star size={14} className="mr-1 text-amber-400 fill-amber-400" />
          {kitchen.rating} ({kitchen.reviewCount})
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {kitchen.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">
              {amenity}
            </span>
          ))}
          {kitchen.amenities.length > 3 && (
            <span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">
              +{kitchen.amenities.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <span className="text-xs text-stone-400">Owner: {kitchen.ownerName}</span>
          <span className="text-sm font-medium text-primary-700 group-hover:underline">View Details</span>
        </div>
      </div>
    </Link>
  );
};