import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Menu | Kebabish Grill', description: 'Explore BBQ, rice, family favourites and Chinese dishes at Kebabish Grill, Abdul Hakim.' };
export default async function MenuPage({ searchParams }: { searchParams: Promise<{ category?: string | string[] }> }) {
  const { category } = await searchParams;
  const initialCategory = typeof category === 'string' && ['BBQ', 'Pakistani', 'Rice', 'Chinese'].includes(category) ? category : 'All';
  return <HomePage section="menu" initialCategory={initialCategory}/>;
}
