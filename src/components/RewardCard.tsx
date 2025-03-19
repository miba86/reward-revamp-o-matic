
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RewardCardProps {
  name: string;
  logo: string;
  onClick: () => void;
}

const RewardCard: React.FC<RewardCardProps> = ({ name, logo, onClick }) => {
  return (
    <div 
      className="platform-card group cursor-pointer" 
      onClick={onClick}
    >
      <div className="w-16 h-16 mb-3 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain transition-transform group-hover:scale-110" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200";
          }}
        />
      </div>
      <div className="flex items-center mt-1">
        <span className="text-sm font-medium mr-1">{name}</span>
        <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-brand-purple" />
      </div>
    </div>
  );
};

export default RewardCard;
