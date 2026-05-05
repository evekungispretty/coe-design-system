import * as React from 'react';
import { cn } from '@coe/utils';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'block font-body text-[14px] font-medium text-[#0a0a0a] leading-none',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
);
Label.displayName = 'Label';

export const HelperText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p className={cn('mt-1 text-[12px] text-[#535353] font-body', className)} {...props} />
);
HelperText.displayName = 'HelperText';

export const ErrorMessage: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p
    className={cn('mt-1 text-[12px] text-red-600 font-body', className)}
    role="alert"
    {...props}
  />
);
ErrorMessage.displayName = 'ErrorMessage';
