import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@coe/utils';

const alertVariants = cva(
  'relative w-full rounded-none border-l-[3px] p-4 font-body text-[13px] leading-[1.65]',
  {
    variants: {
      variant: {
        info:    'bg-[#edf4ff] border-[#194588] text-[#1a3060]',
        warning: 'bg-[#fff8f0] border-[#cc4927] text-[#7a2c0e]',
        success: 'bg-green-50 border-green-600 text-green-900',
        error:   'bg-red-50 border-red-600 text-red-900',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  )
);
Alert.displayName = 'Alert';

export const AlertTitle: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p className={cn('mb-1 font-heading font-bold text-[14px]', className)} {...props} />
);
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p className={cn('text-[13px]', className)} {...props} />;
AlertDescription.displayName = 'AlertDescription';

export { alertVariants };
