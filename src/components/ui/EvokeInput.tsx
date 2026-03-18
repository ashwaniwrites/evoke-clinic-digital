import React from 'react';
import { cn } from '@/lib/utils';

/** Form input with label, error state, and optional icon */
export interface EvokeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export const EvokeInput = React.forwardRef<HTMLInputElement, EvokeInputProps>(
  ({ label, error, hint, leftIcon, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="w-full">
        <label htmlFor={inputId} className="block text-sm font-medium text-evoke-textBody mb-1.5">
          {label}
        </label>
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-evoke-textMuted">{leftIcon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full min-h-[44px] rounded-button border bg-white px-4 py-2.5 text-evoke-textBody placeholder:text-evoke-textMuted transition-colors',
              leftIcon && 'pl-10',
              error ? 'border-evoke-error focus:ring-evoke-error' : 'border-evoke-border focus:ring-evoke-teal',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              className
            )}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} role="alert" className="mt-1 text-sm text-evoke-error">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1 text-sm text-evoke-textMuted">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
EvokeInput.displayName = 'EvokeInput';
