// Invoice/Bills Page - Mobile PWA (UI component)

'use client';

import React, { useState } from 'react';
import { Download, Check, Clock, AlertCircle } from 'lucide-react';
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import { Card } from '@/components/mobile/molecules/cards';

interface Invoice {
  id: string;
  title: string;
  amount: string;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

const invoices: Invoice[] = [
  { id: '1', title: 'HOA Maintenance - May 2026', amount: '₹5,000', date: '01 May 2026', dueDate: '30 May 2026', status: 'pending' },
  { id: '2', title: 'Electricity Charges - April 2026', amount: '₹2,500', date: '10 April 2026', dueDate: '20 April 2026', status: 'paid' },
  { id: '3', title: 'Water Charges - May 2026', amount: '₹1,500', date: '05 May 2026', dueDate: '25 May 2026', status: 'overdue' },
  { id: '4', title: 'Parking Charges - May 2026', amount: '₹1,000', date: '01 May 2026', dueDate: '30 May 2026', status: 'pending' },
  { id: '5', title: 'Security Charges - April 2026', amount: '₹3,000', date: '15 April 2026', dueDate: '30 April 2026', status: 'paid' }
];

export const InvoicePage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'paid' | 'overdue'>('all');

  const filteredInvoices = filter === 'all' ? invoices : invoices.filter(inv => inv.status === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <Check size={18} />;
      case 'pending':
        return <Clock size={18} />;
      case 'overdue':
        return <AlertCircle size={18} />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      paid: { bg: '#d1fae5', text: '#065f46' },
      pending: { bg: '#fef3c7', text: '#92400e' },
      overdue: { bg: '#fee2e2', text: '#991b1b' }
    };
    const color = colors[status] || { bg: '#f3f4f6', text: '#6b7280' };
    return (
      <span
        style={{
          background: color.bg,
          color: color.text,
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'capitalize'
        }}
      >
        {status}
      </span>
    );
  };

  const totalAmount = filteredInvoices.reduce((sum, inv) => {
    const amount = parseInt(inv.amount.replace(/[^\d]/g, ''));
    return sum + amount;
  }, 0);

  return (
    <MobileAppLayout title="Invoices">
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Card>
            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, fontWeight: 500 }}>Total Due</p>
              <p style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0 0 0', color: '#ef4444' }}>
                ₹{totalAmount.toLocaleString('en-IN')}
              </p>
            </div>
          </Card>

          <Card>
            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, fontWeight: 500 }}>Documents</p>
              <p style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0 0 0' }}>{filteredInvoices.length}</p>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '8px' }}>
        {(['all', 'pending', 'paid', 'overdue'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              background: filter === f ? '#6366f1' : '#f3f4f6',
              color: filter === f ? 'white' : '#6b7280',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
          >
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
        {filteredInvoices.length > 0 ? (
          filteredInvoices.map(invoice => (
            <Card key={invoice.id} interactive>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>{invoice.title}</p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
                    <span>Invoice: {invoice.date}</span>
                    <span>Due: {invoice.dueDate}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid #e5e7eb'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <p style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#1f2937' }}>{invoice.amount}</p>
                  {getStatusBadge(invoice.status)}
                </div>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6366f1',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Download"
                >
                  <Download size={18} />
                </button>
              </div>
            </Card>
          ))
        ) : (
          <Card>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>No invoices found</p>
            </div>
          </Card>
        )}
      </div>
    </MobileAppLayout>
  );
};

