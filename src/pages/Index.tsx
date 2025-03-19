import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RewardCard from '../components/RewardCard';
import SocialShareCard from '../components/SocialShareCard';
import ReviewSubmission from '../components/ReviewSubmission';
import VideoPlatformCard from '../components/VideoPlatformCard';
import RewardSection from '../components/RewardSection';
import SubmissionsList from '../components/SubmissionsList';
import { useRewardDialogs } from '../hooks/use-reward-dialogs';
import { Review, RewardType } from '../types/reward';
import { 
  Check, 
  Share2, 
  Sparkles, 
  Send, 
  Book, 
  Youtube, 
  HelpCircle, 
  Award,
  ArrowRight
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PLATFORM_LOGOS: Record<string, string> = {
  g2: "https://cdn.worldvectorlogo.com/logos/g2crowd-1.svg",
  trustpilot: "https://cdn.worldvectorlogo.com/logos/trustpilot.svg",
  capterra: "https://cdn.worldvectorlogo.com/logos/capterra-1.svg",
  google: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
  producthunt: "https://cdn.worldvectorlogo.com/logos/product-hunt.svg", 
  trustradius: "https://media.trustradius.com/logo/product/956a6b2b-3b30-491c-9fb7-d49e8c0bf0f2.png"
};

const SOCIAL_LOGOS: Record<string, string> = {
  twitter: "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",
  instagram: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  tiktok: "https://cdn.worldvectorlogo.com/logos/tiktok-1.svg",
  facebook: "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
};

const BLOG_LOGOS: Record<string, string> = {
  personal: "https://cdn.worldvectorlogo.com/logos/blogger-1.svg",
  medium: "https://cdn.worldvectorlogo.com/logos/medium-m-2.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  devto: "https://cdn.worldvectorlogo.com/logos/devto.svg",
  hashnode: "https://cdn.worldvectorlogo.com/logos/hashnode.svg",
  wordpress: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"
};

const QA_LOGOS: Record<string, string> = {
  quora: "https://cdn.worldvectorlogo.com/logos/quora-1.svg",
  reddit: "https://cdn.worldvectorlogo.com/logos/reddit-4.svg",
  skool: "/lovable-uploads/7a3847d8-cd8e-447f-a47b-a4b3804a41fc.png"
};

const Index = () => {
  const [submittedReviews, setSubmittedReviews] = useState<Review[]>([]);
  const {
    reviewDialogOpen,
    socialDialogOpen,
    blogDialogOpen,
    videoDialogOpen,
    qaDialogOpen,
    setReviewDialogOpen,
    setSocialDialogOpen,
    setBlogDialogOpen,
    setVideoDialogOpen,
    setQaDialogOpen,
    openDialog
  } = useRewardDialogs();
  
  const handleSubmit = (formData: FormData) => {
    const type = formData.get('type') as RewardType;
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
      setReviewDialogOpen(false);
    } else if (type === 'social') {
      setSocialDialogOpen(false);
    } else if (type === 'blog') {
      setBlogDialogOpen(false);
    } else if (type === 'video') {
      setVideoDialogOpen(false);
    } else if (type === 'qa') {
      setQaDialogOpen(false);
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
            <h1 className="text-3xl font-semibold mb-2 text-zebra-dark">Want to increase your credits?</h1>
            <p className="text-gray-600 max-w-3xl">
              Help us grow and we'll return the favor! You can now earn credits by completing simple tasks which help us spread the word and find new users. Your support means a lot, and we're grateful to offer rewards as a thank you.
            </p>
          </div>
          
          <RewardSection 
            number={1}
            title="Share Zebracat videos on social media"
            icon={<Share2 className="h-5 w-5 text-blue-400" />}
            creditAmount={3}
            description="Share videos created with Zebracat on your social accounts and tag us. We'll reward you with credits for helping spread the word!"
            proTip="Make sure to tag Zebracat in your posts and add a link to our website for easy verification. Once shared, submit the link to your post below to claim your credits!"
            tipBackgroundColor="bg-blue-50"
            tipTextColor="text-blue-800"
            tipBorderColor="border-blue-100"
            onSubmitClick={() => openDialog('social')}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <SocialShareCard 
                name="Twitter" 
                logo={SOCIAL_LOGOS.twitter}
                tagName="zebracat_app"
                onClick={() => window.open('https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20video%20I%20created%20with%20@zebracat_app!', '_blank')}
              />
              <SocialShareCard 
                name="Instagram" 
                logo={SOCIAL_LOGOS.instagram}
                tagName="zebracatapp"
                onClick={() => window.open('https://instagram.com', '_blank')}
              />
              <SocialShareCard 
                name="LinkedIn" 
                logo={SOCIAL_LOGOS.linkedin}
                tagName="zebracat"
                onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fzebracat.io', '_blank')}
              />
              <SocialShareCard 
                name="TikTok" 
                logo={SOCIAL_LOGOS.tiktok}
                tagName="zebracat"
                onClick={() => window.open('https://www.tiktok.com', '_blank')}
              />
              <SocialShareCard 
                name="Facebook" 
                logo={SOCIAL_LOGOS.facebook}
                tagName="ZebracatApp"
                onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fzebracat.io', '_blank')}
              />
            </div>
          </RewardSection>
          
          <RewardSection 
            number={2}
            title="Leave a review about Zebracat"
            icon={<Sparkles className="h-5 w-5 text-amber-400" />}
            creditAmount={5}
            description="Your honest feedback helps us improve and helps others discover Zebracat. Leave a review on any platform below to earn credits!"
            proTip="Include specific features you love and how Zebracat has helped your workflow for the most impactful reviews. Screenshots of your experience with the app are highly appreciated!"
            tipBackgroundColor="bg-amber-50"
            tipTextColor="text-amber-800"
            tipBorderColor="border-amber-100"
            onSubmitClick={() => openDialog('review')}
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
          
          <RewardSection 
            number={3}
            title="Write a Blog Post or Medium Article About Zebracat"
            icon={<Book className="h-5 w-5 text-green-500" />}
            creditAmount={8}
            description="Share your experience using Zebracat in a blog post or article. Tell your readers how it's improved your workflow or helped solve specific problems."
            proTip="Add screenshots, use cases, and step-by-step guides for better results. Mention Zebracat early in your article and include a link using natural wording (e.g., I used this AI video tool to create my latest project)."
            tipBackgroundColor="bg-green-50"
            tipTextColor="text-green-800"
            tipBorderColor="border-green-100"
            onSubmitClick={() => openDialog('blog')}
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RewardCard 
                name="Your Website/Blog" 
                logo={BLOG_LOGOS.personal}
                onClick={() => window.open('https://zebracat.io/blog-contest', '_blank')}
              />
              <RewardCard 
                name="Medium" 
                logo={BLOG_LOGOS.medium}
                onClick={() => window.open('https://medium.com/new-story', '_blank')}
              />
              <RewardCard 
                name="LinkedIn Article" 
                logo={BLOG_LOGOS.linkedin}
                onClick={() => window.open('https://www.linkedin.com/post/new', '_blank')}
              />
            </div>
          </RewardSection>
          
          <RewardSection 
            number={4}
            title="Publishing a YouTube Video, TikTok, or IG Reels Tutorial About Zebracat"
            icon={<Youtube className="h-5 w-5 text-red-500" />}
            creditAmount={10}
            description="Create a tutorial video showing how to use Zebracat features. Video content is highly engaging and helps new users understand our product's value quickly."
            proTip="Keep videos under 5 minutes for better engagement. Focus on solving one specific problem or showcasing one feature in depth rather than trying to cover everything."
            tipBackgroundColor="bg-red-50"
            tipTextColor="text-red-800"
            tipBorderColor="border-red-100"
            onSubmitClick={() => openDialog('video')}
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
          
          <RewardSection 
            number={5}
            title="Answer Questions About AI Video Creation"
            icon={<HelpCircle className="h-5 w-5 text-purple-500" />}
            creditAmount={4}
            description="Help others by answering questions on Quora, Reddit, and Skool about AI video tools, content creation, and YouTube growth. Share valuable insights and naturally mention Zebracat where relevant."
            proTip="Answers that include real examples, screenshots, or GIFs make a bigger impact and drive engagement."
            tipBackgroundColor="bg-purple-50"
            tipTextColor="text-purple-800"
            tipBorderColor="border-purple-100"
            onSubmitClick={() => openDialog('qa')}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <RewardCard 
                name="Quora" 
                logo={QA_LOGOS.quora}
                onClick={() => window.open('https://www.quora.com/search?q=zebracat', '_blank')}
              />
              <RewardCard 
                name="Reddit" 
                logo={QA_LOGOS.reddit}
                onClick={() => window.open('https://www.reddit.com/search/?q=zebracat', '_blank')}
              />
              <RewardCard 
                name="Skool" 
                logo={QA_LOGOS.skool}
                onClick={() => window.open('https://www.skool.com', '_blank')}
              />
            </div>
          </RewardSection>
          
          <SubmissionsList submissions={submittedReviews} />
        </main>
      </div>

      <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Review</DialogTitle>
            <DialogDescription>
              Add a link to your review and upload a screenshot for verification. We'll reward you with 5 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="review" onSubmit={handleSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={socialDialogOpen} onOpenChange={setSocialDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Social Share</DialogTitle>
            <DialogDescription>
              Add a link to your social post and upload a screenshot for verification. We'll reward you with 3 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="social" onSubmit={handleSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={blogDialogOpen} onOpenChange={setBlogDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Blog Post</DialogTitle>
            <DialogDescription>
              Add a link to your blog post and upload a screenshot for verification. We'll reward you with 8 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="blog" onSubmit={handleSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Video Tutorial</DialogTitle>
            <DialogDescription>
              Add a link to your video and upload a screenshot for verification. We'll reward you with 10 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="video" onSubmit={handleSubmit} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={qaDialogOpen} onOpenChange={setQaDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Submit Your Q&A Answer</DialogTitle>
            <DialogDescription>
              Add a link to your answer and upload a screenshot for verification. We'll reward you with 4 credits once verified.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ReviewSubmission type="qa" onSubmit={handleSubmit} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
