
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';
import { Check, ArrowRight } from 'lucide-react';

// Blog platform logos
const BLOG_LOGOS: Record<string, string> = {
  personal: "/lovable-uploads/1f3829e8-16a0-4e16-b619-f713e09872be.png",
  medium: "https://cdn.worldvectorlogo.com/logos/medium-m-2.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  devto: "https://cdn.worldvectorlogo.com/logos/devto.svg",
  hashnode: "https://cdn.worldvectorlogo.com/logos/hashnode.svg",
  wordpress: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg"
};

interface BlogSectionProps {
  openDialog: () => void;
  icon: React.ReactNode;
}

const BlogSection: React.FC<BlogSectionProps> = ({ openDialog, icon }) => {
  return (
    <RewardSection 
      number={3}
      title="Write a Blog Post or Medium Article About Zebracat"
      icon={icon}
      creditAmount={8}
      description="Share your experience using Zebracat in a blog post or article. Tell your readers how it's improved your workflow or helped solve specific problems."
      proTip="Add screenshots, use cases, and step-by-step guides for better results. Mention Zebracat early in your article and include a link using natural wording (e.g., I used this AI video tool to create my latest project)."
      tipBackgroundColor="bg-green-50"
      tipTextColor="text-green-800"
      tipBorderColor="border-green-100"
      onSubmitClick={openDialog}
    >
      <div className="space-y-6">
        {/* Step 1: Write the blog post */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-green-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-xs font-medium">1</div>
            <h3 className="font-medium">Write your blog post on any platform</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RewardCard 
              name="Your Website/Blog" 
              logo={BLOG_LOGOS.personal}
              onClick={() => window.open('https://zebracat.io/blog-contest', '_blank')}
              isLargeLogo={true}
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
        </div>
        
        {/* Connecting arrow */}
        <div className="flex justify-center">
          <ArrowRight className="text-gray-400" />
        </div>
        
        {/* Step 2: Submit proof */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3 text-green-600">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-xs font-medium">2</div>
            <h3 className="font-medium">Submit proof to earn 8 credits</h3>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={openDialog}
              className="rewards-button flex items-center gap-2 py-2 px-4 text-sm"
            >
              Submit your blog post <Check className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </RewardSection>
  );
};

export default BlogSection;
