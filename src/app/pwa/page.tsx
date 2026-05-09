// PWA Index - Redirect to Home

import { redirect } from 'next/navigation';

export default function PwaIndex() {
  redirect('/pwa/home');
}
