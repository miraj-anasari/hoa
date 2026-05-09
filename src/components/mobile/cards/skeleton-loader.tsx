// Skeleton Loader Component

'use client';

import React from 'react';

interface SkeletonProps {
  count?: number;
  height?: string;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({
  count = 3,
  height = '60px',
  className = ''
}) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="skeletonCard"
          style={{ height }}
        />
      ))}
    </div>
  );
};

// Skeleton Card Grid
export const SkeletonCardGrid: React.FC<{ columns?: number }> = ({ columns = 2 }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '12px'
  }}>
    {Array.from({ length: columns * 2 }).map((_, i) => (
      <div key={i} className="skeletonCard" style={{ height: '100px' }} />
    ))}
  </div>
);

// Skeleton List Item
export const SkeletonListItem: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} style={{
        display: 'flex',
        gap: '12px',
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '12px'
      }}>
        <div
          className="skeleton"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            flexShrink: 0
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            className="skeleton"
            style={{
              height: '12px',
              marginBottom: '8px',
              borderRadius: '4px'
            }}
          />
          <div
            className="skeleton"
            style={{
              height: '10px',
              width: '70%',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>
    ))}
  </div>
);

// Skeleton Welcome Card
export const SkeletonWelcomeCard: React.FC = () => (
  <div
    className="skeleton"
    style={{
      height: '140px',
      borderRadius: '16px',
      marginBottom: '20px'
    }}
  />
);
