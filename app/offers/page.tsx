import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Offers & Occasions | Kebabish Grill', description: 'Ask about current offers, family meals and celebration arrangements at Kebabish Grill in Abdul Hakim.' };
export default function OffersPage() { return <HomePage section="offers"/>; }
