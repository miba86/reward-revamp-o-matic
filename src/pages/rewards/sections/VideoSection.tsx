
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import VideoPlatformCard from '../../../components/VideoPlatformCard';
import { Youtube, Check, ArrowRight } from 'lucide-react';

// Social platform logos
const SOCIAL_LOGOS: Record<string, string> = {
  twitter: "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",
  instagram: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  tiktok: "https://cdn.worldvectorlogo.com/logos/tiktok-1.svg",
  facebook: "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
};

interface VideoSectionProps {
  openDialog: () => void;
  icon: React.ReactNode;
}

const VideoSection: React.FC<VideoSectionProps> = ({ openDialog, icon }) => {
  return (
    <RewardSection 
      title="Publishing a YouTube Video, TikTok, or IG Reels Tutorial About Zebracat"
      icon={icon}
      creditAmount={10}
      description="Create a tutorial video showing how to use Zebracat features. Video content is highly engaging and helps new users understand our product's value quickly."
      proTip="Keep videos under 5 minutes for better engagement. Focus on solving one specific problem or showcasing one feature in depth rather than trying to cover everything."
      tipBackgroundColor="bg-red-50"
      tipTextColor="text-red-800"
      tipBorderColor="border-red-100"
    >
      <div className="space-y-6">
        {/* Step 1: Create the video */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-red-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-xs font-medium">1</div>
            <h3 className="font-medium">Create and publish your video tutorial</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <VideoPlatformCard 
              icon={<Youtube className="text-red-500" />} 
              name="YouTube Tutorial"
              onClick={() => window.open('https://www.youtube.com/upload', '_blank')}
            />
            <VideoPlatformCard 
              icon={SOCIAL_LOGOS.tiktok} 
              name="TikTok Tutorial"
              onClick={() => window.open('https://www.tiktok.com/upload', '_blank')}
            />
            <VideoPlatformCard 
              icon={SOCIAL_LOGOS.instagram} 
              name="Instagram Reels"
              onClick={() => window.open('https://www.instagram.com/reels/create/', '_blank')}
            />
          </div>
          
          <div className={`mt-4 p-4 bg-red-50 rounded-lg border border-red-100`}>
            <p className={`text-sm text-red-800`}>
              <strong>Pro tip:</strong> Keep videos under 5 minutes for better engagement. Focus on solving one specific problem or showcasing one feature in depth rather than trying to cover everything.
            </p>
          </div>
        </div>
        
        {/* Connecting arrow */}
        <div className="flex justify-center">
          <ArrowRight className="text-gray-400" />
        </div>
        
        {/* Step 2: Submit proof */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-red-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-xs font-medium">2</div>
            <h3 className="font-medium">Submit proof to earn 10 credits</h3>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openDialog}
              className="rewards-button flex items-center gap-2 py-2 px-4 text-sm"
            >
              Submit your video <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </RewardSection>
  );
};

export default VideoSection;
