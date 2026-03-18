import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-evoke-bgLight text-evoke-navy',
        success: 'bg-emerald-50 text-evoke-success',
        warning: 'bg-amber-50 text-amber-700',
        gold: 'bg-amber-50 text-evoke-gold border border-evoke-gold/30',
        navy: 'bg-evoke-navy text-white',
        teal: 'bg-evoke-teal/10 text-evoke-teal',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

/** Small badge/pill component for labels and tags */
export interface EvokeBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const EvokeBadge: React.FC<EvokeBadgeProps> = ({ className, variant, ...props }) => (
  <span className={cn(badgeVariants({ variant, className }))} {...props} />
);
