// Bottom Navigation Component

'use client';

import React from 'react';
import { Home, FileText, Vote, User, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  {
    href: '/pwa/home',
    icon: <Home size={24} />,
    label: 'Home'
  },
  {
    href: '/pwa/invoice',
    icon: <FileText size={24} />,
    label: 'Invoice'
  },
  {
    href: '/pwa/election',
    icon: <Vote size={24} />,
    label: 'Election'
  },
  {
    href: '/pwa/profile',
    icon: <User size={24} />,
    label: 'Profile'
  },
  {
    href: '/pwa/settings',
    icon: <Settings size={24} />,
    label: 'Settings'
  }
];

export const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bottomNavigation" role="navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`navItem ${isActive ? 'active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
