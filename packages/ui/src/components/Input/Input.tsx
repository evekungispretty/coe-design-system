import * as React from 'react';
import { cn } from '@coe/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          'flex w-full rounded-[3px] border border-[#e2e0dc] bg-white px-3 py-2',
          'font-body text-[16px] text-[#0a0a0a] placeholder:text-[#888888]',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-[#194588] focus:ring-offset-1 focus:border-[#194588]',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#f8f7f5]',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        aria-invalid={error}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
