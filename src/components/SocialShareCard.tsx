
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SocialShareCardProps {
  name: string;
  logo: React.ReactNode | string;
  tagName: string;
  onClick: () => void;
}

const SocialShareCard: React.FC<SocialShareCardProps> = ({ name, logo, tagName, onClick }) => {
  return (
    <div 
      className="platform-card group cursor-pointer" 
      onClick={onClick}
    >
      <div className="w-12 h-12 mb-2 flex items-center justify-center">
        {typeof logo === 'string' ? (
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="w-8 h-8 transition-transform group-hover:scale-110" 
          />
        ) : (
          <div className="transition-transform group-hover:scale-110">
            {logo}
          </div>
        )}
      </div>
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-gray-500">@{tagName}</div>
      <div className="flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-brand-purple">Share</span>
        <ArrowRight className="h-3 w-3 ml-1 text-brand-purple" />
      </div>
    </div>
  );
};

export default SocialShareCard;
