
export interface Review {
  id: number;
  platform: string;
  link: string;
  type: 'review' | 'social' | 'blog' | 'video' | 'qa';
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export type RewardType = 'review' | 'social' | 'blog' | 'video' | 'qa';
