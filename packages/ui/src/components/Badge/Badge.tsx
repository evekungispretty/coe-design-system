import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@coe/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-[2px] px-2 py-0.5 text-[11px] font-mono font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:  'bg-[#194588] text-white',
        accent:   'bg-[#cc4927] text-white',
        teal:     'bg-[#1f7e98] text-white',
        surface:  'bg-[#f8f7f5] text-[#535353] border border-[#e2e0dc]',
        gold:     'bg-[#edba75] text-[#1c2f3d]',
        success:  'bg-green-100 text-green-800 border border-green-200',
        warning:  'bg-amber-100 text-amber-800 border border-amber-200',
        error:    'bg-red-100 text-red-700 border border-red-200',
        shell:    'bg-[#1e3347] text-[#6b7d8a] border border-[#1e3347]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props} />
);
Badge.displayName = 'Badge';

export { badgeVariants };
