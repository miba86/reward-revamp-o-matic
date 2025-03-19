
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between bg-white border-b border-gray-100">
      <div className="flex items-center">
        <div className="text-zebra-purple font-bold text-2xl flex items-center">
          ZEBRACAT
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center cursor-pointer group">
          <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium">{username.charAt(0)}</span>
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium group-hover:text-zebra-purple transition-colors">{username}</div>
            <div className="text-xs text-gray-500">Super tier</div>
          </div>
          <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
