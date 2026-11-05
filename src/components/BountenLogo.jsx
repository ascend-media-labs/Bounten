import React from 'react';
import { Link } from 'react-router-dom';

export default function BountenLogo({ className = "h-10 sm:h-12 w-auto", link = true }) {
  const content = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact BOUNTEN Transparent Logo image with responsive sizing */}
      <img
        src="/logo.png"
        alt="BOUNTEN - Advanced Water Softener & Water Treatment"
        className="h-full w-auto object-contain max-h-14 transition-transform duration-200 hover:scale-[1.02]"
        onError={(e) => {
          // Fallback to vector SVG if PNG fails
          e.target.src = "/logo.svg";
        }}
      />
    </div>
  );

  if (link) {
    return (
      <Link to="/" aria-label="BOUNTEN Home" className="flex items-center focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}

