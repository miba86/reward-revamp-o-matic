
import React from 'react';
import { Share2, Sparkles, Book, Youtube, HelpCircle, Award } from 'lucide-react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Badge } from './ui/badge';

// Custom components to replace Tailwind styling
const Flex = styled(Box)({
  display: 'flex',
});

const BadgeStyled = styled(Badge)({
  marginTop: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(4px)',
  fontSize: '0.75rem',
  padding: '0 8px',
  '@keyframes pulse': {
    '0%': { opacity: 0.7 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.7 },
  },
  animation: 'pulse 2s infinite',
});

// Main container styling
const TaskContainer = styled(Paper)({
  padding: '16px',
  marginBottom: '24px',
  borderRadius: '16px',
  border: '1px solid #f1f5f9',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
});

// Background pattern styling
const BackgroundPattern = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: 0.05,
  backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
  backgroundSize: '16px 16px',
  pointerEvents: 'none',
});

// Task item styling
const TaskItem = styled(Box)(({ bgcolor }: { bgcolor?: string }) => ({
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  transition: 'all 0.2s',
  backgroundColor: bgcolor,
  cursor: 'pointer',
  border: '1px solid transparent',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
}));

// Award container styling
const AwardContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#eef2ff',
  borderRadius: '9999px',
  padding: '4px 12px',
  color: '#4f46e5'
});

interface TaskItemType {
  title: string;
  credits: number;
  icon: React.ReactNode;
  color: string;
  bgcolor: string;
  sectionId: string;
}

const TasksOverview = () => {
  const tasks: TaskItemType[] = [
    {
      title: 'Social Share',
      credits: 3,
      icon: <Share2 style={{ height: 16, width: 16 }} />,
      color: '#3b82f6',
      bgcolor: '#dbeafe',
      sectionId: 'social-share-section'
    },
    {
      title: 'Review',
      credits: 5,
      icon: <Sparkles style={{ height: 16, width: 16 }} />,
      color: '#d97706',
      bgcolor: '#fef3c7',
      sectionId: 'review-section'
    },
    {
      title: 'Blog Post',
      credits: 8,
      icon: <Book style={{ height: 16, width: 16 }} />,
      color: '#059669',
      bgcolor: '#d1fae5',
      sectionId: 'blog-section'
    },
    {
      title: 'Video Tutorial',
      credits: 10,
      icon: <Youtube style={{ height: 16, width: 16 }} />,
      color: '#dc2626',
      bgcolor: '#fee2e2',
      sectionId: 'video-section'
    },
    {
      title: 'Q&A Answer',
      credits: 4,
      icon: <HelpCircle style={{ height: 16, width: 16 }} />,
      color: '#7c3aed',
      bgcolor: '#ede9fe',
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
    <TaskContainer>
      {/* Background pattern for gamified look */}
      <BackgroundPattern />
      
      <Flex sx={{ justifyContent: "space-between", alignItems: { xs: 'flex-start', md: 'center' }, mb: 2, flexDirection: { xs: 'column', md: 'row' } }}>
        <Typography variant="body2" fontWeight="medium">Available Tasks - Quick Overview</Typography>
        <AwardContainer sx={{ mt: { xs: 1, md: 0 } }}>
          <Award style={{ height: 16, width: 16, marginRight: 4, color: '#4f46e5' }} />
          <Typography variant="caption" fontWeight="bold">Total Available: {totalCredits} Credits</Typography>
        </AwardContainer>
      </Flex>
      
      <Grid container spacing={1}>
        {tasks.map((task, index) => (
          <Grid item xs={6} md={2.4} key={index}>
            <TaskItem 
              onClick={() => scrollToSection(task.sectionId)}
              role="button"
              aria-label={`View ${task.title} task details`}
              bgcolor={task.bgcolor}
              sx={{ color: task.color }}
            >
              <Flex sx={{ alignItems: "center", justifyContent: "center", mb: 0.5 }}>
                {task.icon}
              </Flex>
              <Typography variant="caption" fontWeight="medium">{task.title}</Typography>
              <BadgeStyled label={`${task.credits} credits /${
                task.title.toLowerCase().includes('q&a') ? 'answer' : 
                task.title.toLowerCase().includes('social') ? 'share' : 
                task.title.toLowerCase().includes('video') ? 'tutorial' : 
                task.title.toLowerCase().includes('blog') ? 'post' : 
                task.title.toLowerCase().replace('blog ', '').toLowerCase()
              }`} variant="outline" sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
            </TaskItem>
          </Grid>
        ))}
      </Grid>
    </TaskContainer>
  );
};

export default TasksOverview;
