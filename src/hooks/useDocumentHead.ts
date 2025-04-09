import { useEffect } from 'react';
import { appConfig } from '../config/appConfig';

/**
 * Custom hook to update document head elements (title, meta tags, favicon)
 */
export const useDocumentHead = (
  options: {
    title?: string;
    description?: string;
    themeColor?: string;
    useFavicon?: boolean;
    canonical?: string;
    image?: string;
    type?: string;
  } = {}
) => {
  const {
    title,
    description,
    themeColor = '#7928CA',
    useFavicon = true,
    canonical,
    image = '/images/seo-default-image.jpg',
    type = 'website'
  } = options;

  useEffect(() => {
    // Update title if provided
    if (title) {
      document.title = `${title} | ${appConfig.name}`;
    }

    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }

    // Update theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeColor);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'theme-color';
      newMeta.content = themeColor;
      document.head.appendChild(newMeta);
    }

    // Set canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link');
        (canonicalLink as HTMLLinkElement).rel = 'canonical';
        (canonicalLink as HTMLLinkElement).href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }

    // Open Graph meta tags for social sharing
    const setOrCreateMeta = (property: string, content: string) => {
      const existingMeta = document.querySelector(`meta[property="${property}"]`);
      if (existingMeta) {
        existingMeta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', property);
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    };

    // Set Open Graph tags
    setOrCreateMeta('og:title', title ? `${title} | ${appConfig.name}` : appConfig.name);
    setOrCreateMeta('og:description', description || appConfig.description);
    setOrCreateMeta('og:type', type);
    setOrCreateMeta('og:image', image);
    setOrCreateMeta('og:site_name', appConfig.name);
    
    // Twitter Card tags
    setOrCreateMeta('twitter:card', 'summary_large_image');
    setOrCreateMeta('twitter:title', title ? `${title} | ${appConfig.name}` : appConfig.name);
    setOrCreateMeta('twitter:description', description || appConfig.description);
    setOrCreateMeta('twitter:image', image);

    // Set favicon programmatically if requested
    if (useFavicon) {
      // Set all favicons to ensure cross-browser compatibility
      const updateFavicon = (selector: string, newHref: string) => {
        const link = document.querySelector(selector) as HTMLLinkElement;
        if (link) link.href = newHref;
      };
      
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const iconSize32 = isDarkMode ? '/icons/favicon-dark-32x32.png' : '/icons/favicon-32x32.png';
      
      updateFavicon('link[rel="icon"][sizes="32x32"]', iconSize32);
      updateFavicon('link[rel="icon"][sizes="16x16"]', '/icons/favicon-16x16.png');
      updateFavicon('link[rel="apple-touch-icon"]', '/icons/apple-touch-icon.png');
      updateFavicon('link[rel="mask-icon"]', '/icons/safari-pinned-tab.svg');
      
      // Listen for changes in color scheme preference
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleColorSchemeChange = (e: MediaQueryListEvent) => {
        updateFavicon('link[rel="icon"][sizes="32x32"]', 
          e.matches ? '/icons/favicon-dark-32x32.png' : '/icons/favicon-32x32.png');
      };
      
      darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);
      
      return () => {
        darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
      };
    }
  }, [title, description, themeColor, useFavicon, canonical, image, type]);
};

export default useDocumentHead; 