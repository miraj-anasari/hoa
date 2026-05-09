// Home/Dashboard Page - Mobile PWA (UI component)

'use client';

import React, { useState } from 'react';
import { DollarSign, FileText, Zap, Car, Bell, ChevronRight, RefreshCw, Plus } from 'lucide-react';
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import {
  Card,
  WelcomeCard,
  SummaryCard,
  ListItem,
  SectionHeader,
  GradientCard
} from '@/components/mobile/molecules/cards';

export const HomePage = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  return (
    <MobileAppLayout
      title="HOA Dashboard"
      hideHeader={false}
      headerRightAction={
        <button
          className="buttonIconOnly"
          onClick={handleRefresh}
          style={{
            animation: isRefreshing ? 'spin 1s linear infinite' : 'none'
          }}
          aria-label="Refresh"
        >
          <RefreshCw size={20} />
        </button>
      }
    >
      <div style={{ marginBottom: '20px' }}>
        <WelcomeCard name="John Doe" balance="₹15,000.00" dueDate="30 May 2026" />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Overview" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}
        >
          <SummaryCard
            icon={<DollarSign size={20} />}
            title="HOA Dues"
            value="₹15,000"
            subtitle="Outstanding"
            type="primary"
          />
          <SummaryCard icon={<FileText size={20} />} title="Invoices" value="3" subtitle="Pending" type="warning" />
          <SummaryCard
            icon={<Zap size={20} />}
            title="Meter Bill"
            value="₹2,500"
            subtitle="This month"
            type="success"
          />
          <SummaryCard icon={<Car size={20} />} title="Vehicles" value="2" subtitle="Registered" type="primary" />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Recent Invoices</h3>
          <a
            href="/pwa/invoice"
            style={{
              color: '#6366f1',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            View All
            <ChevronRight size={16} />
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ListItem icon={<FileText size={18} />} title="HOA Maintenance" subtitle="Monthly maintenance fee" value="₹5,000" badge="Due" />
          <ListItem icon={<Zap size={18} />} title="Electricity Bill" subtitle="Common area lighting" value="₹2,500" badge="Paid" />
          <ListItem icon={<FileText size={18} />} title="Water Charges" subtitle="Water supply & maintenance" value="₹1,500" badge="Due" />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Notifications</h3>
          <button className="buttonIconOnly" style={{ width: '28px', height: '28px' }} aria-label="More">
            <ChevronRight size={16} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Card>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  background: '#fef3c7',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b',
                  flexShrink: 0
                }}
              >
                <Bell size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: 600, margin: 0, color: '#1f2937' }}>Annual General Meeting</p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>AGM scheduled for 15 June 2026</p>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  background: '#dbeafe',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6',
                  flexShrink: 0
                }}
              >
                <Bell size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: 600, margin: 0, color: '#1f2937' }}>Maintenance Work</p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>Common area renovation this weekend</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Quick Actions" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}
        >
          <GradientCard type="primary" onClick={() => {}}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Plus size={24} style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>Pay Now</p>
            </div>
          </GradientCard>

          <GradientCard type="secondary" onClick={() => {}}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <FileText size={24} style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>Documents</p>
            </div>
          </GradientCard>

          <GradientCard type="success" onClick={() => {}}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Car size={24} style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>Vehicles</p>
            </div>
          </GradientCard>

          <GradientCard type="warning" onClick={() => {}}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Zap size={24} style={{ marginBottom: '8px' }} />
              <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>Meter Info</p>
            </div>
          </GradientCard>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <SectionHeader title="Committee" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { name: 'Raj Kumar', role: 'President', color: '#6366f1' },
            { name: 'Priya Singh', role: 'Secretary', color: '#ec4899' },
            { name: 'Amit Patel', role: 'Treasurer', color: '#10b981' }
          ].map((member, idx) => (
            <Card key={idx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: member.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {member.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>{member.name}</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>{member.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MobileAppLayout>
  );
};

