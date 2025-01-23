"use client"

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-6WWZ10399P';

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

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookie-consent');
      if (stored) {
        const consent = JSON.parse(stored) as CookieConsent;
        setIsEnabled(consent.analytics);
      }
    } catch (error) {
      console.error('Error reading analytics consent:', error);
    }
  }, []);

  const trackEvent = (event: AnalyticsEvent) => {
    if (!isEnabled) return;

    try {
      // Envoi de l'événement à Vercel Analytics
      const w = window as any;
      if (w.va) {
        w.va.track(event.name, event.properties);
      }

      // Envoi de l'événement à Google Analytics
      if (w.gtag) {
        w.gtag('event', event.name, {
          ...event.properties,
          send_to: GA_MEASUREMENT_ID
        });
      }
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

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
      console.error('Error reading analytics consent:', error);
    }
  }, []);

  if (!showAnalytics) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
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