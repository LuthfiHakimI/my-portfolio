'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative group">
      {/* Main container with proper sizing */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-cyan-400 transition-all duration-500">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-all duration-500"></div>
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="text-gray-600 text-lg">Loading...</div>
          </div>
        )}
        
        {/* Profile Image */}
        <Image
          src="/Foto.jpg" // pastikan file ada di folder public/
          alt="Luthfi Hakim Profile"
          width={400}
          height={400}
          className={`w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          priority
        />
        
        {/* Overlay effect */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
      </div>

      {/* Floating elements for decoration */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-blue-600/0 group-hover:from-cyan-400/30 group-hover:via-cyan-400/40 group-hover:to-blue-600/30 transition-all duration-500 -z-10 blur-xl"></div>
    </div>
  );
}