import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@coe/utils';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport: React.FC = () => (
  <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[400] flex max-h-screen w-full flex-col-reverse gap-2 p-6 sm:max-w-[420px]" />
);

const toastVariants = cva(
  [
    'group pointer-events-auto relative flex w-full items-start justify-between gap-3',
    'overflow-hidden rounded-[3px] border p-4 shadow-lg',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
    'data-[state=open]:slide-in-from-bottom-full',
  ],
  {
    variants: {
      variant: {
        default:  'border-[#e2e0dc] bg-white text-[#0a0a0a]',
        success:  'border-green-200 bg-green-50 text-green-900',
        warning:  'border-amber-200 bg-amber-50 text-amber-900',
        error:    'border-red-200 bg-red-50 text-red-900',
        navy:     'border-[#194588] bg-[#194588] text-white',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    VariantProps<typeof toastVariants> {}

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
));
Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-[3px] border bg-transparent px-3',
      'font-body text-[13px] transition-colors',
      'hover:bg-[#f8f7f5] focus:outline-none focus:ring-2 focus:ring-[#194588]',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-[2px] p-1 text-[#535353]/50 opacity-0',
      'transition-opacity hover:text-[#0a0a0a]',
      'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#194588]',
      'group-hover:opacity-100',
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn('font-heading text-[14px] font-bold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn('text-[13px] opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;
