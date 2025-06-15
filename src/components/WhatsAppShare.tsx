
import React from 'react';
import { Share2 } from 'lucide-react';

interface WhatsAppShareProps {
  poemTitle: string;
  collectionId: string;
  poemId: string;
  className?: string;
}

const WhatsAppShare: React.FC<WhatsAppShareProps> = ({ 
  poemTitle, 
  collectionId, 
  poemId, 
  className = "" 
}) => {
  const handleWhatsAppShare = () => {
    const currentUrl = window.location.origin;
    const poemUrl = `${currentUrl}/collection/${collectionId}#${poemId}`;
    const shareText = `Check out this beautiful spiritual poem "${poemTitle}" by Prasanna Saisree: ${poemUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppShare}
      className={`inline-flex items-center space-x-1 text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-lg transition-colors border border-green-200 hover:border-green-300 ${className}`}
      title="Share on WhatsApp"
    >
      <Share2 size={16} />
      <span className="text-sm font-medium">Share</span>
    </button>
  );
};

export default WhatsAppShare;
