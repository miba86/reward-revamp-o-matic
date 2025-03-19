
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialShareCardProps {
  name: string;
  logo: string;
  tagName: string;
  onClick: () => void;
}

const SocialShareCard: React.FC<SocialShareCardProps> = ({ name, logo, tagName, onClick }) => {
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
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium mr-1">{name}</span>
        <span className="text-xs text-gray-500">@{tagName}</span>
      </div>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-brand-purple text-xs font-medium">
        <span>Share now</span>
        <ExternalLink className="h-3 w-3 ml-1" />
      </div>
    </div>
  );
};

export default SocialShareCard;
