'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className={isIntersecting ? 'services-slide-in' : 'opacity-0'} 
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
