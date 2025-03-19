
import React from 'react';
import { Flame } from 'lucide-react';

interface CreditCounterProps {
  earningAmount: number;
}

const CreditCounter: React.FC<CreditCounterProps> = ({ earningAmount }) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-brand-purple/10 to-brand-lightPurple/5 rounded-full px-4 py-1 animate-pulse-soft">
      <div className="mr-2 bg-brand-purple rounded-full p-1">
        <Flame className="h-4 w-4 text-white" />
      </div>
      <div className="text-sm font-medium">
        <span className="text-brand-purple">Earn {earningAmount} credits</span>
        <span className="text-gray-600"> for each review</span>
      </div>
    </div>
  );
};

export default CreditCounter;
