'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

interface ProjectSliderProps {
  projects: Project[];
  autoPlayInterval?: number;
  className?: string;
}

export default function ProjectSlider({ 
  projects, 
  autoPlayInterval = 5000,
  className = ''
}: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused && !isHovered && projects.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, autoPlayInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, isHovered, projects.length, autoPlayInterval]);

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main slider container */}
      <div className="relative overflow-hidden rounded-xl mx-4 md:mx-0">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 px-2 md:px-4"
            >
              <div className="max-w-md mx-auto">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  icon={project.icon}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  gradient={project.gradient}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {projects.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group hover:scale-110 -translate-x-2 md:translate-x-0"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group hover:scale-110 translate-x-2 md:translate-x-0"
            aria-label="Next project"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {projects.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-blue-600 dark:bg-blue-400'
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play indicator */}
      {!isPaused && !isHovered && projects.length > 1 && (
        <div className="absolute top-4 right-4 z-10">
          <div className="w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
}