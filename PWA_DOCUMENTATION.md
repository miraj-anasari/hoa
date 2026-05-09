# HOA Mobile App - PWA Documentation

A modern, native-style HOA (Homeowners Association) management application built with Next.js 15, React 19, TypeScript, and SCSS. The app provides a premium mobile experience with features like bottom navigation, gradient cards, and smooth animations.

## 📁 Project Structure

```
src/
├── app/
│   └── pwa/
│       ├── layout.tsx                 # PWA root layout
│       ├── page.tsx                   # PWA index (redirects to home)
│       └── (tabs)/
│           ├── layout.tsx             # Tabs group layout
│           ├── home/
│           │   └── page.tsx           # Dashboard/home page
│           ├── invoice/
│           │   └── page.tsx           # Invoices/bills page
│           ├── election/
│           │   └── page.tsx           # Elections/voting page
│           ├── profile/
│           │   └── page.tsx           # User profile page
│           └── settings/
│               └── page.tsx           # Settings page
├── components/
│   └── mobile/
│       ├── layout/
│       │   └── mobile-app-layout.tsx  # Main app wrapper
│       ├── navigation/
│       │   └── bottom-navigation.tsx  # Bottom tab navigation
│       ├── headers/
│       │   └── mobile-header.tsx      # Mobile header component
│       └── cards/
│           └── mobile-cards.tsx       # Card components
├── styles/
│   └── modules/
│       └── mobile-app.module.scss     # Main SCSS styles
└── hooks/
    ├── use-theme.ts                   # Theme management hook
    └── use-pull-to-refresh.ts         # Pull-to-refresh hook

public/
├── manifest/
│   └── manifest.json                  # PWA manifest
└── icons/                             # App icons directory
```

## 🎨 Design System

### Colors

**Light Mode:**
- Primary: `#6366f1` (Indigo)
- Secondary: `#ec4899` (Pink)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Danger: `#ef4444` (Red)

**Dark Mode:**
- Background Primary: `#0f172a`
- Background Secondary: `#1e293b`
- Text Primary: `#f1f5f9`
- Text Secondary: `#cbd5e1`

### Spacing

```scss
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;
$spacing-xl: 20px;
$spacing-2xl: 24px;
$spacing-3xl: 32px;
```

### Border Radius

```scss
$radius-sm: 8px;    // Small elements
$radius-md: 12px;   // Buttons, inputs
$radius-lg: 16px;   // Cards
$radius-xl: 20px;   // Large elements
```

## 🧩 Components

### MobileAppLayout

Main app wrapper that includes header and bottom navigation.

```tsx
<MobileAppLayout
  title="Dashboard"
  subtitle="Welcome back"
  hideHeader={false}
>
  {/* Content */}
</MobileAppLayout>
```

**Props:**
- `title?: string` - Header title
- `subtitle?: string` - Header subtitle
- `hideHeader?: boolean` - Hide header
- `showBack?: boolean` - Show back button
- `onBack?: () => void` - Back button handler
- `headerRightAction?: React.ReactNode` - Custom right action

### Card Components

**Card** - Basic card container
```tsx
<Card interactive onClick={handleClick}>
  Content here
</Card>
```

**GradientCard** - Gradient background card
```tsx
<GradientCard type="primary">
  Gradient content
</GradientCard>
```

**WelcomeCard** - Welcome/intro card
```tsx
<WelcomeCard
  name="John Doe"
  balance="₹15,000"
  dueDate="30 May 2026"
/>
```

**SummaryCard** - Statistics card
```tsx
<SummaryCard
  icon={<DollarSign size={20} />}
  title="HOA Dues"
  value="₹15,000"
  subtitle="Outstanding"
  type="primary"
/>
```

**ListItem** - List item with icon and action
```tsx
<ListItem
  icon={<FileText size={18} />}
  title="Invoice Title"
  subtitle="Description"
  value="₹5,000"
  badge="Due"
/>
```

### Bottom Navigation

Sticky bottom navigation with 5 tabs:
- Home
- Invoice
- Election
- Profile
- Settings

The active route is automatically highlighted.

## 📱 Pages

### Home/Dashboard (`/pwa/home`)

Main dashboard with:
- Welcome card with balance and due date
- Quick stats (4 cards in 2x2 grid)
- Recent invoices
- Notifications
- Quick action buttons (Pay, Documents, Vehicles, Meter Info)
- Committee members

**Features:**
- Pull-to-refresh functionality
- Refresh button in header
- Interactive cards
- Smooth animations

### Invoice (`/pwa/invoice`)

Bills and invoices management with:
- Total amount due
- Document count
- Filter tabs (All, Pending, Paid, Overdue)
- Invoice list with details
- Download buttons
- Status badges

**Features:**
- Filter by status
- Download invoices
- Status indicators (Paid, Pending, Overdue)

### Election (`/pwa/election`)

Voting and elections page with:
- Active and upcoming elections
- Election information
- Candidate profiles
- Vote selection
- Vote submission
- How voting works guide

**Features:**
- Multiple elections support
- Candidate profiles with descriptions
- Vote tracking
- Election status indicators

### Profile (`/pwa/profile`)

User profile page with:
- User avatar and basic info
- Contact information
- Membership details
- Account settings options
- Help & support links
- Logout button

