import classNames from '../utils/classnames';

export const BUTTON = classNames(
  'rounded text-xs px-2 py-1',
  'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
  'focus-visible:ring-gray-50',
  'dark:focus-visible:ring-gray-900',
  // Background
  'bg-gray-900 hover:bg-gray-700 active:bg-gray-800',
  'dark:bg-gray-50 dark:hover:bg-gray-200 dark:active:bg-gray-100',
  // Foreground
  'text-gray-50 hover:text-gray-200 active:text-gray-100',
  'dark:text-gray-900 dark:hover:text-gray-700 dark:active:text-gray-800',
);

export const DISABLED_BUTTON = classNames(
  'rounded text-xs px-2 py-1',
  'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
  'focus-visible:ring-gray-50',
  'dark:focus-visible:ring-gray-900',
  // Background
  'bg-gray-900',
  'dark:bg-gray-50',
  // Foreground
  'text-gray-300',
  'dark:text-gray-600',
);

export const SMALL_BUTTON = classNames(
  'rounded-lg text-xs px-1 py-0.5',
  'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
  'focus-visible:ring-gray-50',
  'dark:focus-visible:ring-gray-900',
  // Background
  'bg-gray-900 hover:bg-gray-700 active:bg-gray-800',
  'dark:bg-gray-50 dark:hover:bg-gray-200 dark:active:bg-gray-100',
  // Foreground
  'text-gray-50 hover:text-gray-200 active:text-gray-100',
  'dark:text-gray-900 dark:hover:text-gray-700 dark:active:text-gray-800',
);
