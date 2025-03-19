
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CreditCounter from '../components/CreditCounter';
import RewardCard from '../components/RewardCard';
import SocialShareCard from '../components/SocialShareCard';
import ReviewSubmission from '../components/ReviewSubmission';
import { Check, Award, Sparkles, Share2, Send, Book, Youtube, MessageSquare, HelpCircle } from 'lucide-react';
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

// Blog platform logos
const BLOG_LOGOS = {
  medium: "https://cdn.worldvectorlogo.com/logos/medium-m-2.svg",
  devto: "https://cdn.worldvectorlogo.com/logos/devto.svg",
  hashnode: "https://cdn.worldvectorlogo.com/logos/hashnode.svg",
  wordpress: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"
};

// Q&A platform logos
const QA_LOGOS = {
  quora: "https://cdn.worldvectorlogo.com/logos/quora-1.svg",
  reddit: "https://cdn.worldvectorlogo.com/logos/reddit-4.svg",
  stackoverflow: "https://cdn.worldvectorlogo.com/logos/stackoverflow.svg"
};

const Index = () => {
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([]);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [socialDialogOpen, setSocialDialogOpen] = useState(false);
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [qaDialogOpen, setQaDialogOpen] = useState(false);
  
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
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} submitted successfully!`,
      description: "We'll verify your submission and add credits to your account within 24 hours.",
      className: "bg-green-50 border-green-200",
    });

    // Close the appropriate dialog based on type
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
          
          {/* Option 1: Share videos on social media */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">1</div>
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
          
          {/* Option 2: Leave a review */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">2</div>
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
            
            <p className="text-gray-600 mb-5">
              Your honest feedback helps us improve and helps others discover Zebracat. Leave a review on any platform below to earn credits!
            </p>
            
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
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-sm text-amber-800">
                <strong>Pro tip:</strong> Include specific features you love and how Zebracat has helped your workflow for the most impactful reviews. Screenshots of your experience with the app are highly appreciated!
              </p>
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
          
          {/* Option 3: Write a Blog Post */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">3</div>
              <h2 className="text-xl font-medium flex items-center">
                Write a Blog Post or Medium Article About Zebracat
                <span className="ml-2 inline-flex animate-float">
                  <Book className="h-5 w-5 text-green-500" />
                </span>
              </h2>
            </div>
            
            <div className="mb-6">
              <CreditCounter earningAmount={8} />
            </div>
            
            <p className="text-gray-600 mb-5">
              Share your experience using Zebracat in a blog post or article. Tell your readers how it's improved your workflow or helped solve specific problems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <RewardCard 
                name="Medium" 
                logo={BLOG_LOGOS.medium}
                onClick={() => window.open('https://medium.com/new-story', '_blank')}
              />
              <RewardCard 
                name="Dev.to" 
                logo={BLOG_LOGOS.devto}
                onClick={() => window.open('https://dev.to/new', '_blank')}
              />
              <RewardCard 
                name="Hashnode" 
                logo={BLOG_LOGOS.hashnode}
                onClick={() => window.open('https://hashnode.com/create/story', '_blank')}
              />
              <RewardCard 
                name="WordPress" 
                logo={BLOG_LOGOS.wordpress}
                onClick={() => window.open('https://wordpress.com/post', '_blank')}
              />
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800">
                <strong>Pro tip:</strong> Include screenshots, use cases, and step-by-step guides on how to use Zebracat for best results. Don't forget to include your affiliate link if you have one for extra benefits!
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={() => setBlogDialogOpen(true)}
                className="rewards-button flex items-center gap-2"
              >
                Start submitting <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Option 4: Publishing Video Tutorials */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">4</div>
              <h2 className="text-xl font-medium flex items-center">
                Publishing a YouTube Video or TikTok Tutorial About Zebracat
                <span className="ml-2 inline-flex animate-float">
                  <Youtube className="h-5 w-5 text-red-500" />
                </span>
              </h2>
            </div>
            
            <div className="mb-6">
              <CreditCounter earningAmount={10} />
            </div>
            
            <p className="text-gray-600 mb-5">
              Create a tutorial video showing how to use Zebracat features. Video content is highly engaging and helps new users understand our product's value quickly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="platform-card group cursor-pointer" 
                onClick={() => window.open('https://www.youtube.com/upload', '_blank')}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-red-500 transition-transform group-hover:scale-110" />
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium mr-1">YouTube Tutorial</span>
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-brand-purple" />
                </div>
              </div>
              <div 
                className="platform-card group cursor-pointer" 
                onClick={() => window.open('https://www.tiktok.com/upload', '_blank')}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img 
                    src={SOCIAL_LOGOS.tiktok} 
                    alt="TikTok logo" 
                    className="w-12 h-12 object-contain transition-transform group-hover:scale-110" 
                  />
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium mr-1">TikTok Tutorial</span>
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-brand-purple" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm text-red-800">
                <strong>Pro tip:</strong> Keep videos under 5 minutes for better engagement. Focus on solving one specific problem or showcasing one feature in depth rather than trying to cover everything.
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={() => setVideoDialogOpen(true)}
                className="rewards-button flex items-center gap-2"
              >
                Start submitting <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Option 5: Answer Questions */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">5</div>
              <h2 className="text-xl font-medium flex items-center">
                Answer Quora/Reddit Questions About Zebracat
                <span className="ml-2 inline-flex animate-float">
                  <HelpCircle className="h-5 w-5 text-purple-500" />
                </span>
              </h2>
            </div>
            
            <div className="mb-6">
              <CreditCounter earningAmount={4} />
            </div>
            
            <p className="text-gray-600 mb-5">
              Help others by answering questions about Zebracat on popular platforms like Quora and Reddit. Share your expertise and guide new users to success.
            </p>
            
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
                name="Stack Overflow" 
                logo={QA_LOGOS.stackoverflow}
                onClick={() => window.open('https://stackoverflow.com/search?q=zebracat', '_blank')}
              />
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
              <p className="text-sm text-purple-800">
                <strong>Pro tip:</strong> Provide detailed answers with examples from your own experience. Adding screenshots or GIFs demonstrating how to use Zebracat makes your answers much more helpful and increases engagement.
              </p>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={() => setQaDialogOpen(true)}
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
                  const isVideo = review.type === 'video';
                  const isBlog = review.type === 'blog';
                  const isQA = review.type === 'qa';
                  const isSocial = review.type === 'social';
                  
                  let logosObj = PLATFORM_LOGOS;
                  if (isSocial) logosObj = SOCIAL_LOGOS;
                  else if (isBlog) logosObj = BLOG_LOGOS;
                  else if (isQA) logosObj = QA_LOGOS;
                  
                  let typeLabel = '';
                  if (isReview) typeLabel = 'Review';
                  else if (isSocial) typeLabel = 'Share';
                  else if (isBlog) typeLabel = 'Blog post';
                  else if (isVideo) typeLabel = 'Video tutorial';
                  else if (isQA) typeLabel = 'Q&A answer';
                  
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
                            {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)} {typeLabel}
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

      {/* Blog Post Dialog */}
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

      {/* Video Tutorial Dialog */}
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

      {/* Q&A Dialog */}
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

