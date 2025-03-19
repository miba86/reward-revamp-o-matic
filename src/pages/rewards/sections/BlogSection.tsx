
import React from 'react';
import RewardSection from '../../../components/RewardSection';
import RewardCard from '../../../components/RewardCard';

// Blog platform logos
const BLOG_LOGOS: Record<string, string> = {
  personal: "/lovable-uploads/57f9c5f9-8966-4e65-b8a6-99f11adabcca.png",
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
    </RewardSection>
  );
};

export default BlogSection;
