// Mobile Card Components

'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './index.module.css';

// ============ Basic Card ============

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  interactive = false
}) => (
  <div
    className={`${interactive ? styles.cardInteractive : styles.card} ${className}`}
    onClick={onClick}
    role={interactive ? 'button' : undefined}
    tabIndex={interactive ? 0 : undefined}
  >
    {children}
  </div>
);

// ============ Gradient Card ============

type GradientType = 'primary' | 'secondary' | 'success' | 'warning';

interface GradientCardProps {
  children: React.ReactNode;
  type?: GradientType;
  className?: string;
  onClick?: () => void;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  type = 'primary',
  className = '',
  onClick
}) => {
  const gradientClass = {
    primary: styles.cardGradientPrimary,
    secondary: styles.cardGradientSecondary,
    success: styles.cardGradientSuccess,
    warning: styles.cardGradientWarning
  }[type];

  return (
    <div className={`${gradientClass} ${className}`} onClick={onClick} role="button" tabIndex={0}>
      {children}
    </div>
  );
};

// ============ Welcome Card ============

interface WelcomeCardProps {
  name: string;
  balance?: string;
  dueDate?: string;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  name,
  balance = '$0.00',
  dueDate = 'No pending dues'
}) => (
  <GradientCard type="primary" className={styles.animateSlideUp}>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <p style={{ fontSize: '14px', opacity: 0.9, margin: '0 0 8px 0' }}>Welcome back</p>
      <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 16px 0' }}>{name}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>Outstanding Balance</p>
          <p style={{ fontSize: '20px', fontWeight: 700, margin: '4px 0 0 0' }}>{balance}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>Next Due</p>
          <p style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 0 0' }}>{dueDate}</p>
        </div>
      </div>
    </div>
  </GradientCard>
);

// ============ Summary Card ============

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
  interactive?: boolean;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  icon,
  title,
  value,
  subtitle,
  type = 'primary',
  onClick,
  interactive = true
}) => {
  const getColor = () => {
    const colors: Record<string, { primary: string; light: string }> = {
      primary: { primary: '#6366f1', light: '#818cf8' },
      success: { primary: '#10b981', light: '#6ee7b7' },
      warning: { primary: '#f59e0b', light: '#fbbf24' },
      danger: { primary: '#ef4444', light: '#f87171' }
    };
    return colors[type];
  };

  const color = getColor();

  return (
    <Card interactive={interactive} onClick={onClick} className={styles.animateSlideUp}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, fontWeight: 500 }}>{title}</p>
          <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '8px 0 0 0' }}>{value}</h3>
          {subtitle && (
            <p style={{ fontSize: '12px', color: '#9ca3af', margin: '4px 0 0 0' }}>{subtitle}</p>
          )}
        </div>
        <div
          style={{
            background: `linear-gradient(135deg, ${color.primary} 0%, ${color.light} 100%)`,
            borderRadius: '12px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            opacity: 0.9
          }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
};

// ============ List Item Card ============

interface ListItemProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  value?: string;
  badge?: string;
  onClick?: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  subtitle,
  value,
  badge,
  onClick
}) => (
  <Card interactive onClick={onClick}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {icon && (
        <div
          style={{
            background: '#f3f4f6',
            borderRadius: '10px',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6366f1'
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>{title}</p>
        {subtitle && <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {value && <p style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937', margin: 0 }}>{value}</p>}
        {badge && (
          <span
            style={{
              background: '#f3f4f6',
              color: '#6b7280',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 600
            }}
          >
            {badge}
          </span>
        )}
        <ChevronRight size={18} color="#9ca3af" />
      </div>
    </div>
  </Card>
);

// ============ Section Header ============

interface SectionHeaderProps {
  title: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, action }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
      paddingTop: '8px'
    }}
  >
    <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#1f2937' }}>{title}</h3>
    {action}
  </div>
);

