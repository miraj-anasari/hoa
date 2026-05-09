// Mobile App Layout Wrapper

'use client';

import React, { useState, useEffect } from 'react';
import { BottomNavigation } from '@/components/mobile/navigation/bottom-navigation';
import { MobileHeader } from '@/components/mobile/headers/mobile-header';

interface MobileAppLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  hideHeader?: boolean;
  headerRightAction?: React.ReactNode;
}

export const MobileAppLayout: React.FC<MobileAppLayoutProps> = ({
  children,
  title = 'HOA',
  subtitle,
  showBack = false,
  onBack,
  hideHeader = false,
  headerRightAction
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mobileAppContainer">
      {!hideHeader && (
        <MobileHeader
          title={title}
          subtitle={subtitle}
          showBack={showBack}
          onBack={onBack}
          rightAction={headerRightAction}
        />
      )}
      
      <main className="mobileAppContent">
        {children}
      </main>
      
      <BottomNavigation />
    </div>
  );
};
