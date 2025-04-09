/**
 * Preload a single image
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  const promises = srcs.map(src => preloadImage(src));
  return Promise.all(promises);
};

/**
 * Preload app assets (common images used throughout the app)
 */
export const preloadAppAssets = async (): Promise<void> => {
  const assetUrls = [
    '/icons/favicon-32x32.png',
    '/icons/favicon-16x16.png',
    '/icons/apple-touch-icon.png',
    '/images/logo.png',
    // Add other common images here
  ];
  
  try {
    await preloadImages(assetUrls);
    console.log('App assets preloaded successfully');
  } catch (error) {
    console.warn('Failed to preload some app assets');
  }
};

export default {
  preloadImage,
  preloadImages,
  preloadAppAssets
}; 