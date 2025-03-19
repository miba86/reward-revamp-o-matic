
import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  username: string;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, showMenuButton = false, onMenuClick }) => {
  return (
    <header className="w-full h-16 px-4 md:px-6 flex items-center justify-between bg-white border-b border-gray-100">
      <div className="flex items-center">
        {showMenuButton && (
          <button 
            onClick={onMenuClick}
            className="mr-3 p-1 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        )}
        <div className="text-zebra-purple font-bold text-xl md:text-2xl flex items-center">
          ZEBRACAT
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex items-center cursor-pointer group">
          <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium">{username.charAt(0)}</span>
          </div>
          <div className="ml-2 hidden sm:block">
            <div className="text-sm font-medium group-hover:text-zebra-purple transition-colors">{username}</div>
            <div className="text-xs text-gray-500">Super tier</div>
          </div>
          <ChevronDown className="h-4 w-4 ml-1 text-gray-400 hidden sm:block" />
        </div>
      </div>
    </header>
  );
};

export default Header;
