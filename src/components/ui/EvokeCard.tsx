import React from 'react';
import { cn } from '@/lib/utils';

/** Versatile card component with optional hover effects */
export interface EvokeCardProps extends React.HTMLAttributes<HTMLElement> {
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
}

export const EvokeCard: React.FC<EvokeCardProps> = ({
  hover = false,
  as: Tag = 'div',
  className,
  children,
  ...props
}) => (
  <Tag
    className={cn(
      'bg-white rounded-card border border-evoke-border shadow-card overflow-hidden',
      hover && 'transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover hover:border-evoke-teal cursor-pointer',
      className
    )}
    {...props}
  >
    {children}
  </Tag>
);
