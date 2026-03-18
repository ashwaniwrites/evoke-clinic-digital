import React from 'react';
import { cn } from '@/lib/utils';

/** Skeleton loading placeholder */
export interface EvokeSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EvokeSkeleton: React.FC<EvokeSkeletonProps> = ({ className, ...props }) => (
  <div className={cn('animate-pulse bg-evoke-border rounded', className)} {...props} />
);
