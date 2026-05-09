// Settings Page - Mobile PWA (UI component)

'use client';

import React, { useState } from 'react';
import { Moon, Bell, Lock, Globe, HelpCircle, FileText, Info, ChevronRight } from 'lucide-react';
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import { Card, SectionHeader } from '@/components/mobile/molecules/cards';

interface SettingToggle {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
  icon: React.ReactNode;
}

export const SettingsPage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light');
  const [settings, setSettings] = useState<Record<string, boolean>>({
    pushNotifications: true,
    emailNotifications: false,
    appNotifications: true,
    twoFactor: false,
    biometricLogin: true,
    analyticsTracking: false
  });

  const toggleSetting = (key: string) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    });
  };

  const settingsList: SettingToggle[] = [
    {
      id: 'pushNotifications',
      label: 'Push Notifications',
      description: 'Receive instant alerts',
      enabled: settings.pushNotifications,
      icon: <Bell size={20} />
    },
    {
      id: 'emailNotifications',
      label: 'Email Notifications',
      description: 'Notifications via email',
      enabled: settings.emailNotifications,
      icon: <Bell size={20} />
    },
    {
      id: 'appNotifications',
      label: 'In-App Notifications',
      description: 'Alerts within the app',
      enabled: settings.appNotifications,
      icon: <Bell size={20} />
    },
    {
      id: 'twoFactor',
      label: 'Two-Factor Authentication',
      description: 'Enhanced security',
      enabled: settings.twoFactor,
      icon: <Lock size={20} />
    },
    {
      id: 'biometricLogin',
      label: 'Biometric Login',
      description: 'Use fingerprint or face',
      enabled: settings.biometricLogin,
      icon: <Lock size={20} />
    },
    {
      id: 'analyticsTracking',
      label: 'Analytics Tracking',
      description: 'Help improve the app',
      enabled: settings.analyticsTracking,
      icon: <Info size={20} />
    }
  ];

  return (
    <MobileAppLayout title="Settings">
      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Display" />
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          {(['light', 'dark', 'auto'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '8px',
                border: theme === t ? '2px solid #6366f1' : '1px solid #e5e7eb',
                background: theme === t ? '#f0f4ff' : 'white',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: theme === t ? '#6366f1' : '#6b7280',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {t === 'light' && <Sun size={16} />}
              {t === 'dark' && <Moon size={16} />}
              {t === 'auto' && <Zap size={16} />}
              <div>{t.charAt(0).toUpperCase() + t.slice(1)}</div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Notifications" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {settingsList.slice(0, 3).map(setting => (
            <Card key={setting.id}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <div
                    style={{
                      background: '#f3f4f6',
                      borderRadius: '8px',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6366f1'
                    }}
                  >
                    {setting.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>{setting.label}</p>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>{setting.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting(setting.id)}
                  style={{
                    width: '44px',
                    height: '28px',
                    borderRadius: '14px',
                    border: 'none',
                    background: setting.enabled ? '#6366f1' : '#d1d5db',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'background 0.3s ease'
                  }}
                  role="switch"
                  aria-checked={setting.enabled}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: setting.enabled ? '22px' : '2px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '12px',
                      background: 'white',
                      transition: 'left 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Security" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {settingsList.slice(3, 5).map(setting => (
            <Card key={setting.id}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <div
                    style={{
                      background: '#fee2e2',
                      borderRadius: '8px',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#dc2626'
                    }}
                  >
                    {setting.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>{setting.label}</p>
                    <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>{setting.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSetting(setting.id)}
                  style={{
                    width: '44px',
                    height: '28px',
                    borderRadius: '14px',
                    border: 'none',
                    background: setting.enabled ? '#10b981' : '#d1d5db',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'background 0.3s ease'
                  }}
                  role="switch"
                  aria-checked={setting.enabled}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: setting.enabled ? '22px' : '2px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '12px',
                      background: 'white',
                      transition: 'left 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Privacy" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card interactive>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div
                  style={{
                    background: '#dbeafe',
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}
                >
                  <Globe size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>Profile Visibility</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>Who can see your profile</p>
                </div>
              </div>
              <ChevronRight size={18} color="#9ca3af" />
            </div>
          </Card>

          <Card interactive>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div
                  style={{
                    background: '#f3e8ff',
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7'
                  }}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>Data & Privacy Policy</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>Read our policies</p>
                </div>
              </div>
              <ChevronRight size={18} color="#9ca3af" />
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <SectionHeader title="About" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div
                  style={{
                    background: '#e0e7ff',
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6366f1'
                  }}
                >
                  <Info size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>App Version</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>v1.0.0</p>
                </div>
              </div>
            </div>
          </Card>

          <Card interactive>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div
                  style={{
                    background: '#fef3c7',
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f59e0b'
                  }}
                >
                  <HelpCircle size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>Help & Support</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>Get help with the app</p>
                </div>
              </div>
              <ChevronRight size={18} color="#9ca3af" />
            </div>
          </Card>

          <Card>
            <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0, textAlign: 'center', lineHeight: 1.6 }}>
              HOA Management App © 2026
              <br />
              Built with ❤️ for communities
            </p>
          </Card>
        </div>
      </div>
    </MobileAppLayout>
  );
};

function Sun({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v6m0 6v6m11-11h-6m-6 0H1m15.66 1.66l-4.24 4.24m0 5.96l4.24 4.24M8.34 19.66l-4.24-4.24m0-5.96L8.34 4.34" />
    </svg>
  );
}

function Zap({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

