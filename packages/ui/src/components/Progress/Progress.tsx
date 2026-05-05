import * as React from 'react';
import { cn } from '@coe/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'navy' | 'orange' | 'teal';
}

const variantMap = {
  navy:   'bg-[#194588]',
  orange: 'bg-[#cc4927]',
  teal:   'bg-[#1f7e98]',
} as const;

export const Progress: React.FC<ProgressProps> = ({
  className,
  value = 0,
  max = 100,
  variant = 'navy',
  ...props
}) => {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-[#e2e0dc]', className)}
      {...props}
    >
      <div
        className={cn('h-full transition-all duration-300', variantMap[variant])}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};
Progress.displayName = 'Progress';
