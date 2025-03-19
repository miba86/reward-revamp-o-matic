
import React from 'react';
import { Award } from 'lucide-react';

// Platform logos
const PLATFORM_LOGOS: Record<string, string> = {
  g2: "https://cdn.worldvectorlogo.com/logos/g2crowd-1.svg",
  trustpilot: "https://cdn.worldvectorlogo.com/logos/trustpilot.svg",
  capterra: "https://cdn.worldvectorlogo.com/logos/capterra-1.svg",
  google: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
  producthunt: "https://cdn.worldvectorlogo.com/logos/product-hunt.svg", 
  trustradius: "https://media.trustradius.com/logo/product/956a6b2b-3b30-491c-9fb7-d49e8c0bf0f2.png"
};

// Social platform logos
const SOCIAL_LOGOS: Record<string, string> = {
  twitter: "https://cdn.worldvectorlogo.com/logos/twitter-6.svg",
  instagram: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  tiktok: "https://cdn.worldvectorlogo.com/logos/tiktok-1.svg",
  facebook: "https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
};

// Blog platform logos
const BLOG_LOGOS: Record<string, string> = {
  medium: "https://cdn.worldvectorlogo.com/logos/medium-m-2.svg",
  devto: "https://cdn.worldvectorlogo.com/logos/devto.svg",
  hashnode: "https://cdn.worldvectorlogo.com/logos/hashnode.svg",
  wordpress: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"
};

// Q&A platform logos
const QA_LOGOS: Record<string, string> = {
  quora: "https://cdn.worldvectorlogo.com/logos/quora-1.svg",
  reddit: "https://cdn.worldvectorlogo.com/logos/reddit-4.svg",
  stackoverflow: "https://cdn.worldvectorlogo.com/logos/stackoverflow.svg"
};

interface Review {
  id: number;
  platform: string;
  link: string;
  type: string;
  date: string;
  status: string;
}

interface SubmissionsListProps {
  submissions: Review[];
}

const SubmissionsList: React.FC<SubmissionsListProps> = ({ submissions }) => {
  if (submissions.length === 0) return null;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft mb-8">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        Your Submissions
        <span className="ml-2 inline-flex animate-float">
          <Award className="h-5 w-5 text-brand-purple" />
        </span>
      </h3>
      <div className="space-y-3">
        {submissions.map((review) => {
          const isReview = review.type === 'review';
          const isVideo = review.type === 'video';
          const isBlog = review.type === 'blog';
          const isQA = review.type === 'qa';
          const isSocial = review.type === 'social';
          
          let logoSource: Record<string, string>;
          if (isReview) {
            logoSource = PLATFORM_LOGOS;
          } else if (isSocial) {
            logoSource = SOCIAL_LOGOS;
          } else if (isBlog) {
            logoSource = BLOG_LOGOS;
          } else if (isQA) {
            logoSource = QA_LOGOS;
          } else {
            logoSource = PLATFORM_LOGOS; // Default fallback for video or any other type
          }
          
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
                    src={logoSource[review.platform]} 
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
  );
};

export default SubmissionsList;
