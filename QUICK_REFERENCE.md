# 🚀 HOA Mobile App - Quick Reference

## Start Development

```bash
npm run dev
# Visit: http://localhost:3000/pwa/home
```

## Folder Structure at a Glance

```
📁 src/app/pwa/
  📄 layout.tsx          → PWA root layout
  📄 page.tsx            → Redirects to /home
  📁 (tabs)/
    📄 layout.tsx        → Tabs layout
    📁 home/            → Dashboard
    📁 invoice/         → Bills
    📁 election/        → Voting
    📁 profile/         → User info
    📁 settings/        → App settings

📁 src/components/mobile/
  📁 layout/
    📄 mobile-app-layout.tsx     → Main wrapper
  📁 navigation/
    📄 bottom-navigation.tsx     → Tab navigation
  📁 headers/
    📄 mobile-header.tsx         → Header
  📁 cards/
    📄 mobile-cards.tsx          → Card components
    📄 skeleton-loader.tsx       → Loading skeletons
  📄 advanced-components.tsx     → Modal, Tabs, etc.
  📄 examples.tsx                → Copy-paste examples

📁 src/styles/modules/
  📄 mobile-app.module.scss      → All styles

📁 src/hooks/
  📄 use-theme.ts                → Theme management
  📄 use-pull-to-refresh.ts      → Pull-to-refresh

📁 public/
  📁 manifest/
    📄 manifest.json             → PWA config
  📁 icons/                      → Add app icons here
```

## Common Components

### Basic Layout

```tsx
import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';

export default function Page() {
  return <MobileAppLayout title="Title">{/* content */}</MobileAppLayout>;
}
```

### Cards (Copy-Paste)

```tsx
import { Card, GradientCard, SummaryCard, ListItem } from '@/components/mobile/cards/mobile-cards';
import { DollarSign } from 'lucide-react';

// Simple card
<Card>Content here</Card>

// Gradient card
<GradientCard type="primary">Gradient content</GradientCard>

// Stats card
<SummaryCard
  icon={<DollarSign size={20} />}
  title="Balance"
  value="₹5,000"
  type="primary"
/>

// List item
<ListItem title="Item" subtitle="Description" value="₹100" />
```

### Advanced Components

```tsx
import {
  Modal, Tabs, ProgressBar, Rating, Accordion, Toast, AvatarGroup
} from '@/components/mobile/advanced-components';

// Modal
<Modal isOpen={true} onClose={() => {}}>Content</Modal>

// Tabs
<Tabs tabs={[{id:'1', label:'Tab', content:<div/>}]} />

// Progress
<ProgressBar value={50} max={100} label="Progress" />

// Rating
<Rating value={4} max={5} onChange={setRating} />

// Accordion
<Accordion items={[{id:'1', title:'Q', content:<p>A</p>}]} />

// Toast
<Toast message="Success!" type="success" duration={3000} />

// Avatars
<AvatarGroup avatars={['John', 'Jane']} max={3} />
```

## Styling with SCSS

```tsx
import styles from '@/styles/modules/mobile-app.module.scss';

<div className={styles.card}>
  <h1 className={styles.mobileHeaderTitle}>Title</h1>
  <button className={styles.buttonPrimary}>Click</button>
</div>
```

## Available Style Classes

**Layout:**
- `mobileAppContainer` - App wrapper
- `mobileAppContent` - Main content area
- `mobileHeader` - Header
- `bottomNavigation` - Bottom nav

**Components:**
- `card` - Basic card
- `cardInteractive` - Clickable card
- `cardGradientPrimary` - Indigo gradient
- `cardGradientSecondary` - Pink gradient
- `cardGradientSuccess` - Green gradient
- `cardGradientWarning` - Amber gradient

**Buttons:**
- `button` - Base button
- `buttonPrimary` - Blue button
- `buttonSecondary` - Gray button
- `buttonIconOnly` - Icon button (circular)

**Badges:**
- `badge` - Base badge
- `badgePrimary` - Blue badge
- `badgeSuccess` - Green badge
- `badgeWarning` - Amber badge
- `badgeDanger` - Red badge

**Inputs:**
- `input` - Text input field

**Loading:**
- `skeleton` - Skeleton animation
- `skeletonCard` - Card skeleton
- `skeletonText` - Text skeleton

**Animations:**
- `animateSlideUp` - Slide up + fade
- `animateSlideDown` - Slide down + fade
- `animateSlideInRight` - Slide right + fade
- `animateSlideInLeft` - Slide left + fade
- `animateFadeIn` - Fade in
- `animatePulse` - Pulse effect

