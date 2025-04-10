import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'default' | 'circle' | 'card' | 'text';
  height?: string;
  width?: string;
}

export function Skeleton({
  className,
  variant = 'default',
  height,
  width,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse relative overflow-hidden",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        {
          "h-4 w-full rounded-md bg-gray-700/20": variant === 'default',
          "rounded-full bg-gray-700/20": variant === 'circle',
          "rounded-xl bg-gray-700/20": variant === 'card',
          "h-4 w-3/4 rounded-md bg-gray-700/20": variant === 'text',
        },
        className
      )}
      style={{
        height: height && height,
        width: width && width,
      }}
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="space-y-3">
      <Skeleton variant="card" height="200px" />
      <div className="space-y-1">
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  );
}

export function SkeletonFeature() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <Skeleton variant="text" width="40%" height="2rem" />
        <div className="space-y-2">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="90%" />
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-2">
            <Skeleton variant="circle" width="8px" height="8px" />
            <Skeleton variant="text" width="60%" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton variant="circle" width="8px" height="8px" />
            <Skeleton variant="text" width="70%" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton variant="circle" width="8px" height="8px" />
            <Skeleton variant="text" width="50%" />
          </div>
        </div>
      </div>
      <Skeleton variant="card" height="280px" />
    </div>
  );
}

export function SkeletonHeader() {
  return (
    <div className="py-16 space-y-6 text-center">
      <Skeleton variant="text" width="60%" height="3rem" className="mx-auto" />
      <Skeleton variant="text" width="80%" height="1.5rem" className="mx-auto" />
      <Skeleton variant="text" width="40%" height="1.5rem" className="mx-auto" />
    </div>
  );
} 