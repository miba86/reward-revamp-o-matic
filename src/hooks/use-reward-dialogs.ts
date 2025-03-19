
import { useState } from 'react';
import { RewardType } from '../types/reward';

export const useRewardDialogs = () => {
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [socialDialogOpen, setSocialDialogOpen] = useState(false);
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [qaDialogOpen, setQaDialogOpen] = useState(false);
  
  const openDialog = (type: RewardType) => {
    switch(type) {
      case 'review':
        setReviewDialogOpen(true);
        break;
      case 'social':
        setSocialDialogOpen(true);
        break;
      case 'blog':
        setBlogDialogOpen(true);
        break;
      case 'video':
        setVideoDialogOpen(true);
        break;
      case 'qa':
        setQaDialogOpen(true);
        break;
    }
  };
  
  const closeDialog = (type: RewardType) => {
    switch(type) {
      case 'review':
        setReviewDialogOpen(false);
        break;
      case 'social':
        setSocialDialogOpen(false);
        break;
      case 'blog':
        setBlogDialogOpen(false);
        break;
      case 'video':
        setVideoDialogOpen(false);
        break;
      case 'qa':
        setQaDialogOpen(false);
        break;
    }
  };
  
  return {
    reviewDialogOpen,
    socialDialogOpen,
    blogDialogOpen,
    videoDialogOpen,
    qaDialogOpen,
    openDialog,
    closeDialog,
    setReviewDialogOpen,
    setSocialDialogOpen,
    setBlogDialogOpen,
    setVideoDialogOpen,
    setQaDialogOpen
  };
};
