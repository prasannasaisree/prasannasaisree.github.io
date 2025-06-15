
import React from 'react';
import { MessageCircle } from 'lucide-react';

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
      className={`inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors ${className}`}
      title="Share on WhatsApp"
    >
      <MessageCircle size={16} />
      <span>Share</span>
    </button>
  );
};

export default WhatsAppShare;
