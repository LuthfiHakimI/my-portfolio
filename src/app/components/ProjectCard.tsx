  // src/app/components/ProjectCard.tsx
  'use client';
  import { useState } from 'react';

  type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image?: string;
    technologies?: string[];
    github?: string;
    demo?: string;
    detailedDescription?: string;
    features?: string[];
    challenges?: string[];
    results?: string[];
    images?: string[];
    video?: string;
    timeline?: string;
    onViewDetails?: () => void;
  };

  export default function ProjectCard({ 
    title, 
    description, 
    link, 
    image,
    technologies = ['React', 'Next.js', 'TypeScript'],
    github,
    demo,
    onViewDetails
  }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div 
        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gray-900">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
              <div className="text-gray-600">Loading...</div>
            </div>
          )}
          
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-all duration-500 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
          
          {/* Hover overlay with buttons */}
          <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {/* View Details Button */}
            {onViewDetails && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails();
                }}
                className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500 hover:to-pink-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            )}
            
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600/80 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-cyan-300 rounded-full border border-gray-600/50 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end items-center pt-2">
            {/* View Details Button */}
            {onViewDetails && (
              <button
                onClick={onViewDetails}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-all duration-300 group-hover:translate-x-1"
              >
                View Details
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl"></div>
      </div>
    );
  }