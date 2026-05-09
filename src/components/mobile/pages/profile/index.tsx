// Profile Page - Mobile PWA (UI component)

'use client';

import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Edit2 } from 'lucide-react';
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import { Card, SectionHeader, ListItem } from '@/components/mobile/molecules/cards';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  unitNumber: string;
  ownership: string;
  joinDate: string;
  avatar?: string;
}

export const ProfilePage: React.FC = () => {
  const [profile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: 'Green Valley Apartments',
    unitNumber: 'A-1205',
    ownership: 'Owner',
    joinDate: '15 Jan 2020',
    avatar: 'JD'
  });

  return (
    <MobileAppLayout title="Profile">
      <div style={{ marginBottom: '24px' }}>
        <Card className="animateSlideUp">
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '80px',
                height: '80px',
                margin: '0 auto 16px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                fontWeight: 700
              }}
            >
              {profile.avatar}
              <button
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  background: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#6366f1',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
                aria-label="Change avatar"
              >
                <Camera size={16} />
              </button>
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 4px 0' }}>{profile.name}</h2>
            <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
              {profile.unitNumber} • {profile.ownership}
            </p>

            <button
              style={{
                marginTop: '12px',
                background: 'none',
                border: 'none',
                color: '#6366f1',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                margin: '12px auto 0'
              }}
            >
              <Edit2 size={14} />
              Edit Profile
            </button>
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Contact Information" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: '#dbeafe',
                  borderRadius: '10px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6'
                }}
              >
                <Mail size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Email</p>
                <p style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 0 0', color: '#1f2937' }}>
                  {profile.email}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: '#fce7f3',
                  borderRadius: '10px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ec4899'
                }}
              >
                <Phone size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Phone</p>
                <p style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 0 0', color: '#1f2937' }}>
                  {profile.phone}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: '#dcfce7',
                  borderRadius: '10px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}
              >
                <MapPin size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Address</p>
                <p style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 0 0', color: '#1f2937' }}>
                  {profile.address}, {profile.unitNumber}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Membership Details" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Member Since</p>
                <p style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 0 0', color: '#1f2937' }}>
                  {profile.joinDate}
                </p>
              </div>
              <span
                style={{
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 600
                }}
              >
                Active
              </span>
            </div>
          </Card>

          <Card>
            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Ownership Status</p>
              <p style={{ fontSize: '14px', fontWeight: 600, margin: '4px 0 0 0', color: '#1f2937' }}>
                {profile.ownership}
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Account Settings" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListItem title="Change Password" subtitle="Update your security" />
          <ListItem title="Notification Preferences" subtitle="Manage alerts and updates" />
          <ListItem title="Privacy Settings" subtitle="Control your information" />
          <ListItem title="Linked Accounts" subtitle="Manage connected services" />
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <SectionHeader title="Help & Support" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListItem title="Help Center" subtitle="Get answers to common questions" />
          <ListItem title="Contact Support" subtitle="Reach out to our team" />
          <ListItem title="Report a Problem" subtitle="Help us improve" />
        </div>
      </div>
    </MobileAppLayout>
  );
};

