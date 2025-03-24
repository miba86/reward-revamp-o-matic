
import React from 'react';
import { Share2, Sparkles, Book, Youtube, HelpCircle, Award } from 'lucide-react';
import { Badge } from './ui/badge';

interface TaskItem {
  title: string;
  credits: number;
  icon: React.ReactNode;
  color: string;
  sectionId: string;
}

const TasksOverview = () => {
  const tasks: TaskItem[] = [
    {
      title: 'Social Share',
      credits: 3,
      icon: <Share2 className="h-4 w-4" />,
      color: 'bg-blue-100 text-blue-600',
      sectionId: 'social-share-section'
    },
    {
      title: 'Review',
      credits: 5,
      icon: <Sparkles className="h-4 w-4" />,
      color: 'bg-amber-100 text-amber-600',
      sectionId: 'review-section'
    },
    {
      title: 'Blog Post',
      credits: 8,
      icon: <Book className="h-4 w-4" />,
      color: 'bg-green-100 text-green-600',
      sectionId: 'blog-section'
    },
    {
      title: 'Video Tutorial',
      credits: 10,
      icon: <Youtube className="h-4 w-4" />,
      color: 'bg-red-100 text-red-600',
      sectionId: 'video-section'
    },
    {
      title: 'Q&A Answer',
      credits: 4,
      icon: <HelpCircle className="h-4 w-4" />,
      color: 'bg-purple-100 text-purple-600',
      sectionId: 'qa-section'
    }
  ];

  // Calculate total possible credits
  const totalCredits = tasks.reduce((sum, task) => sum + task.credits, 0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100 shadow-sm relative overflow-hidden">
      {/* Background pattern for gamified look */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 className="text-sm font-medium">Available Tasks - Quick Overview</h3>
        <div className="flex items-center mt-2 md:mt-0 bg-indigo-50 rounded-full px-3 py-1 text-indigo-700">
          <Award className="h-4 w-4 mr-1 text-indigo-500" />
          <span className="text-xs font-semibold">Total Available: {totalCredits} Credits</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className={`${task.color} rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer border border-transparent hover:border-opacity-50 hover:border-current`}
            onClick={() => scrollToSection(task.sectionId)}
            role="button"
            aria-label={`View ${task.title} task details`}
          >
            <div className="flex items-center justify-center mb-1">
              {task.icon}
            </div>
            <div className="text-xs font-medium">{task.title}</div>
            <Badge variant="outline" className="mt-1 bg-white/80 backdrop-blur-sm text-xs px-2 py-0 animate-pulse-soft">
              {task.credits} credits per {task.title.toLowerCase().includes('q&a') ? 'answer' : 
                task.title.toLowerCase().includes('social') ? 'share' : 
                task.title.toLowerCase().includes('video') ? 'tutorial' : 
                task.title.toLowerCase().replace('blog ', '').toLowerCase()}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksOverview;
