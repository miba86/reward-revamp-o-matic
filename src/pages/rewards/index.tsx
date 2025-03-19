
import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SubmissionsList from '../../components/SubmissionsList';
import { useRewardDialogs } from '../../hooks/use-reward-dialogs';
import { Review } from '../../types/reward';
import { toast } from '@/hooks/use-toast';
import RewardsDialogs from './RewardsDialogs';
import RewardsSections from './RewardsSections';

const RewardsPage = () => {
  const [submittedReviews, setSubmittedReviews] = useState<Review[]>([]);
  const rewardDialogs = useRewardDialogs();
  
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

  const creditInfo = {
    used: 325,
    total: 1500
  };

  return (
    <div className="flex min-h-screen bg-zebra-grey">
      <Sidebar creditInfo={creditInfo} activeItem="rewards" />
      
      <div className="flex-1 flex flex-col">
        <Header username="Stirbozza" />
        
        <main className="flex-1 px-8 py-6 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2 text-zebra-dark">Want to create videos for free?</h1>
            <p className="text-gray-600 max-w-3xl">
              Help us grow and we'll return the favour! You can now earn credits by completing simple tasks which help us spread the word and find new users. Please follow instructions and tips carefully to claim your rewards.
            </p>
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
