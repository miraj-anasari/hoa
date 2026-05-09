// Pull-to-Refresh Hook

'use client';

import { useEffect, useRef, useState } from 'react';

interface PullToRefreshOptions {
  onRefresh: () => Promise<void>;
  threshold?: number;
  maxPull?: number;
}

export const usePullToRefresh = ({
  onRefresh,
  threshold = 60,
  maxPull = 120
}: PullToRefreshOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const pullDistanceRef = useRef(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (container.scrollTop === 0) {
        startYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (container.scrollTop !== 0 || !startYRef.current) return;

      const pullDistance = e.touches[0].clientY - startYRef.current;
      if (pullDistance > 0) {
        e.preventDefault();
        pullDistanceRef.current = Math.min(pullDistance, maxPull);
        setPullProgress(Math.min(100, (pullDistanceRef.current / threshold) * 100));
      }
    };

    const handleTouchEnd = async () => {
      if (pullDistanceRef.current > threshold && !isRefreshing) {
        setIsRefreshing(true);
        try {
          await onRefresh();
        } finally {
          setIsRefreshing(false);
        }
      }
      
      pullDistanceRef.current = 0;
      startYRef.current = 0;
      setPullProgress(0);
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onRefresh, threshold, maxPull, isRefreshing]);

  return {
    containerRef,
    isRefreshing,
    pullProgress
  };
};
