import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@coe/utils';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-8 w-8' } as const;

export const Spinner: React.FC<SpinnerProps> = ({ className, size = 'md', ...props }) => (
  <span role="status" aria-label="Loading" className={cn('inline-flex', className)} {...props}>
    <Loader2 className={cn('animate-spin text-[#194588]', sizeMap[size])} aria-hidden="true" />
  </span>
);
Spinner.displayName = 'Spinner';
