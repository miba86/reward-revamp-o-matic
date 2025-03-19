
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CreditCounter from '../components/CreditCounter';
import RewardCard from '../components/RewardCard';
import ReviewSubmission from '../components/ReviewSubmission';
import { Check, Award, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Platform logos
const PLATFORM_LOGOS = {
  g2: "https://cdn.worldvectorlogo.com/logos/g2crowd-1.svg",
  trustpilot: "https://cdn.worldvectorlogo.com/logos/trustpilot.svg",
  capterra: "https://cdn.worldvectorlogo.com/logos/capterra-1.svg",
  google: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
  producthunt: "https://cdn.worldvectorlogo.com/logos/product-hunt.svg", 
  trustradius: "https://media.trustradius.com/logo/product/956a6b2b-3b30-491c-9fb7-d49e8c0bf0f2.png"
};

const Index = () => {
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([]);
  
  const handleReviewSubmit = (formData: FormData) => {
    const review = {
      id: Date.now(),
      platform: formData.get('platform') as string,
      link: formData.get('link') as string,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    setSubmittedReviews([...submittedReviews, review]);
    
    toast({
      title: "Review submitted successfully!",
      description: "We'll verify your submission and add credits to your account within 24 hours.",
      className: "bg-green-50 border-green-200",
    });
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
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
            <div className="mb-4 flex items-center">
              <div className="step-number">2</div>
              <h2 className="text-xl font-medium flex items-center">
                Submit your reviews and posts
                <span className="ml-2 inline-flex animate-float">
                  <Award className="h-5 w-5 text-brand-purple" />
                </span>
              </h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Upload screenshots or provide links to your posts here. We'll verify and add the rewards to your account. Verification typically takes up to 24 hours, and we'll notify you via email once it's complete.
            </p>
            
            <ReviewSubmission
              reviewNumber={1}
              onSubmit={handleReviewSubmit}
            />
            
            {submittedReviews.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Your Submissions</h3>
                <div className="space-y-3">
                  {submittedReviews.map((review) => (
                    <div 
                      key={review.id} 
                      className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex items-center justify-between animate-fade-in"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 mr-3 flex items-center justify-center">
                          <img 
                            src={PLATFORM_LOGOS[review.platform as keyof typeof PLATFORM_LOGOS]} 
                            alt={`${review.platform} logo`} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <div>
                          <div className="font-medium">{review.platform.charAt(0).toUpperCase() + review.platform.slice(1)} Review</div>
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
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
