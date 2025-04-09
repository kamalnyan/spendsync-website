import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { appConfig } from '../config/appConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: 'website' | 'article';
  image?: string;
  canonical?: string;
  author?: string;
}

/**
 * Generate structured data for different page types
 */
export const generateStructuredData = (
  pageType: 'home' | 'about' | 'blog' | 'article' | 'app' | 'website' = 'website',
  data?: Record<string, any>
) => {
  // Default organization data
  const baseOrgData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': appConfig.name,
    'url': 'https://spendsync.kesug.com',
    'logo': 'https://spendsync.kesug.com/images/logo.png',
    'sameAs': [
      appConfig.social.instagram,
      appConfig.social.linkedin
    ],
    'description': appConfig.description,
    'foundingDate': appConfig.company.founded.toString()
  };

  switch (pageType) {
    case 'home':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'url': 'https://spendsync.kesug.com',
        'name': appConfig.name,
        'description': appConfig.description,
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://spendsync.kesug.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      };

    case 'about':
      return baseOrgData;

    case 'blog':
      return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'url': 'https://spendsync.kesug.com/blog',
        'name': `${appConfig.name} Blog`,
        'description': 'Latest financial tips and advice for managing your money.',
      };

    case 'article':
      if (!data) return null;
      
      return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': data.url
        },
        'headline': data.title,
        'description': data.description,
        'image': data.image,
        'author': {
          '@type': 'Person',
          'name': data.author || appConfig.company.name
        },
        'publisher': {
          '@type': 'Organization',
          'name': appConfig.name,
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://spendsync.kesug.com/images/logo.png'
          }
        },
        'datePublished': data.publishDate,
        'dateModified': data.modifiedDate || data.publishDate
      };

    case 'app':
      return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': appConfig.name,
        'description': appConfig.description,
        'applicationCategory': 'FinanceApplication',
        'operatingSystem': appConfig.platform.requirements.join(', '),
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        }
      };

    default:
      return baseOrgData;
  }
};

/**
 * Set page-specific SEO meta tags programmatically
 */
export const useSEO = ({ 
  title, 
  description, 
  keywords,
  type = 'website',
  image = '/icons/og-image.png',
  canonical,
  author
}: SEOProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = `${title} | ${appConfig.name}`;
    }
    
    // Set or update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        (meta as HTMLMetaElement).name = name;
        document.head.appendChild(meta);
      }
      (meta as HTMLMetaElement).content = content;
    };
    
    const updateOgMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        (meta as HTMLMetaElement).setAttribute('property', property);
        document.head.appendChild(meta);
      }
      (meta as HTMLMetaElement).content = content;
    };
    
    // Set description
    if (description) {
      updateMetaTag('description', description);
      updateOgMetaTag('og:description', description);
      updateMetaTag('twitter:description', description);
    }
    
    // Set keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    // Set canonical URL
    const canonicalUrl = canonical || `https://spendsync.kesug.com${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      (canonicalLink as HTMLLinkElement).rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    (canonicalLink as HTMLLinkElement).href = canonicalUrl;
    
    // Update Open Graph tags
    updateOgMetaTag('og:title', title ? `${title} | ${appConfig.name}` : appConfig.name);
    updateOgMetaTag('og:url', canonicalUrl);
    updateOgMetaTag('og:type', type);
    updateOgMetaTag('og:image', image.startsWith('http') ? image : `https://spendsync.kesug.com${image}`);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', title ? `${title} | ${appConfig.name}` : appConfig.name);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:image', image.startsWith('http') ? image : `https://spendsync.kesug.com${image}`);
    
    // Set author if provided (for articles)
    if (author) {
      updateMetaTag('author', author);
    }
    
    return () => {
      // Cleanup is not necessary as we're updating existing tags
    };
  }, [title, description, keywords, type, image, canonical, location.pathname, author]);
};

export default useSEO; 