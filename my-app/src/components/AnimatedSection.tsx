'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-in-up';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${className} ${
        isVisible 
          ? `opacity-100 ${animation}` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;