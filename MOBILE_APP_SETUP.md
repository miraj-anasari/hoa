# HOA Mobile App - Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Modern browser with PWA support
- Git

### Installation

```bash
# Navigate to project directory
cd /Users/miraj/Downloads/hoa-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit: **http://localhost:3000/pwa/home**

## 🔧 Development

### Project Structure

```
hoa-app/
├── src/
│   ├── app/pwa/                    # PWA app routes
│   ├── components/mobile/          # Mobile components
│   ├── styles/modules/             # SCSS modules
│   └── hooks/                      # Custom hooks
├── public/                         # Static assets
│   ├── manifest/manifest.json      # PWA manifest
│   └── icons/                      # App icons
├── package.json
└── tsconfig.json
```

### Building for Production

```bash
npm run build
npm run start
```

## 📦 PWA Setup

### 1. Add PWA Manifest Link

In `src/app/pwa/layout.tsx`, add:

```tsx
<link rel="manifest" href="/manifest/manifest.json" />
```

### 2. Create App Icons

Create icons in `public/icons/`:

- `icon-192x192.png` (192×192px)
- `icon-512x512.png` (512×512px)
- `icon-maskable-192x192.png` (Adaptive icon)
- `icon-maskable-512x512.png` (Adaptive icon)

### 3. Add Service Worker (Optional)

Create `public/service-worker.js`:

```javascript
const CACHE_NAME = 'hoa-app-v1';
const urlsToCache = [
  '/',
  '/pwa/home',
  '/pwa/invoice',
  '/pwa/election',
  '/pwa/profile',
  '/pwa/settings'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

Register in layout:

```tsx
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
}, []);
```

## 📱 Mobile Testing

### Test on Mobile Devices

#### iPhone/iPad (Safari)
1. Open in Safari
2. Tap Share → Add to Home Screen
3. App opens in fullscreen

#### Android (Chrome)
1. Open in Chrome
2. Menu → Install app
3. Or use "Add to Home Screen"

### Dev Tools

```bash
# Open DevTools with mobile emulation (Chrome)
F12 → Toggle device toolbar (Ctrl+Shift+M)

# Test PWA features
DevTools → Application → Manifest
DevTools → Application → Service Workers
```

## 🎯 Features to Add

### Offline Support

```tsx
// In component
import { useState, useEffect } from 'react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
    
    return () => {
      window.removeEventListener('online', () => {});
      window.removeEventListener('offline', () => {});
    };
  }, []);

  if (!isOnline) {
    return <div>You are offline</div>;
  }

  return null;
}
```

### Push Notifications

```tsx
// Request permission
async function requestNotificationPermission() {
  if ('Notification' in window && 'serviceWorker' in navigator) {
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      const registration = await navigator.serviceWorker.ready;
      registration.showNotification('HOA Alert', {
        body: 'New message',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-192x192.png'
      });
    }
  }
}
```

### App Shortcuts

Already configured in `manifest.json`:
- Pay Now → `/pwa/invoice?action=pay`
- View Invoices → `/pwa/invoice`

## 🏗️ Building APK for Android

### Using Capacitor

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize
npx cap init

# Build Next.js
npm run build

# Add Android platform
npx cap add android

# Build APK
npx cap copy
npx cap open android

# In Android Studio:
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

### App Configuration

`capacitor.config.json`:

```json
{
  "appId": "com.hoa.management",
  "appName": "HOA Management",
  "webDir": "out",
  "plugins": {
    "SplashScreen": {
      "launchAutoHide": true
    }
  }
}
```

## 🍎 Building IPA for iOS

### Using Capacitor

```bash
# Add iOS platform
npx cap add ios

# Build IPA
npx cap copy
npx cap open ios

# In Xcode:
# Product → Archive
# Distribute App → App Store Connect
```

## 🔐 Security Checklist

- [ ] Use HTTPS in production
- [ ] Validate all user inputs
- [ ] Protect sensitive data
- [ ] Use secure cookies
- [ ] Implement CORS properly
- [ ] Add CSP headers
- [ ] Keep dependencies updated
- [ ] Implement rate limiting
- [ ] Use environment variables
- [ ] Regular security audits

## ⚡ Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/image.png"
  alt="Description"
  width={200}
  height={200}
  loading="lazy"
/>
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/heavy'),
  { loading: () => <div>Loading...</div> }
);
```

### Bundle Analysis

```bash
npm run build
# Check .next/static for bundle size
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your-secret-key
```

### Production Build Checklist

- [ ] Update manifest.json with correct URLs
- [ ] Add production API endpoints
- [ ] Configure error tracking
- [ ] Set up analytics
- [ ] Enable caching headers
- [ ] Test PWA manifest validation
- [ ] Verify app icons load correctly
- [ ] Test on real devices
- [ ] Check performance metrics
- [ ] Review security headers

## 📊 Monitoring

### Browser Compatibility

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

### PWA Support

- Manifest: All modern browsers
- Service Workers: All modern browsers
- Offline: Requires service worker
- Notifications: Chrome, Firefox, Edge

## 🐛 Troubleshooting

### App Not Installing

1. Check manifest.json syntax
2. Verify icons exist at correct paths
3. Ensure HTTPS in production
4. Clear browser cache

### Service Worker Not Updating

```bash
# Force update
DevTools → Application → Service Workers → Unregister
# Hard refresh: Ctrl+Shift+R
```

### Performance Issues

1. Check Chrome DevTools → Lighthouse
2. Optimize images
3. Reduce bundle size
4. Enable gzip compression
5. Use CDN for static assets

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Capacitor Guide](https://capacitorjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🆘 Support

### Common Issues

**Issue:** App not loading
- **Solution:** Check network tab, verify API endpoints

**Issue:** Dark mode not working
- **Solution:** Check `useTheme` hook implementation

**Issue:** Cards not responsive
- **Solution:** SCSS module is mobile-first by default

**Issue:** Animations lag
- **Solution:** Reduce animation duration, check GPU usage

## ✅ Testing Checklist

- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Test offline mode
- [ ] Test notifications
- [ ] Test app install
- [ ] Test all navigation
- [ ] Test all forms
- [ ] Test dark mode
- [ ] Test performance
- [ ] Test accessibility

---

**Ready to deploy? Follow the Production Build Checklist above!** 🚀
