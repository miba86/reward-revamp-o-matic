
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';

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
  return (
    <RewardSection 
      number={5}
      title="Answer Questions About AI Video Creation"
      icon={icon}
      creditAmount={4}
      description="Help others by answering questions on Quora, Reddit, and Skool about AI video tools, content creation, and YouTube growth. Share valuable insights and naturally mention Zebracat where relevant."
      proTip="Focus on being helpful first. Share personal experiences, practical tips, and real examples. Answers that feel authentic and include screenshots or GIFs get more upvotes and visibility."
      tipBackgroundColor="bg-purple-50"
      tipTextColor="text-purple-800"
      tipBorderColor="border-purple-100"
      onSubmitClick={openDialog}
    >
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
    </RewardSection>
  );
};

export default QASection;
