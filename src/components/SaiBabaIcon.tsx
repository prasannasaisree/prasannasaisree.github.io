
import React from 'react';

interface SaiBabaIconProps {
  size?: number;
  className?: string;
}

const SaiBabaIcon: React.FC<SaiBabaIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head circle */}
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      
      {/* Hair/Afro */}
      <path
        d="M8 6c0-2.5 1.5-4 4-4s4 1.5 4 4c1 0 2 1 2 2.5-0.5-1-1.5-1.5-2.5-1.5-0.5-1-1.5-2-3.5-2s-3 1-3.5 2c-1 0-2 0.5-2.5 1.5C6 7 7 6 8 6z"
        fill="currentColor"
      />
      
      {/* Body/Robe */}
      <path
        d="M12 12c-3 0-5 1-6 3v6c0 1 1 2 2 2h8c1 0 2-1 2-2v-6c-1-2-3-3-6-3z"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Arms in blessing pose */}
      <path
        d="M6 15c-1 0-2 1-2 2v2c0 0.5 0.5 1 1 1s1-0.5 1-1v-2c0-1 1-2 2-2"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M18 15c1 0 2 1 2 2v2c0 0.5-0.5 1-1 1s-1-0.5-1-1v-2c0-1-1-2-2-2"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
};

export default SaiBabaIcon;
