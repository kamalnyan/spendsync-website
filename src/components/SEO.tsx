import React from 'react';
import { Helmet } from 'react-helmet-async';
import { appConfig } from '../config/appConfig';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = appConfig.description,
  image = '/icons/og-image.png',
  type = 'website',
  article,
  schema,
}) => {
  const location = useLocation();
  const siteUrl = 'https://spendsync.kesug.com'; // Updated with the actual domain
  const url = `${siteUrl}${location.pathname}`;
  const fullTitle = title ? `${title} | ${appConfig.name}` : `${appConfig.name} - Personal Finance Management`;

  // Default organization schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: appConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/icons/icon-512x512.png`,
    sameAs: [
      appConfig.social.instagram,
      appConfig.social.linkedin
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: appConfig.company.email,
      contactType: 'customer service'
    },
    foundingDate: appConfig.company.founded
  };

  // Merge with custom schema if provided
  const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={appConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Article specific meta tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, i) => (
            <meta key={i} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Schema.org structured data */}
      <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
    </Helmet>
  );
};

export default SEO; 