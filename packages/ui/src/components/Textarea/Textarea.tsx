import * as React from 'react';
import { cn } from '@coe/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'flex min-h-[100px] w-full rounded-[3px] border border-[#e2e0dc] bg-white px-3 py-2',
          'font-body text-[16px] text-[#0a0a0a] placeholder:text-[#888888]',
          'transition-colors duration-150 resize-y',
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

Textarea.displayName = 'Textarea';