**Features:**
- Edit profile capability
- Contact management
- Security settings
- Account preferences

### Settings (`/pwa/settings`)

App settings with:
- Theme selection (Light, Dark, Auto)
- Notification preferences
- Security options (2FA, Biometric)
- Privacy settings
- Help & about section
- App version info

**Features:**
- Toggle switches for each setting
- Multiple notification channels
- Security authentication options
- Privacy policy links

## 🎯 Usage Examples

### Using the Mobile App Layout

```tsx
'use client';

import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
import { Card } from '@/components/mobile/cards/mobile-cards';

export default function MyPage() {
  return (
    <MobileAppLayout title="My Page">
      <Card>
        <h2>Content here</h2>
      </Card>
    </MobileAppLayout>
  );
}
```

### Using Cards

```tsx
import {
  Card,
  GradientCard,
  SummaryCard,
  ListItem
} from '@/components/mobile/cards/mobile-cards';
import { DollarSign } from 'lucide-react';

export function MyCards() {
  return (
    <>
      <Card>Simple card</Card>
      
      <GradientCard type="primary">
        Gradient card
      </GradientCard>
      
      <SummaryCard
        icon={<DollarSign size={20} />}
        title="Amount"
        value="₹5,000"
        type="primary"
      />
      
      <ListItem
        title="Item"
        subtitle="Description"
        value="₹100"
      />
    </>
  );
}
```

### Using SCSS Styles

```tsx
import styles from '@/styles/modules/mobile-app.module.scss';

export function Component() {
  return (
    <div className={styles.card}>
      <h1 className={styles.mobileHeaderTitle}>Title</h1>
      <button className={styles.buttonPrimary}>
        Click me
      </button>
    </div>
  );
}
```

## 🚀 Running the App

### Development

```bash
npm run dev
```

Open [http://localhost:3000/pwa/home](http://localhost:3000/pwa/home)

### Production Build

```bash
npm run build
npm run start
```

## 📦 PWA Features

### Manifest Configuration

The app includes a `public/manifest/manifest.json` with:
- App name and short name
- Display mode: `standalone`
- Theme color: Primary indigo (`#6366f1`)
- Icons for different sizes
- Screenshots for app stores
- Shortcuts for quick actions

### Getting Started as PWA

1. Add to home screen (mobile browsers)
2. Install app (desktop browsers)
3. App runs in standalone mode
4. Full-screen experience without address bar

### Next Steps for PWA Enhancement

- Add service worker for offline support
- Implement push notifications
- Add app icons in public/icons/
- Configure app screenshots
- Test on Android and iOS

## 🔧 Customization

### Changing Colors

Edit `/src/styles/modules/mobile-app.module.scss`:

```scss
$primary: #6366f1;        // Change primary color
$secondary: #ec4899;      // Change secondary color
$success: #10b981;        // Change success color
```

### Changing Spacing

```scss
$spacing-lg: 16px;        // Card padding
$spacing-xl: 20px;        // Section gaps
```

### Adding New Pages

1. Create folder in `/src/app/pwa/(tabs)/your-page/`
2. Add `page.tsx` file
3. Update `bottom-navigation.tsx` with new tab
4. Use `MobileAppLayout` component

### Updating Navigation Items

Edit `/src/components/mobile/navigation/bottom-navigation.tsx`:

```tsx
const navItems: NavItem[] = [
  // Add your nav items here
];
```

## 📱 Responsive Design

The app is optimized for:

**Mobile:** ≤640px
- Full-width layout
- Bottom navigation visible
- Touch-friendly buttons (44px minimum)

**Tablet:** 768px+
- Bottom navigation hidden
- Adaptive layout
- Desktop-like experience

**Dark Mode:** Automatic based on system preference

## 🎬 Animations

Available animation classes:

```scss
.animateSlideUp      // Slide up with fade
.animateSlideDown    // Slide down with fade
.animateSlideInRight // Slide in from right
.animateSlideInLeft  // Slide in from left
.animateFadeIn       // Fade in
.animatePulse        // Pulse effect
```

## 🔐 Security Considerations

- Use environment variables for API endpoints
- Validate user input on server
- Implement proper authentication
- Use HTTPS in production
- Follow PWA security best practices
- Implement CSP headers

## 📊 Performance Tips

1. Use React.memo for components that don't need frequent re-renders
2. Implement image lazy loading
3. Use dynamic imports for code splitting
4. Optimize images for mobile
5. Cache API responses
6. Use service workers for offline support

## 🤝 Contributing

When adding new features:

1. Follow the existing component structure
2. Use SCSS modules for styling
3. Maintain the design system
4. Test on mobile devices
5. Keep components reusable
6. Document new components

## 📝 License

This project is part of the HOA Management application.

## 🆘 Support

For issues or questions:
1. Check existing pages for examples
2. Review component props and usage
3. Test in browser dev tools
4. Check console for errors

## ⚡ Quick Links

- **Home Page:** `/pwa/home`
- **Invoice Page:** `/pwa/invoice`
- **Election Page:** `/pwa/election`
- **Profile Page:** `/pwa/profile`
- **Settings Page:** `/pwa/settings`
- **PWA Manifest:** `/manifest/manifest.json`

---

**Built with Next.js 15, React 19, and TypeScript** 🚀
