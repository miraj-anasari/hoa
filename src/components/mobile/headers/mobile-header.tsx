// Mobile Header Component

'use client';

import React from 'react';
import { ChevronLeft, Bell, Settings } from 'lucide-react';

interface MobileHeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  centerContent?: React.ReactNode;
  className?: string;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  title = 'HOA',
  subtitle,
  onBack,
  showBack = false,
  rightAction,
  centerContent,
  className = ''
}) => {
  return (
    <header className={`mobileHeader ${className}`}>
      <div className="mobileHeaderLeft">
        {showBack && (
          <button
            onClick={onBack}
            className="buttonIconOnly"
            aria-label="Go back"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {!showBack && (
          <div>
            <h1 className="mobileHeaderTitle">{title}</h1>
            {subtitle && (
              <p className="mobileHeaderSubtitle">{subtitle}</p>
            )}
          </div>
        )}
      </div>

      {centerContent && (
        <div className="mobileHeaderCenter">
          {centerContent}
        </div>
      )}

      <div className="mobileHeaderRight">
        {rightAction ? (
          rightAction
        ) : (
          <>
            <button className="buttonIconOnly" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <button className="buttonIconOnly" aria-label="Settings">
              <Settings size={20} />
            </button>
          </>
        )}
      </div>
    </header>
  );
};
