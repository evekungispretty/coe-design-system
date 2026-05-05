import * as React from 'react';
import { cn } from '@coe/utils';

export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('animate-pulse rounded-[3px] bg-[#e2e0dc]', className)}
    aria-hidden="true"
    {...props}
  />
);
Skeleton.displayName = 'Skeleton';
