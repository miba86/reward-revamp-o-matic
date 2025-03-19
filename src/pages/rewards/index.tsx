
import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SubmissionsList from '../../components/SubmissionsList';
import { useRewardDialogs } from '../../hooks/use-reward-dialogs';
import { Review } from '../../types/reward';
import { toast } from '@/hooks/use-toast';
import RewardsDialogs from './RewardsDialogs';
import RewardsSections from './RewardsSections';
import { Button } from '@/components/ui/button';
import { Play, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const RewardsPage = () => {
  const [submittedReviews, setSubmittedReviews] = useState<Review[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const rewardDialogs = useRewardDialogs();
  const isMobile = useIsMobile();
  
  const handleSubmit = (formData: FormData) => {
    const type = formData.get('type') as any;
    const review: Review = {
      id: Date.now(),
      platform: formData.get('platform') as string,
      link: formData.get('link') as string,
      type: type,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    setSubmittedReviews([...submittedReviews, review]);
    
    toast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} submitted successfully!`,
      description: "We'll verify your submission and add credits to your account within 24 hours.",
      className: "bg-green-50 border-green-200",
    });

    if (type === 'review') {
      rewardDialogs.setReviewDialogOpen(false);
    } else if (type === 'social') {
      rewardDialogs.setSocialDialogOpen(false);
    } else if (type === 'blog') {
      rewardDialogs.setBlogDialogOpen(false);
    } else if (type === 'video') {
      rewardDialogs.setVideoDialogOpen(false);
    } else if (type === 'qa') {
      rewardDialogs.setQaDialogOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const creditInfo = {
    used: 325,
    total: 1500
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zebra-grey">
      {isMobile ? (
        <div 
          className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}
      
      <div className={`fixed md:relative z-40 transition-transform duration-300 ${
        sidebarOpen || !isMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <Sidebar creditInfo={creditInfo} activeItem="rewards" />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Header 
          username="Stirbozza" 
          onMenuClick={toggleSidebar}
          showMenuButton={isMobile}
        />
        
        <main className="flex-1 px-4 md:px-8 py-6 max-w-5xl">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-zebra-dark">Want to create videos for free?</h1>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4 md:gap-0">
              <p className="text-gray-600 max-w-3xl text-sm md:text-base">
                Help us grow and we'll return the favour! You can now earn credits by completing simple tasks which help us spread the word and find new users. Please follow instructions and tips carefully to claim your rewards.
              </p>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-purple-600 border-purple-200 hover:bg-purple-50 md:ml-4 whitespace-nowrap"
                onClick={() => window.open('https://example.com/tutorial-video', '_blank')}
              >
                <Play className="h-4 w-4" /> How it works
              </Button>
            </div>
          </div>
          
          <RewardsSections openDialog={rewardDialogs.openDialog} />
          
          <SubmissionsList submissions={submittedReviews} />
        </main>
      </div>

      <RewardsDialogs 
        dialogStates={rewardDialogs} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
};

export default RewardsPage;
