import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 active:scale-95 focus-visible:ring-2 focus-visible:ring-evoke-teal focus-visible:ring-offset-2 outline-none disabled:opacity-50 disabled:pointer-events-none min-h-[44px]',
  {
    variants: {
      variant: {
        primary: 'bg-evoke-cta text-white hover:brightness-110 rounded-button',
        secondary: 'border-2 border-evoke-teal text-evoke-teal hover:bg-evoke-teal hover:text-white rounded-button',
        ghost: 'border-2 border-white text-white hover:bg-white hover:text-evoke-navy rounded-button',
        danger: 'bg-evoke-error text-white hover:brightness-110 rounded-button',
        link: 'text-evoke-teal underline-offset-4 hover:underline p-0 min-h-0',
      },
      size: {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4',
        full: 'text-base px-6 py-3 w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

/** Primary button component with multiple variants and loading state */
export interface EvokeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const EvokeButton = React.forwardRef<HTMLButtonElement, EvokeButtonProps>(
  ({ className, variant, size, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : leftIcon}
        <span>{children}{loading ? '…' : ''}</span>
        {rightIcon}
      </button>
    );
  }
);
EvokeButton.displayName = 'EvokeButton';

export { buttonVariants };
