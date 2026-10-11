import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Menu | Kebabish Grill', description: 'Explore BBQ, rice, family favourites and Chinese dishes at Kebabish Grill, Abdul Hakim.' };
export default function MenuPage() { return <HomePage section="menu" />; }
