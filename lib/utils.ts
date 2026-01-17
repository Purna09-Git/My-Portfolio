import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// This detects if we are on GitHub (production) or your Mac (development)
export const isProd = process.env.NODE_ENV === 'production';

// This adds the prefix ONLY on GitHub
export const getAssetPath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return isProd ? `/My-Portfolio${cleanPath}` : cleanPath;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
