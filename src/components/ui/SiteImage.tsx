'use client';

import Image from 'next/image';
import { useState } from 'react';

type SiteImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  className?: string;
  placeholderType?: 'hero' | 'portrait' | 'landscape' | 'gallery';
};

export function SiteImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  objectPosition,
  className = '',
  placeholderType = 'landscape',
}: SiteImageProps) {
  const [error, setError] = useState(!src);

  if (error) {
    return (
      <div 
        className={`w-full h-full bg-muted flex items-center justify-center overflow-hidden ${className}`}
        style={{
          minHeight: fill ? undefined : (height ? `${height}px` : '100%'),
          aspectRatio: fill ? undefined : (placeholderType === 'portrait' ? '3/4' : placeholderType === 'hero' ? '21/9' : '4/3')
        }}
      >
        <div className="w-full h-full opacity-10 flex items-center justify-center" 
             style={{
               backgroundImage: 'repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 0, transparent 50%)',
               backgroundSize: '20px 20px'
             }}
        />
      </div>
    );
  }

  // Default responsive sizes when using fill to prevent massive downloads on mobile
  const responsiveSizes = sizes || (fill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined);

  return (
    <Image
      src={src}
      alt={alt || "Image"}
      fill={fill}
      width={width}
      height={height}
      sizes={responsiveSizes}
      priority={priority}
      className={`object-cover ${className}`}
      style={{ objectPosition }}
      onError={() => setError(true)}
    />
  );
}
