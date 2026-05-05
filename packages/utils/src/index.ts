import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** COE-branded focus ring — navy outline offset. */
export function focusRing(): string {
  return 'outline-none focus-visible:ring-2 focus-visible:ring-[#194588] focus-visible:ring-offset-2';
}

/** Format a Date or ISO string to a human-readable date. */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(d);
}

/** Truncate a string to `maxLength` characters, appending `suffix`. */
export function truncate(str: string, maxLength: number, suffix = '…'): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/** Generate a short random ID suitable for DOM attributes. */
export function generateId(prefix = 'coe'): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
