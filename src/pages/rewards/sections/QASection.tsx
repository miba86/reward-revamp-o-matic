
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';
import { Check, ArrowRight } from 'lucide-react';

// Q&A platform logos
const QA_LOGOS: Record<string, string> = {
  quora: "https://cdn.worldvectorlogo.com/logos/quora-1.svg",
  reddit: "https://cdn.worldvectorlogo.com/logos/reddit-4.svg",
  skool: "/lovable-uploads/7a3847d8-cd8e-447f-a47b-a4b3804a41fc.png"
};

interface QASectionProps {
  openDialog: () => void;
  icon: React.ReactNode;
}

const QASection: React.FC<QASectionProps> = ({ openDialog, icon }) => {
  // Define tip styling variables
  const tipBackgroundColor = "bg-purple-50";
  const tipTextColor = "text-purple-800";
  const tipBorderColor = "border-purple-100";

  return (
    <RewardSection 
      title="Answer Questions About AI Video Creation"
      icon={icon}
      creditAmount={4}
      description="Help others by answering questions on Quora, Reddit, and Skool about AI video tools, content creation, and YouTube growth. Share valuable insights and naturally mention Zebracat where relevant."
      proTip="Focus on being helpful first. Share personal experiences, practical tips, and real examples. Answers that feel authentic and include screenshots or GIFs get more upvotes and visibility."
      tipBackgroundColor={tipBackgroundColor}
      tipTextColor={tipTextColor}
      tipBorderColor={tipBorderColor}
    >
      <div className="space-y-6">
        {/* Step 1: Answer questions */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-purple-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-xs font-medium">1</div>
            <h3 className="font-medium">Answer questions on these platforms</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RewardCard 
              name="Quora" 
              logo={QA_LOGOS.quora}
              onClick={() => window.open('https://www.quora.com/search?q=zebracat', '_blank')}
            />
            <RewardCard 
              name="Reddit" 
              logo={QA_LOGOS.reddit}
              onClick={() => window.open('https://www.reddit.com/search/?q=zebracat', '_blank')}
            />
            <RewardCard 
              name="Skool" 
              logo={QA_LOGOS.skool}
              onClick={() => window.open('https://www.skool.com', '_blank')}
            />
          </div>
          
          <div className={`mt-4 p-4 ${tipBackgroundColor} rounded-lg border ${tipBorderColor}`}>
            <p className={`text-sm ${tipTextColor}`}>
              <strong>Pro tip:</strong> Focus on being helpful first. Share personal experiences, practical tips, and real examples. Answers that feel authentic and include screenshots or GIFs get more upvotes and visibility.
            </p>
          </div>
        </div>
        
        {/* Connecting arrow */}
        <div className="flex justify-center">
          <ArrowRight className="text-gray-400" />
        </div>
        
        {/* Step 2: Submit proof */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-purple-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-xs font-medium">2</div>
            <h3 className="font-medium">Submit proof to earn 4 credits</h3>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openDialog}
              className="rewards-button flex items-center gap-2 py-2 px-4 text-sm"
            >
              Submit your answer <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </RewardSection>
  );
};

export default QASection;
