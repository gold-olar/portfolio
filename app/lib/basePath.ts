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
  // If the path already starts with the basePath, return it as-is
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}
