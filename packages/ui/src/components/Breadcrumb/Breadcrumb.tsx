import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@coe/utils';

export const Breadcrumb: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <nav aria-label="breadcrumb" className={cn('flex', className)} {...props} />
);

export const BreadcrumbList: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({
  className,
  ...props
}) => (
  <ol
    className={cn(
      'flex flex-wrap items-center gap-1.5 font-body text-[13px] text-[#535353]',
      className
    )}
    {...props}
  />
);

export const BreadcrumbItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />;

export const BreadcrumbLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => (
  <a
    className={cn('text-[#cc4927] underline-offset-4 hover:underline transition-colors', className)}
    {...props}
  />
);

export const BreadcrumbPage: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-medium text-[#1c2f3d]', className)}
    {...props}
  />
);

export const BreadcrumbSeparator: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => (
  <li role="presentation" aria-hidden="true" className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)} {...props}>
    <ChevronRight />
  </li>
);
