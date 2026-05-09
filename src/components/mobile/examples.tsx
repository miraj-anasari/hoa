// Complete Examples - Copy & Use These

'use client';

import React, { useState } from 'react';
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import {
  Card,
  GradientCard,
  SummaryCard,
  ListItem,
  SectionHeader,
  WelcomeCard
} from '@/components/mobile/molecules/cards';
import {
  Modal,
  Tabs,
  ProgressBar,
  Rating,
  Accordion,
  AvatarGroup
} from '@/components/mobile/advanced-components';
import {
  DollarSign,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

/**
 * EXAMPLE 1: Simple List Page
 */
export function ExampleSimpleList() {
  const items = [
    { id: 1, title: 'Item 1', subtitle: 'Description', value: '₹100' },
    { id: 2, title: 'Item 2', subtitle: 'Description', value: '₹200' },
    { id: 3, title: 'Item 3', subtitle: 'Description', value: '₹300' }
  ];

  return (
    <MobileAppLayout title="My Items">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
        {items.map(item => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            value={item.value}
          />
        ))}
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 2: Form Page with Validation
 */
export function ExampleFormPage() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', form);
    }
  };

  return (
    <MobileAppLayout title="Contact Form">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        <div>
          <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b7280' }}>
            Full Name
          </label>
          <input
            type="text"
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
            style={{ marginTop: '8px' }}
          />
          {errors.name && (
            <p style={{ fontSize: '12px', color: '#ef4444', margin: '4px 0 0 0' }}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: 600, color: '#6b7280' }}>
            Email Address
          </label>
          <input
            type="email"
            className="input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
            style={{ marginTop: '8px' }}
          />
          {errors.email && (
            <p style={{ fontSize: '12px', color: '#ef4444', margin: '4px 0 0 0' }}>
              {errors.email}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="buttonPrimary"
          style={{ width: '100%', marginTop: '8px' }}
        >
          Submit
        </button>
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 3: Page with Modal
 */
export function ExampleModalPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <MobileAppLayout title="Modal Example">
      <div style={{ marginBottom: '40px' }}>
        <button
          onClick={() => setShowModal(true)}
          className="buttonPrimary"
          style={{ width: '100%' }}
        >
          Open Modal
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Example Modal"
        actions={[
          {
            label: 'Cancel',
            onClick: () => setShowModal(false),
            variant: 'secondary'
          },
          {
            label: 'Confirm',
            onClick: () => {
              console.log('Confirmed!');
              setShowModal(false);
            }
          }
        ]}
      >
        <p>This is a modal dialog. You can add any content here.</p>
      </Modal>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 4: Page with Tabs
 */
export function ExampleTabsPage() {
  return (
    <MobileAppLayout title="Tabs Example">
      <div style={{ marginBottom: '40px' }}>
        <Tabs
          tabs={[
            {
              id: 'overview',
              label: 'Overview',
              content: (
                <div>
                  <p>Overview content goes here</p>
                  <SummaryCard
                    icon={<DollarSign size={20} />}
                    title="Total"
                    value="₹10,000"
                    type="primary"
                  />
                </div>
              )
            },
            {
              id: 'details',
              label: 'Details',
              content: (
                <div>
                  <p>Details content goes here</p>
                  <Card>
                    <p>Additional information</p>
                  </Card>
                </div>
              )
            },
            {
              id: 'settings',
              label: 'Settings',
              content: (
                <div>
                  <p>Settings content goes here</p>
                </div>
              )
            }
          ]}
        />
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 5: Page with Progress & Rating
 */
export function ExampleProgressPage() {
  const [rating, setRating] = useState(3);

  return (
    <MobileAppLayout title="Progress & Rating">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
        <Card>
          <SectionHeader title="Task Progress" />
          <ProgressBar value={65} max={100} label="Completion" color="#6366f1" animated />
        </Card>

        <Card>
          <SectionHeader title="Download Progress" />
          <ProgressBar value={45} max={100} label="Download" color="#10b981" />
        </Card>

        <Card>
          <SectionHeader title="Rate This Service" />
          <div style={{ marginTop: '16px' }}>
            <Rating value={rating} max={5} onChange={setRating} size="lg" />
            <p style={{ margin: '12px 0 0 0', fontSize: '13px', color: '#6b7280' }}>
              You rated: {rating} stars
            </p>
          </div>
        </Card>
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 6: Page with Accordion
 */
export function ExampleAccordionPage() {
  return (
    <MobileAppLayout title="FAQ">
      <div style={{ marginBottom: '40px' }}>
        <Accordion
          items={[
            {
              id: '1',
              title: 'How do I reset my password?',
              content: (
                <p>
                  Go to the login page, click "Forgot Password", and follow the instructions
                  sent to your email.
                </p>
              )
            },
            {
              id: '2',
              title: 'Can I cancel my membership?',
              content: (
                <p>
                  Yes, you can cancel anytime from your account settings. There are no
                  cancellation fees.
                </p>
              )
            },
            {
              id: '3',
              title: 'How do I contact support?',
              content: (
                <p>
                  You can reach our support team via email at support@example.com or through
                  the in-app chat.
                </p>
              )
            }
          ]}
        />
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 7: Page with Avatars
 */
export function ExampleAvatarPage() {
  return (
    <MobileAppLayout title="Team Members">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
        <Card>
          <SectionHeader title="Team" />
          <AvatarGroup avatars={['Alice', 'Bob', 'Charlie', 'Diana', 'Eve']} max={4} />
        </Card>

        <Card>
          <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '16px' }}>
            Members can see each other's avatars
          </p>
          <AvatarGroup avatars={['John', 'Jane', 'Jack']} max={3} />
        </Card>
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXAMPLE 8: Complex Stats Dashboard
 */
export function ExampleStatsDashboard() {
  return (
    <MobileAppLayout title="Dashboard">
      {/* Welcome Card */}
      <div style={{ marginBottom: '20px' }}>
        <WelcomeCard
          name="Welcome, User!"
          balance="₹25,000"
          dueDate="15 June 2026"
        />
      </div>

      {/* Quick Stats */}
      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Quick Stats" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}>
          <SummaryCard
            icon={<CheckCircle size={20} />}
            title="Completed"
            value="12"
            type="success"
          />
          <SummaryCard
            icon={<Clock size={20} />}
            title="Pending"
            value="5"
            type="warning"
          />
          <SummaryCard
            icon={<AlertCircle size={20} />}
            title="Overdue"
            value="2"
            type="danger"
          />
          <SummaryCard
            icon={<Heart size={20} />}
            title="Favorites"
            value="8"
            type="danger"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ marginBottom: '40px' }}>
        <SectionHeader title="Recent Activity" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { icon: <MessageCircle size={18} />, title: 'New Message', time: '2 min ago' },
            { icon: <Share2 size={18} />, title: 'Someone shared', time: '1 hour ago' },
            { icon: <DollarSign size={18} />, title: 'Payment received', time: '3 hours ago' }
          ].map((item, idx) => (
            <Card key={idx}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  background: '#f3f4f6',
                  borderRadius: '10px',
                  padding: '8px',
                  color: '#6366f1'
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '12px', color: '#9ca3af', margin: '4px 0 0 0' }}>
                    {item.time}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MobileAppLayout>
  );
}

/**
 * EXPORT ALL EXAMPLES
 */
export const Examples = {
  SimpleList: ExampleSimpleList,
  FormPage: ExampleFormPage,
  ModalPage: ExampleModalPage,
  TabsPage: ExampleTabsPage,
  ProgressPage: ExampleProgressPage,
  AccordionPage: ExampleAccordionPage,
  AvatarPage: ExampleAvatarPage,
  StatsDashboard: ExampleStatsDashboard
};
