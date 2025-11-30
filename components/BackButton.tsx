import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  label?: string;
  to?: string;
  className?: string;
  variant?: 'light' | 'dark'; // light = dark text on light bg (default), dark = white text on dark bg (for overlays)
}

export const BackButton: React.FC<BackButtonProps> = ({ 
  label = 'Back', 
  to, 
  className = '',
  variant = 'light' 
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  const isLight = variant === 'light';

  return (
    <button 
      onClick={handleBack}
      className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors z-10 ${
        isLight ? 'text-stone-500 hover:text-stone-900' : 'text-stone-200 hover:text-white'
      } ${className}`}
    >
      <div className={`p-1.5 rounded-full border transition-all ${
        isLight 
          ? 'bg-white border-stone-200 group-hover:border-stone-400 group-hover:bg-stone-50' 
          : 'bg-black/20 border-white/30 group-hover:bg-black/40 group-hover:border-white/50'
      }`}>
        <ArrowLeft size={16} className={isLight ? 'text-stone-600' : 'text-white'} />
      </div>
      <span>{label}</span>
    </button>
  );
};
