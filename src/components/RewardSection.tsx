
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import CreditCounter from './CreditCounter';

interface RewardSectionProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  creditAmount: number;
  description: string;
  proTip: string;
  tipBackgroundColor: string;
  tipTextColor: string;
  tipBorderColor: string;
  children: React.ReactNode;
  onSubmitClick: () => void;
}

const RewardSection: React.FC<RewardSectionProps> = ({
  number,
  title,
  icon,
  creditAmount,
  description,
  proTip,
  tipBackgroundColor,
  tipTextColor,
  tipBorderColor,
  children,
  onSubmitClick,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
      <div className="mb-4 flex items-center">
        <div className="step-number">{number}</div>
        <h2 className="text-xl font-medium flex items-center">
          {title}
          <span className="ml-2 inline-flex animate-float">
            {icon}
          </span>
        </h2>
      </div>
      
      <div className="mb-6">
        <CreditCounter earningAmount={creditAmount} />
      </div>
      
      <p className="text-gray-600 mb-5">
        {description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-auto gap-4">
        {children}
      </div>
      
      <div className={`mt-6 p-4 ${tipBackgroundColor} rounded-lg border ${tipBorderColor}`}>
        <p className={`text-sm ${tipTextColor}`}>
          <strong>Pro tip:</strong> {proTip}
        </p>
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button 
          onClick={onSubmitClick}
          className="rewards-button flex items-center gap-2"
        >
          Start submitting <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default RewardSection;
