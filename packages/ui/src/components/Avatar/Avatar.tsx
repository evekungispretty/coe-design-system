import * as React from 'react';
import { cn } from '@coe/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-8 w-8 text-[12px]',
  md: 'h-10 w-10 text-[14px]',
  lg: 'h-14 w-14 text-[18px]',
} as const;

export const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  alt = '',
  initials,
  size = 'md',
  ...props
}) => {
  const [imgError, setImgError] = React.useState(false);
  const showFallback = !src || imgError;

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 overflow-hidden rounded-full',
        sizeMap[size],
        className
      )}
      {...props}
    >
      {!showFallback && (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
      {showFallback && (
        // Orange fallback mark — matches COE logo-mark style
        <span
          className="flex h-full w-full items-center justify-center bg-[#cc4927] font-heading font-bold text-white"
          aria-hidden={!initials}
        >
          {initials ? initials.slice(0, 2).toUpperCase() : 'COE'}
        </span>
      )}
    </span>
  );
};
Avatar.displayName = 'Avatar';
