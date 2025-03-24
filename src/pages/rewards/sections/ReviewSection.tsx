import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';
import { Check } from 'lucide-react';

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
    <div id="review-section">
      <RewardSection 
        title="Leave a review about Zebracat"
        icon={icon}
        creditAmount={5}
        description="Your honest feedback helps us improve and helps others discover Zebracat. Leave a review of at least 50 words on any platform below to earn credits!"
        proTip="Include specific features you love and how Zebracat has helped your workflow for the most impactful reviews. Screenshots of your experience with the app are highly appreciated!"
        tipBackgroundColor="bg-amber-50"
        tipTextColor="text-amber-800"
        tipBorderColor="border-amber-100"
      >
        <div className="space-y-6">
          {/* Step 1: Write the review */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-3 text-amber-600">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-xs font-medium">1</div>
              <h3 className="font-medium">Write your review on any platform</h3>
            </div>
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
            
            <div className={`mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100`}>
              <p className={`text-sm text-amber-800`}>
                <strong>Pro tip:</strong> Include specific features you love and how Zebracat has helped your workflow for the most impactful reviews. Screenshots of your experience with the app are highly appreciated!
              </p>
            </div>
          </div>
          
          {/* Step 2: Submit proof */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-3 text-amber-600">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-xs font-medium">2</div>
              <h3 className="font-medium">Submit proof to earn 5 credits</h3>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={openDialog}
                className="rewards-button flex items-center gap-2 py-2 px-4 text-sm"
              >
                Submit your review <Check className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </RewardSection>
    </div>
  );
};

export default ReviewSection;
