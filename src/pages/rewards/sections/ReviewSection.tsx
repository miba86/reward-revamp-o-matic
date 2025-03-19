
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';

// Platform logos
const PLATFORM_LOGOS: Record<string, string> = {
  g2: "https://cdn.worldvectorlogo.com/logos/g2crowd-1.svg",
  trustpilot: "https://cdn.worldvectorlogo.com/logos/trustpilot.svg",
  capterra: "https://cdn.worldvectorlogo.com/logos/capterra-1.svg",
  google: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
  producthunt: "https://cdn.worldvectorlogo.com/logos/product-hunt.svg", 
  trustradius: "https://media.trustradius.com/logo/product/956a6b2b-3b30-491c-9fb7-d49e8c0bf0f2.png"
};

interface ReviewSectionProps {
  openDialog: () => void;
  icon: React.ReactNode;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ openDialog, icon }) => {
  return (
    <RewardSection 
      number={2}
      title="Leave a review about Zebracat"
      icon={icon}
      creditAmount={5}
      description="Your honest feedback helps us improve and helps others discover Zebracat. Leave a review on any platform below to earn credits!"
      proTip="Include specific features you love and how Zebracat has helped your workflow for the most impactful reviews. Screenshots of your experience with the app are highly appreciated!"
      tipBackgroundColor="bg-amber-50"
      tipTextColor="text-amber-800"
      tipBorderColor="border-amber-100"
      onSubmitClick={openDialog}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <RewardCard 
          name="G2 Crowd" 
          logo={PLATFORM_LOGOS.g2}
          onClick={() => window.open('https://www.g2.com/products/zebracat/reviews', '_blank')}
        />
        <RewardCard 
          name="Trustpilot" 
          logo={PLATFORM_LOGOS.trustpilot}
          onClick={() => window.open('https://www.trustpilot.com/review/zebracat.io', '_blank')}
        />
        <RewardCard 
          name="Capterra" 
          logo={PLATFORM_LOGOS.capterra}
          onClick={() => window.open('https://www.capterra.com/p/zebracat/reviews', '_blank')}
        />
        <RewardCard 
          name="Google" 
          logo={PLATFORM_LOGOS.google}
          onClick={() => window.open('https://www.google.com/search?q=zebracat+reviews', '_blank')}
        />
        <RewardCard 
          name="Product Hunt" 
          logo={PLATFORM_LOGOS.producthunt}
          onClick={() => window.open('https://www.producthunt.com/products/zebracat', '_blank')}
        />
        <RewardCard 
          name="Trust Radius" 
          logo={PLATFORM_LOGOS.trustradius}
          onClick={() => window.open('https://www.trustradius.com/products/zebracat/reviews', '_blank')}
        />
      </div>
    </RewardSection>
  );
};

export default ReviewSection;
