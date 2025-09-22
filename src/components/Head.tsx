import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
}

export const Head = ({
  title = 'GKP Basketball Club - Ghatkopar',
  description = 'BELIEVE ★ ACHIEVE - Premium Basketball Training & Development in Ghatkopar, Mumbai',
  keywords = 'basketball, training, coaching, ghatkopar, mumbai, sports, youth development',
  ogImage = '/gkp-logo-social.png',
  ogUrl = 'https://gkpbasketball.com',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}: HeadProps) => {
  const fullTitle = title.includes('GKP Basketball') ? title : `${title} | GKP Basketball Club`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF6B35" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="GKP Basketball Club" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/png" href={`/favicon-32x32.png?v=${Date.now()}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png?v=${Date.now()}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?v=${Date.now()}`} />
      <link rel="icon" type="image/png" sizes="96x96" href={`/favicon-96x96.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" href={`/apple-touch-icon.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="57x57" href={`/apple-touch-icon-57x57.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`/apple-touch-icon-72x72.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`/apple-touch-icon-76x76.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`/apple-touch-icon-114x114.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`/apple-touch-icon-120x120.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`/apple-touch-icon-144x144.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`/apple-touch-icon-152x152.png?v=${Date.now()}`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon-180x180.png?v=${Date.now()}`} />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};