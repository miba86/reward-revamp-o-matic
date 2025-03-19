
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';
import { Check, Play, HelpCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';

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
        {/* How it works button */}
        <div className="flex justify-center mb-2">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 text-purple-600 border-purple-200 hover:bg-purple-50"
            onClick={() => window.open('https://example.com/tutorial-video', '_blank')}
          >
            <Play className="h-4 w-4" /> How it works
          </Button>
        </div>
        
        {/* Step 1: Answer questions */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-purple-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-sm font-medium">1</div>
            <h3 className="font-medium">Answer questions on these platforms</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.entries(QA_LOGOS).map(([platform, logo]) => (
              <RewardCard 
                key={platform}
                name={platform.charAt(0).toUpperCase() + platform.slice(1)} 
                logo={logo}
                onClick={() => window.open(`https://www.${platform}.com${platform === 'quora' || platform === 'reddit' ? '/search/?q=zebracat' : ''}`, '_blank')}
              />
            ))}
          </div>
          
          <div className={`mt-5 p-4 ${tipBackgroundColor} rounded-lg ${tipBorderColor}`}>
            <p className={`text-sm ${tipTextColor}`}>
              <strong>Pro tip:</strong> Focus on being helpful first. Share personal experiences, practical tips, and real examples. Answers that feel authentic and include screenshots or GIFs get more upvotes and visibility.
            </p>
          </div>
        </div>
        
        {/* Step 2: Submit proof */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-purple-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-sm font-medium">2</div>
            <h3 className="font-medium">Submit proof to earn 4 credits</h3>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={openDialog}
              className="bg-brand-purple hover:bg-brand-lightPurple text-white gap-2"
            >
              Submit your answer <Check className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </RewardSection>
  );
};

export default QASection;
