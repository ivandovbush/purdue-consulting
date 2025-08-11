import React, { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

const BackgroundRemovalProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      if (isProcessing || isComplete) return;
      
      setIsProcessing(true);
      try {
        console.log('Loading logo image...');
        const img = await loadImageFromUrl('/lovable-uploads/2b45257c-2d22-4300-9b36-e13026ec0eb7.png');
        
        console.log('Removing background...');
        const blob = await removeBackground(img);
        
        // Create download link for the processed image
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'logo-no-background.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        setIsComplete(true);
        console.log('Background removal complete!');
      } catch (error) {
        console.error('Error processing logo:', error);
      } finally {
        setIsProcessing(false);
      }
    };

    // Start processing after a short delay
    const timer = setTimeout(processLogo, 1000);
    return () => clearTimeout(timer);
  }, [isProcessing, isComplete]);

  if (isComplete) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
        ✅ Logo background removed! Check your downloads.
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        🔄 Processing logo... This may take a moment.
      </div>
    );
  }

  return null;
};

export default BackgroundRemovalProcessor;