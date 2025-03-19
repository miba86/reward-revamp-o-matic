
import React from 'react';
import { Home, Video, FileText, Copy, Box, Gift, Plus } from 'lucide-react';

interface CreditInfo {
  used: number;
  total: number;
}

interface SidebarProps {
  creditInfo: CreditInfo;
  activeItem: string;
}

const Sidebar: React.FC<SidebarProps> = ({ creditInfo, activeItem }) => {
  const navItems = [
    { name: 'Home', icon: <Home className="h-5 w-5" /> },
    { name: 'Your Videos', icon: <Video className="h-5 w-5" /> },
    { name: 'Templates', icon: <FileText className="h-5 w-5" /> },
    { name: 'Cloning', icon: <Copy className="h-5 w-5" /> },
    { name: 'My Brand Kits', icon: <Box className="h-5 w-5" /> },
    { name: 'Rewards', icon: <Gift className="h-5 w-5" /> }
  ];

  return (
    <div className="w-[230px] h-screen bg-white border-r border-gray-100 flex flex-col py-5">
      <div className="px-5 mb-6">
        <div className="text-sm text-gray-500 mb-1">Credit Balance</div>
        <div className="progress-track mb-2">
          <div 
            className="progress-fill"
            style={{ width: `${(creditInfo.used / creditInfo.total) * 100}%` }}
          ></div>
        </div>
        <div className="text-sm font-medium">{creditInfo.used}/{creditInfo.total} Credits Used</div>
      </div>

      <div className="px-5 mb-6">
        <button className="w-full rewards-button flex items-center justify-center">
          <Plus className="h-4 w-4 mr-2" />
          Create Video
        </button>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href="#" 
                className={`flex items-center px-5 py-3 text-sm font-medium rounded-md transition-colors ${
                  activeItem === item.name.toLowerCase() 
                    ? 'text-zebra-purple bg-zebra-grey border-l-4 border-zebra-purple' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto px-5">
        <div className="p-4 rounded-xl border border-dashed border-zebra-purple bg-zebra-grey/30">
          <div className="flex items-center mb-2">
            <div className="h-6 w-6 rounded-full bg-zebra-purple/20 flex items-center justify-center mr-2">
              <span className="text-zebra-purple text-xs">⚡</span>
            </div>
            <h3 className="font-medium text-sm text-zebra-dark">Upgrade your plan</h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">Running tight? You can buy more Zebracat credits any time.</p>
          <button className="w-full py-2 bg-white rounded-lg text-sm font-medium text-zebra-purple hover:bg-zebra-grey transition-colors">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
