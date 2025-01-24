"use client"

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { useEffect, useState, useCallback } from 'react';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
}

export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

export function useAnalytics() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAnalytics = () => {
      try {
        const stored = localStorage.getItem('cookie-consent');
        if (stored) {
          const consent = JSON.parse(stored) as CookieConsent;
          setIsEnabled(consent.analytics);
        }
        setIsInitialized(true);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error initializing analytics:', error);
        }
        setIsEnabled(false);
        setIsInitialized(true);
      }
    };

    initializeAnalytics();
  }, []);

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!isEnabled || !isInitialized) return;

    const { name, properties } = event;
    
    try {
      const w = window as any;
      
      // Vercel Analytics
      if (typeof w.va?.track === 'function') {
        w.va.track(name, properties);
      }

      // Google Analytics
      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      if (typeof w.gtag === 'function' && gaId) {
        w.gtag('event', name, {
          ...properties,
          send_to: gaId
        });
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Analytics event tracking failed:', {
          event: name,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }
  }, [isEnabled, isInitialized]);

  return { isEnabled, trackEvent };
}

export function Analytics() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookie-consent');
      if (stored) {
        const consent = JSON.parse(stored) as CookieConsent;
        setShowAnalytics(consent.analytics);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Error reading analytics consent:', error);
      }
      setShowAnalytics(false);
    }
  }, []);

  if (!showAnalytics || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
      <VercelAnalytics />
    </>
  );
}