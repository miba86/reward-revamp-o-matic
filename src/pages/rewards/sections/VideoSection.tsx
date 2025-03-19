
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import VideoPlatformCard from '../../../components/VideoPlatformCard';
import { Youtube } from 'lucide-react';

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
      number={4}
      title="Publishing a YouTube Video, TikTok, or IG Reels Tutorial About Zebracat"
      icon={icon}
      creditAmount={10}
      description="Create a tutorial video showing how to use Zebracat features. Video content is highly engaging and helps new users understand our product's value quickly."
      proTip="Keep videos under 5 minutes for better engagement. Focus on solving one specific problem or showcasing one feature in depth rather than trying to cover everything."
      tipBackgroundColor="bg-red-50"
      tipTextColor="text-red-800"
      tipBorderColor="border-red-100"
      onSubmitClick={openDialog}
    >
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
    </RewardSection>
  );
};

export default VideoSection;
