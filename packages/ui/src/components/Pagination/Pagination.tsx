import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@coe/utils';

export const Pagination: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <nav role="navigation" aria-label="pagination" className={cn('mx-auto flex w-full justify-center', className)} {...props} />
);

export const PaginationContent: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...props
}) => <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />;

export const PaginationItem: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({
  className,
  ...props
}) => <li className={cn('', className)} {...props} />;

const paginationLinkBase =
  'inline-flex h-9 min-w-[36px] items-center justify-center rounded-[3px] font-body text-[13px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#194588]';

export const PaginationLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { isActive?: boolean }
> = ({ className, isActive, ...props }) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      paginationLinkBase,
      'border px-3',
      isActive
        ? 'border-[#194588] bg-[#194588] text-white'
        : 'border-[#e2e0dc] text-[#535353] hover:bg-[#f8f7f5] hover:text-[#0a0a0a]',
      className
    )}
    {...props}
  />
);

export const PaginationPrevious: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => (
  <a
    aria-label="Go to previous page"
    className={cn(paginationLinkBase, 'gap-1 border border-[#e2e0dc] px-3 text-[#535353] hover:bg-[#f8f7f5]', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Prev</span>
  </a>
);

export const PaginationNext: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  ...props
}) => (
  <a
    aria-label="Go to next page"
    className={cn(paginationLinkBase, 'gap-1 border border-[#e2e0dc] px-3 text-[#535353] hover:bg-[#f8f7f5]', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </a>
);

export const PaginationEllipsis: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center text-[#535353]', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
