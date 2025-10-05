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
        <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
  
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent transition-all duration-500 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
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