**Utilities:**
- `textCenter` - Center text
- `textPrimary` - Dark text
- `textSecondary` - Gray text
- `textMuted` - Light gray text
- `textTruncate` - Truncate text

## Color Palette

```scss
Primary:    #6366f1
Secondary:  #ec4899
Success:    #10b981
Warning:    #f59e0b
Danger:     #ef4444

Light text: #1f2937
Gray text:  #6b7280
Muted text: #9ca3af
```

## Spacing

```scss
xs: 4px   | sm: 8px   | md: 12px
lg: 16px  | xl: 20px  | 2xl: 24px | 3xl: 32px
```

## Create New Page

1. **Create folder:**
   ```
   src/app/pwa/(tabs)/my-page/
   ```

2. **Create page.tsx:**
   ```tsx
   'use client';
   import { MobileAppLayout } from '@/components/mobile/layout/mobile-app-layout';
   
   export default function MyPage() {
     return <MobileAppLayout title="My Page">{/* content */}</MobileAppLayout>;
   }
   ```

3. **Update navigation** in `src/components/mobile/navigation/bottom-navigation.tsx`

## Hooks

```tsx
// Theme
import { useTheme } from '@/hooks/use-theme';
const { theme, setTheme } = useTheme();

// Pull-to-refresh
import { usePullToRefresh } from '@/hooks/use-pull-to-refresh';
const { containerRef, isRefreshing } = usePullToRefresh({
  onRefresh: async () => {},
  threshold: 60
});
```

## Quick Styling Tips

### Center content
```scss
@include flex-center;
```

### Between layout
```scss
@include flex-between;
```

### Dark mode
```scss
@include dark-mode {
  color: $dark-text-primary;
}
```

### Gradient
```scss
@include gradient-primary;
@include gradient-secondary;
@include gradient-success;
@include gradient-warning;
```

### Card
```scss
@include card-base;
@include card-interactive;
```

## Icons (Lucide React)

```tsx
import {
  Home,
  FileText,
  Vote,
  User,
  Settings,
  DollarSign,
  Plus,
  Edit,
  Trash,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  Check,
  AlertCircle,
  // ... hundreds more
} from 'lucide-react';

<Home size={20} />
<FileText size={24} />
```

## Common Patterns

### Conditional Rendering
```tsx
{isLoading ? <SkeletonLoader /> : <Card>Content</Card>}
```

### Form Handling
```tsx
const [data, setData] = useState({});
const handleChange = (e) => setData({...data, [e.target.name]: e.target.value});
const handleSubmit = () => { /* API call */ };
```

### List Rendering
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  {items.map(item => <Card key={item.id}>{item.name}</Card>)}
</div>
```

### Grid Layout
```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '12px'
}}>
  {/* 2 column grid */}
</div>
```

### Bottom Padding Fix
```tsx
<div style={{ marginBottom: '40px' }}>
  {/* Accounts for bottom nav */}
</div>
```

## Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Deploy to Vercel
vercel deploy
```

## Testing Checklist

- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Bottom navigation works
- [ ] All pages load
- [ ] Cards display correctly
- [ ] Buttons are clickable
- [ ] Dark mode works
- [ ] App installs as PWA

## Troubleshooting

| Issue | Solution |
|-------|----------|
| App not loading | Check console errors, clear cache |
| Styles not working | Verify import path, restart dev server |
| Navigation broken | Check bottom-navigation.tsx routes |
| Dark mode not working | Check useTheme hook, system preference |
| Performance lag | Check Lighthouse, optimize images |

## Useful Docs

- 📖 [Next.js Docs](https://nextjs.org/docs)
- ⚛️ [React Docs](https://react.dev)
- 🎨 [SCSS Docs](https://sass-lang.com/documentation)
- 📱 [PWA Guide](https://web.dev/progressive-web-apps/)
- 🎯 [Lucide Icons](https://lucide.dev)

## Key Features Recap

✅ Native Android/iOS feel
✅ Bottom tab navigation
✅ Smooth animations
✅ Dark mode support
✅ PWA ready
✅ Touch-friendly
✅ Responsive design
✅ Modern cards
✅ Gradient effects
✅ Skeleton loading
✅ TypeScript
✅ SCSS modules

## Next Steps

1. ✅ Explore existing pages
2. ✅ Copy-paste examples
3. ✅ Create new pages
4. ✅ Customize colors
5. ✅ Add API calls
6. ✅ Deploy to production

---

**Happy coding! 🚀**
