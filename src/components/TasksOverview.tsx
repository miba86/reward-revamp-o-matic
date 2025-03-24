
import React from 'react';
import { Share2, Sparkles, Book, Youtube, HelpCircle } from 'lucide-react';
import { Badge } from './ui/badge';

interface TaskItem {
  title: string;
  credits: number;
  icon: React.ReactNode;
  color: string;
}

const TasksOverview = () => {
  const tasks: TaskItem[] = [
    {
      title: 'Social Share',
      credits: 3,
      icon: <Share2 className="h-4 w-4" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Review',
      credits: 5,
      icon: <Sparkles className="h-4 w-4" />,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      title: 'Blog Post',
      credits: 8,
      icon: <Book className="h-4 w-4" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Video Tutorial',
      credits: 10,
      icon: <Youtube className="h-4 w-4" />,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Q&A Answer',
      credits: 4,
      icon: <HelpCircle className="h-4 w-4" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100 shadow-sm">
      <h3 className="text-sm font-medium mb-3">Available Tasks - Quick Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className={`${task.color} rounded-lg p-3 flex flex-col items-center justify-center text-center transition-transform hover:scale-105`}
          >
            <div className="flex items-center justify-center mb-1">
              {task.icon}
            </div>
            <div className="text-xs font-medium">{task.title}</div>
            <Badge variant="outline" className="mt-1 bg-white text-xs px-2 py-0">
              {task.credits} credits
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksOverview;
