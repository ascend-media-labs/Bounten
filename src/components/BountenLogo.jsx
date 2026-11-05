import React from 'react';
import { Link } from 'react-router-dom';
import bountenLogoImg from '../assets/logo/logo.png';

export default function BountenLogo({ className = "h-8 sm:h-10 md:h-11 w-auto", link = true }) {
  const content = (
    <div className="flex items-center select-none">
      {/* Exact original BOUNTEN logo image with preserved aspect ratio */}
      <img
        src={bountenLogoImg}
        alt="BOUNTEN - Advanced Water Softener & Water Treatment"
        className={`${className} object-contain max-w-full transition-transform duration-200 hover:scale-[1.02]`}
        style={{ aspectRatio: "492 / 103" }}
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

