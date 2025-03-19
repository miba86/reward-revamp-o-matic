
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import SocialShareCard from '../../../components/SocialShareCard';
import { Youtube, Check, ArrowRight } from 'lucide-react';

// Social platform logos
const SOCIAL_LOGOS: Record<string, string> = {
  twitter: "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",
  instagram: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  tiktok: "https://cdn.worldvectorlogo.com/logos/tiktok-1.svg",
  facebook: "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
};

interface SocialShareSectionProps {
  openDialog: () => void;
  icon: React.ReactNode;
}

const SocialShareSection: React.FC<SocialShareSectionProps> = ({ openDialog, icon }) => {
  return (
    <RewardSection 
      title="Share Zebracat videos on social media"
      icon={icon}
      creditAmount={3}
      description="Share videos created with Zebracat on your social accounts and tag us. We'll reward you with credits for helping spread the word!"
      proTip="Make sure to tag Zebracat in your posts and add a link to our website for easy verification. Once shared, submit the link to your post below to claim your credits!"
      tipBackgroundColor="bg-blue-50"
      tipTextColor="text-blue-800"
      tipBorderColor="border-blue-100"
    >
      <div className="space-y-6">
        {/* Step 1: Share on social media */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-blue-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-xs font-medium">1</div>
            <h3 className="font-medium">Share your Zebracat video on any platform</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <SocialShareCard 
              name="YouTube" 
              logo={<Youtube className="w-12 h-12 text-red-500" />}
              tagName="zebracat_app"
              onClick={() => window.open('https://youtube.com/upload', '_blank')}
            />
            <SocialShareCard 
              name="TikTok" 
              logo={SOCIAL_LOGOS.tiktok}
              tagName="zebracat"
              onClick={() => window.open('https://www.tiktok.com', '_blank')}
            />
            <SocialShareCard 
              name="Instagram" 
              logo={SOCIAL_LOGOS.instagram}
              tagName="zebracatapp"
              onClick={() => window.open('https://instagram.com', '_blank')}
            />
            <SocialShareCard 
              name="Facebook" 
              logo={SOCIAL_LOGOS.facebook}
              tagName="ZebracatApp"
              onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fzebracat.io', '_blank')}
            />
            <SocialShareCard 
              name="LinkedIn" 
              logo={SOCIAL_LOGOS.linkedin}
              tagName="zebracat"
              onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fzebracat.io', '_blank')}
            />
            <SocialShareCard 
              name="Twitter" 
              logo={SOCIAL_LOGOS.twitter}
              tagName="zebracat_app"
              onClick={() => window.open('https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20video%20I%20created%20with%20@zebracat_app!', '_blank')}
            />
          </div>
          
          <div className={`mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100`}>
            <p className={`text-sm text-blue-800`}>
              <strong>Pro tip:</strong> Make sure to tag Zebracat in your posts and add a link to our website for easy verification. Once shared, submit the link to your post below to claim your credits!
            </p>
          </div>
        </div>
        
        {/* Connecting arrow */}
        <div className="flex justify-center">
          <ArrowRight className="text-gray-400" />
        </div>
        
        {/* Step 2: Submit proof */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-blue-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-xs font-medium">2</div>
            <h3 className="font-medium">Submit proof to earn 3 credits</h3>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openDialog}
              className="rewards-button flex items-center gap-2 py-2 px-4 text-sm"
            >
              Submit your social post <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </RewardSection>
  );
};

export default SocialShareSection;
