// Election/Voting Page - Mobile PWA (UI component)

'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import { Card, SectionHeader } from '@/components/mobile/molecules/cards';

interface Candidate {
  id: string;
  name: string;
  position: string;
  bio: string;
  votes?: number;
}

interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  candidates: Candidate[];
  voted?: boolean;
}

const elections: Election[] = [
  {
    id: '1',
    title: 'Annual General Meeting Election',
    description: 'Election for HOA committee members',
    startDate: '01 June 2026',
    endDate: '15 June 2026',
    status: 'upcoming',
    candidates: [
      { id: '1', name: 'Raj Kumar', position: 'President', bio: 'Experienced HOA manager with 5+ years' },
      { id: '2', name: 'Priya Singh', position: 'Vice President', bio: 'Community liaison and organizer' },
      { id: '3', name: 'Amit Patel', position: 'Treasurer', bio: 'Financial expert and accountant' }
    ]
  },
  {
    id: '2',
    title: 'Community Development Vote',
    description: 'Vote on new amenities and facilities',
    startDate: '15 May 2026',
    endDate: '22 May 2026',
    status: 'ongoing',
    voted: true,
    candidates: [
      {
        id: '1',
        name: 'Swimming Pool',
        position: 'New Facility',
        bio: 'Olympic-size pool with modern amenities',
        votes: 45
      },
      { id: '2', name: 'Gym & Fitness Center', position: 'New Facility', bio: 'Full-equipped fitness center', votes: 38 },
      { id: '3', name: 'Recreation Hall', position: 'New Facility', bio: 'Multi-purpose event hall', votes: 32 }
    ]
  }
];

export const ElectionPage: React.FC = () => {
  const [selectedVote, setSelectedVote] = useState<Record<string, string>>({});

  const getStatusBadge = (status: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      upcoming: { bg: '#dbeafe', text: '#0c4a6e' },
      ongoing: { bg: '#dcfce7', text: '#15803d' },
      completed: { bg: '#f3e8ff', text: '#6b21a8' }
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

  return (
    <MobileAppLayout title="Elections">
      <div style={{ marginBottom: '24px' }}>
        <SectionHeader title="Active & Upcoming Elections" />
      </div>

      {elections.map(election => (
        <div key={election.id} style={{ marginBottom: '24px' }}>
          <Card>
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px'
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#1f2937' }}>{election.title}</h3>
                {getStatusBadge(election.status)}
              </div>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '8px 0 0 0' }}>{election.description}</p>
            </div>

            <div
              style={{
                background: '#f9fafb',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '16px',
                fontSize: '12px',
                color: '#6b7280',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span>Start: {election.startDate}</span>
              <span>End: {election.endDate}</span>
            </div>

            {election.voted && (
              <div
                style={{
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Check size={16} />
                You have voted in this election
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {election.candidates.map(candidate => (
                <button
                  key={candidate.id}
                  onClick={() =>
                    setSelectedVote({
                      ...selectedVote,
                      [election.id]: candidate.id
                    })
                  }
                  style={{
                    background: selectedVote[election.id] === candidate.id ? '#f0f4ff' : '#ffffff',
                    border: selectedVote[election.id] === candidate.id ? '2px solid #6366f1' : '1px solid #e5e7eb',
                    borderRadius: '10px',
                    padding: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#1f2937' }}>{candidate.name}</p>
                      <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>{candidate.position}</p>
                      <p style={{ fontSize: '11px', color: '#9ca3af', margin: '4px 0 0 0' }}>{candidate.bio}</p>
                    </div>
                    {candidate.votes && (
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>{candidate.votes}</p>
                        <p style={{ fontSize: '11px', color: '#9ca3af', margin: '2px 0 0 0' }}>votes</p>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {election.status === 'ongoing' && !election.voted && (
              <button
                style={{
                  width: '100%',
                  background: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  marginTop: '16px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => {}}
              >
                Submit Vote
              </button>
            )}
          </Card>
        </div>
      ))}

      <div style={{ marginBottom: '40px' }}>
        <SectionHeader title="How Voting Works" />
        <Card>
          <ol style={{ margin: 0, paddingLeft: '20px' }}>
            {[
              'Register as a member in your community',
              'Wait for election notifications',
              'Review candidate profiles and credentials',
              'Cast your vote during voting period',
              'Results will be announced on closing date'
            ].map((step, idx) => (
              <li key={idx} style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px', lineHeight: 1.5 }}>
                {step}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </MobileAppLayout>
  );
};

