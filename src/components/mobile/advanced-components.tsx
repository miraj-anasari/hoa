// Advanced Mobile Components

'use client';

import React from 'react';

// ============ Modal Component ============

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }>;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actions
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderRadius: '20px 20px 0 0',
          padding: '24px 16px',
          zIndex: 101,
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: isOpen ? 'slideUp 0.3s ease' : 'none'
        }}
      >
        {title && (
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            margin: '0 0 16px 0',
            textAlign: 'center'
          }}>
            {title}
          </h2>
        )}
        <div style={{ marginBottom: actions ? '16px' : 0 }}>
          {children}
        </div>
        {actions && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {actions.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  background:
                    action.variant === 'danger' ? '#ef4444' :
                    action.variant === 'secondary' ? '#f3f4f6' :
                    '#6366f1',
                  color:
                    action.variant === 'secondary' ? '#1f2937' :
                    'white'
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

// ============ Tab Component ============

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

  return (
    <div>
      <div style={{
        display: 'flex',
        gap: '0',
        borderBottom: '1px solid #e5e7eb',
        marginBottom: '16px',
        overflowX: 'auto'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 16px',
              border: 'none',
              background: activeTab === tab.id ? 'white' : 'transparent',
              color: activeTab === tab.id ? '#6366f1' : '#6b7280',
              fontWeight: activeTab === tab.id ? 600 : 500,
              borderBottom: activeTab === tab.id ? '2px solid #6366f1' : 'none',
              cursor: 'pointer',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

// ============ Progress Bar ============

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  color = '#6366f1',
  animated = true
}) => {
  const percentage = (value / max) * 100;

  return (
    <div>
      {label && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          fontSize: '12px',
          fontWeight: 600
        }}>
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        style={{
          width: '100%',
          height: '8px',
          background: '#e5e7eb',
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: color,
            borderRadius: '4px',
            transition: animated ? 'width 0.5s ease' : 'none'
          }}
        />
      </div>
    </div>
  );
};

// ============ Rating Component ============

interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  onChange,
  size = 'md'
}) => {
  const sizeMap = { sm: 16, md: 20, lg: 24 };
  const iconSize = sizeMap[size];

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: max }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange?.(i + 1)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill={i < value ? '#f59e0b' : 'none'}
            stroke={i < value ? '#f59e0b' : '#d1d5db'}
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.63 20.29 25 12 19.54 3.71 25 6.82 16.63 0 10.27 8.91 10.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
};

// ============ Accordion Component ============

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => toggle(item.id)}
            style={{
              width: '100%',
              padding: '16px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#1f2937',
              transition: 'all 0.3s ease'
            }}
          >
            {item.title}
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              style={{
                transition: 'transform 0.3s ease',
                transform: openItems.includes(item.id) ? 'rotate(180deg)' : 'rotate(0)'
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {openItems.includes(item.id) && (
            <div style={{
              padding: '16px',
              background: '#ffffff',
              borderLeft: '2px solid #6366f1',
              marginTop: '4px',
              animation: 'slideDown 0.3s ease'
            }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ============ Toast Component ============

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose
}) => {
  React.useEffect(() => {
    if (onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgColor = {
    success: '#dcfce7',
    error: '#fee2e2',
    info: '#dbeafe',
    warning: '#fef3c7'
  }[type];

  const textColor = {
    success: '#15803d',
    error: '#991b1b',
    info: '#0c4a6e',
    warning: '#92400e'
  }[type];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px',
        background: bgColor,
        color: textColor,
        padding: '12px 16px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 600,
        animation: 'slideUp 0.3s ease',
        zIndex: 1000,
        maxWidth: '90vw'
      }}
    >
      {message}
    </div>
  );
};

// ============ Avatar Group ============

interface AvatarGroupProps {
  avatars: string[];
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 3
}) => {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div style={{ display: 'flex', marginLeft: '-8px' }}>
      {visible.map((avatar, idx) => (
        <div
          key={idx}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#6366f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 700,
            border: '2px solid white',
            marginLeft: idx === 0 ? 0 : '-8px'
          }}
        >
          {avatar[0]}
        </div>
      ))}
      {remaining > 0 && (
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '12px',
            fontWeight: 700,
            border: '2px solid white',
            marginLeft: '-8px'
          }}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};
