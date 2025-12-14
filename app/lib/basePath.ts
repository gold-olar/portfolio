/**
 * Get the base path for the application
 * In production, this returns '/portfolio' for GitHub Pages
 * In development, this returns an empty string
 */
export const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

/**
 * Helper function to get the full path for public assets
 * This ensures assets are correctly prefixed with the basePath in production
 */
export function getAssetPath(path: string): string {
  // Validate input
  if (typeof path !== 'string') {
    throw new TypeError('getAssetPath expects a string argument');
  }
  
  if (!path) {
    throw new Error('getAssetPath requires a non-empty path');
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If basePath is empty (development), return normalized path
  if (!basePath) {
    return normalizedPath;
  }
  
  // Check if path already includes basePath (with proper boundary checking)
  if (normalizedPath === basePath || normalizedPath.startsWith(basePath + '/')) {
    return normalizedPath;
  }
  
  return `${basePath}${normalizedPath}`;
}
