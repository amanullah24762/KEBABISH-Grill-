import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { RestaurantShell } from '@/components/restaurant-shell';
import './restaurant.css';
import './brand-theme.css';
import './image-loading.css';
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const heading = Poppins({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--font-heading', display: 'swap' });
export const metadata: Metadata = {
  title: 'Kebabish Grill | Family Restaurant & Marriage Hall, Abdul Hakim',
  description: 'Explore BBQ, Pakistani favourites, family dining and celebrations at Kebabish Grill, Ghosia Chowk, Tulamba Road, Abdul Hakim.',
  icons: { icon: [{ url: '/images/kebabish-logo.svg', type: 'image/svg+xml' }], shortcut: '/images/kebabish-logo.svg' },
  openGraph: { title: 'Kebabish Grill — Fresh From the Grill', description: 'Family dining and memorable occasions in Abdul Hakim.', locale: 'en_PK', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${body.variable} ${heading.variable}`}><RestaurantShell>{children}</RestaurantShell></body></html>; }
