
import React, { useState } from 'react';
import { Upload, Check } from 'lucide-react';

interface ReviewSubmissionProps {
  type: 'review' | 'social';
  onSubmit: (data: FormData) => void;
}

const ReviewSubmission: React.FC<ReviewSubmissionProps> = ({ type, onSubmit }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const platforms = type === 'review' 
    ? [
        { value: 'g2', label: 'G2 Crowd' },
        { value: 'trustpilot', label: 'Trustpilot' },
        { value: 'capterra', label: 'Capterra' },
        { value: 'google', label: 'Google' },
        { value: 'producthunt', label: 'Product Hunt' },
        { value: 'trustradius', label: 'Trust Radius' }
      ]
    : [
        { value: 'twitter', label: 'Twitter' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'tiktok', label: 'TikTok' },
        { value: 'facebook', label: 'Facebook' }
      ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlatform) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('platform', selectedPlatform);
    formData.append('link', link);
    formData.append('type', type);
    if (file) {
      formData.append('screenshot', file);
    }

    // Simulate submission
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      // Reset form
      setSelectedPlatform('');
      setLink('');
      setFile(null);
    }, 1500);
  };

  const linkPlaceholder = type === 'review' 
    ? 'https://example.com/your-review' 
    : 'https://example.com/your-social-post';

  const linkLabel = type === 'review' ? 'Review Link' : 'Social Post Link';
  const submitButtonText = type === 'review' 
    ? 'Submit Review for Verification'
    : 'Submit Social Share for Verification';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
          required
        >
          <option value="" disabled>Select {type === 'review' ? 'Website' : 'Social Platform'}</option>
          {platforms.map(platform => (
            <option key={platform.value} value={platform.value}>{platform.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{linkLabel}</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder={linkPlaceholder}
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Screenshot</label>
        <div className="relative">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {file ? (
                  <>
                    <Check className="w-8 h-8 mb-2 text-green-500" />
                    <p className="text-sm text-gray-500">{file.name}</p>
                  </>
                ) : (
                  <>
                    <Upload className="w-8 h-8 mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Click to upload screenshot</p>
                    <p className="text-xs text-gray-400 mt-1">(PNG, JPG, WEBP up to 5MB)</p>
                  </>
                )}
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !selectedPlatform}
        className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all ${
          isSubmitting || !selectedPlatform
            ? 'bg-gray-300 cursor-not-allowed'
            : 'rewards-button'
        }`}
      >
        {isSubmitting ? 'Submitting...' : submitButtonText}
      </button>
    </form>
  );
};

export default ReviewSubmission;
