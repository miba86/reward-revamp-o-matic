
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CreditCounter from '../components/CreditCounter';
import RewardCard from '../components/RewardCard';
import SocialShareCard from '../components/SocialShareCard';
import ReviewSubmission from '../components/ReviewSubmission';
import { Check, Award, Sparkles, Share2, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Platform logos
const PLATFORM_LOGOS = {
  g2: "https://cdn.worldvectorlogo.com/logos/g2crowd-1.svg",
  trustpilot: "https://cdn.worldvectorlogo.com/logos/trustpilot.svg",
  capterra: "https://cdn.worldvectorlogo.com/logos/capterra-1.svg",
  google: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
  producthunt: "https://cdn.worldvectorlogo.com/logos/product-hunt.svg", 
  trustradius: "https://media.trustradius.com/logo/product/956a6b2b-3b30-491c-9fb7-d49e8c0bf0f2.png"
};

// Social platform logos
const SOCIAL_LOGOS = {
  twitter: "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",
  instagram: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  tiktok: "https://cdn.worldvectorlogo.com/logos/tiktok-1.svg",
  facebook: "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
};

const Index = () => {
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([]);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [socialDialogOpen, setSocialDialogOpen] = useState(false);
  
  const handleSubmit = (formData: FormData) => {
    const type = formData.get('type') as string;
    const review = {
      id: Date.now(),
      platform: formData.get('platform') as string,
      link: formData.get('link') as string,
      type: type,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    setSubmittedReviews([...submittedReviews, review]);
    
    toast({
      title: type === 'review' ? "Review submitted successfully!" : "Social share submitted successfully!",
      description: "We'll verify your submission and add credits to your account within 24 hours.",
      className: "bg-green-50 border-green-200",
    });

    if (type === 'review') {
      setReviewDialogOpen(false);
    } else {
      setSocialDialogOpen(false);
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
          
          {/* Option 1: Leave a review */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">1</div>
              <h2 className="text-xl font-medium flex items-center">
                Leave a review about Zebracat
                <span className="ml-2 inline-flex animate-float">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                </span>
              </h2>
            </div>
            
            <div className="mb-6">
              <CreditCounter earningAmount={5} />
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
            
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={() => setReviewDialogOpen(true)}
                className="rewards-button flex items-center gap-2"
              >
                Start submitting <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Option 2: Share videos on social media */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">2</div>
              <h2 className="text-xl font-medium flex items-center">
                Share Zebracat videos on social media
                <span className="ml-2 inline-flex animate-float">
                  <Share2 className="h-5 w-5 text-blue-400" />
                </span>
              </h2>
            </div>
            
            <div className="mb-6">
              <CreditCounter earningAmount={3} />
            </div>
            
            <p className="text-gray-600 mb-5">
              Share videos created with Zebracat on your social accounts and tag us. We'll reward you with credits for helping spread the word!
            </p>
            
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
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>Pro tip:</strong> Make sure to tag Zebracat in your posts and add a link to our website for easy verification. Once shared, submit the link to your post below to claim your credits!
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={() => setSocialDialogOpen(true)}
                className="rewards-button flex items-center gap-2"
              >
                Start submitting <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Your Submissions section */}
          {submittedReviews.length > 0 && (
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                Your Submissions
                <span className="ml-2 inline-flex animate-float">
                  <Award className="h-5 w-5 text-brand-purple" />
                </span>
              </h3>
              <div className="space-y-3">
                {submittedReviews.map((review) => {
                  const isReview = review.type === 'review';
                  const logosObj = isReview ? PLATFORM_LOGOS : SOCIAL_LOGOS;
                  
                  return (
                    <div 
                      key={review.id} 
                      className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex items-center justify-between animate-fade-in"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-3 flex items-center justify-center">
                          <img 
                            src={logosObj[review.platform as keyof typeof logosObj]} 
                            alt={`${review.platform} logo`} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div>
                          <div className="font-medium">
                            {isReview ? `${review.platform.charAt(0).toUpperCase() + review.platform.slice(1)} Review` : `${review.platform.charAt(0).toUpperCase() + review.platform.slice(1)} Share`}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {review.link}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Pending verification
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Review Dialog */}
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

      {/* Social Share Dialog */}
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
    </div>
  );
};

export default Index;
