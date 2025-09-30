// src/app/components/HeroVideo.tsx
'use client';
import { useState } from 'react';

type HeroVideoProps = {
  videoUrl: string;
  thumbnailUrl?: string;
  title: string;
  description?: string;
};

export default function HeroVideo({ 
  videoUrl, 
  thumbnailUrl = '/video-thumbnail.jpg', 
  title,
  description = "Watch my portfolio showcase" 
}: HeroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayVideo = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <div className="relative group w-full max-w-2xl mx-auto">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl shadow-cyan-500/20">
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            <div className="relative w-full h-full">
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="group/play relative bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-8 transition-all duration-500 hover:scale-110 border border-white/20 hover:border-white/30"
                >
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full bg-white/10 animate-ping animation-delay-300"></div>
                  
                  {/* Play Icon */}
                  <svg 
                    className="w-12 h-12 text-white ml-1 relative z-10 group-hover/play:scale-110 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading video...</p>
                </div>
              </div>
            )}
            
            {/* Actual Video */}
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allowFullScreen
              title={title}
              onLoad={() => setIsLoading(false)}
            ></iframe>
            
            {/* Close Button */}
            <button
              onClick={() => {
                setIsPlaying(false);
                setIsLoading(false);
              }}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-30 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/80 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/80 rounded-full animate-bounce animation-delay-700"></div>
    </div>
  );
}