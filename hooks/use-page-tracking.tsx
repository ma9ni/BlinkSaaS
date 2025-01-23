"use client"

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useAnalytics } from '@/lib/analytics';

export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Tracking de la vue de page
    trackEvent({
      name: 'page_view',
      properties: {
        path: pathname,
        search: searchParams?.toString() || '',
        url: window.location.href,
      },
    });
  }, [pathname, searchParams, trackEvent]);
}