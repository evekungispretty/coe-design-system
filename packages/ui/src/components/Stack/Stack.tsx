import * as React from 'react';
import { cn } from '@coe/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
}

const gapMap = {
  1: 'gap-1', 2: 'gap-2', 3: 'gap-3', 4: 'gap-4',
  5: 'gap-5', 6: 'gap-6', 7: 'gap-7', 8: 'gap-8',
} as const;

const alignMap = {
  start: 'items-start', center: 'items-center',
  end: 'items-end', stretch: 'items-stretch',
} as const;

const justifyMap = {
  start: 'justify-start', center: 'justify-center', end: 'justify-end',
  between: 'justify-between', around: 'justify-around',
} as const;

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = 'column', gap = 4, align = 'stretch', justify = 'start', wrap, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        gapMap[gap],
        alignMap[align],
        justifyMap[justify],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    />
  )
);
Stack.displayName = 'Stack';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, fluid, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mx-auto w-full px-6',
        !fluid && 'max-w-[1600px]',
        className
      )}
      {...props}
    />
  )
);
Container.displayName = 'Container';

export const Grid: React.FC<React.HTMLAttributes<HTMLDivElement> & {
  cols?: number;
  gap?: 1 | 2 | 3 | 4 | 5 | 6;
}> = ({ className, cols = 12, gap = 4, ...props }) => (
  <div
    className={cn(
      'grid',
      `grid-cols-${cols}`,
      gapMap[gap],
      className
    )}
    {...props}
  />
);
Grid.displayName = 'Grid';

export const Divider: React.FC<React.HTMLAttributes<HTMLHRElement> & {
  orientation?: 'horizontal' | 'vertical';
}> = ({ className, orientation = 'horizontal', ...props }) => (
  <hr
    className={cn(
      'border-[#e2e0dc]',
      orientation === 'vertical' ? 'border-l h-full w-px' : 'border-t w-full',
      className
    )}
    aria-orientation={orientation}
    {...props}
  />
);
Divider.displayName = 'Divider';
