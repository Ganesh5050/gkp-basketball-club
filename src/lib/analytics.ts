// Simple analytics utility for tracking page views and events

// Initialize analytics with your tracking ID
export const initAnalytics = (trackingId: string) => {
  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', trackingId);

  // Add to window for TypeScript
  window.gtag = gtag;
};

// Track page view
export const trackPageView = (path: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', window.GA_TRACKING_ID, {
      page_path: path,
      page_title: title,
    });
  }
};

// Track event
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Add types for window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    GA_TRACKING_ID: string;
  }
}