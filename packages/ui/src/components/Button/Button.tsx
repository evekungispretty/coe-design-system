import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@coe/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-body font-normal leading-[1.4] transition-all duration-150',
    'border-[2px] rounded-[3px]',
    'outline-none focus-visible:ring-2 focus-visible:ring-[#194588] focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        // Default: outlined white on dark backgrounds
        default:
          'border-white bg-transparent text-white hover:bg-white/20',
        // CTA on light backgrounds — orange filled
        'orange-filled':
          'border-[#cc4927] bg-[#cc4927] text-white hover:bg-[#b83d20] hover:border-[#b83d20]',
        // Secondary on light backgrounds — navy outlined
        'navy-outlined':
          'border-[#194588] bg-transparent text-[#194588] hover:bg-[#194588]/8',
        // Teal filled
        'teal-filled':
          'border-[#1f7e98] bg-[#1f7e98] text-white hover:bg-[#186a80] hover:border-[#186a80]',
        // Minimal — no border, text only
        ghost:
          'border-transparent bg-transparent text-[#194588] hover:bg-[#194588]/8',
        // Destructive — use sparingly
        destructive:
          'border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700',
        // Text link style
        link:
          'border-transparent bg-transparent text-[#cc4927] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'text-[14px] px-[18px] py-[7px]',
        md: 'text-[20px] px-[28px] py-[10px]',
        lg: 'text-[22px] px-[36px] py-[14px]',
      },
    },
    defaultVariants: {
      variant: 'orange-filled',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
