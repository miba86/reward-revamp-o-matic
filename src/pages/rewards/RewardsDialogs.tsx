
import React from 'react';
import ReviewSubmission from '../../components/ReviewSubmission';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RewardsDialogsProps {
  dialogStates: {
    reviewDialogOpen: boolean;
    socialDialogOpen: boolean;
    blogDialogOpen: boolean;
    videoDialogOpen: boolean;
    qaDialogOpen: boolean;
    setReviewDialogOpen: (open: boolean) => void;
    setSocialDialogOpen: (open: boolean) => void;
    setBlogDialogOpen: (open: boolean) => void;
    setVideoDialogOpen: (open: boolean) => void;
    setQaDialogOpen: (open: boolean) => void;
  };
  onSubmit: (data: FormData) => void;
}

const RewardsDialogs: React.FC<RewardsDialogsProps> = ({ dialogStates, onSubmit }) => {
  return (
    <>
      <Dialog open={dialogStates.reviewDialogOpen} onOpenChange={dialogStates.setReviewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Review</DialogTitle>
            <DialogDescription>
              Add a link to your review and upload a screenshot for verification. We'll reward you with 5 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="review" onSubmit={onSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dialogStates.socialDialogOpen} onOpenChange={dialogStates.setSocialDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Social Share</DialogTitle>
            <DialogDescription>
              Add a link to your social post and upload a screenshot for verification. We'll reward you with 3 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="social" onSubmit={onSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dialogStates.blogDialogOpen} onOpenChange={dialogStates.setBlogDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Blog Post</DialogTitle>
            <DialogDescription>
              Add a link to your blog post and upload a screenshot for verification. We'll reward you with 8 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="blog" onSubmit={onSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dialogStates.videoDialogOpen} onOpenChange={dialogStates.setVideoDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Video Tutorial</DialogTitle>
            <DialogDescription>
              Add a link to your video and upload a screenshot for verification. We'll reward you with 10 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="video" onSubmit={onSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dialogStates.qaDialogOpen} onOpenChange={dialogStates.setQaDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Q&A Answer</DialogTitle>
            <DialogDescription>
              Add a link to your answer and upload a screenshot for verification. We'll reward you with 4 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="qa" onSubmit={onSubmit} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RewardsDialogs;
