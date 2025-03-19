
import React from 'react';
import { Share2, Sparkles, Book, Youtube, HelpCircle } from 'lucide-react';
import { RewardType } from '../../types/reward';
import SocialShareSection from './sections/SocialShareSection';
import ReviewSection from './sections/ReviewSection';
import BlogSection from './sections/BlogSection';
import VideoSection from './sections/VideoSection';
import QASection from './sections/QASection';

interface RewardsSectionsProps {
  openDialog: (type: RewardType) => void;
}

const RewardsSections: React.FC<RewardsSectionsProps> = ({ openDialog }) => {
  return (
    <>
      <SocialShareSection 
        openDialog={() => openDialog('social')} 
        icon={<Share2 className="h-5 w-5 text-blue-400" />}
      />
      
      <ReviewSection 
        openDialog={() => openDialog('review')} 
        icon={<Sparkles className="h-5 w-5 text-amber-400" />}
      />
      
      <BlogSection 
        openDialog={() => openDialog('blog')} 
        icon={<Book className="h-5 w-5 text-green-500" />}
      />
      
      <VideoSection 
        openDialog={() => openDialog('video')} 
        icon={<Youtube className="h-5 w-5 text-red-500" />}
      />
      
      <QASection 
        openDialog={() => openDialog('qa')} 
        icon={<HelpCircle className="h-5 w-5 text-purple-500" />}
      />
    </>
  );
};

export default RewardsSections;
