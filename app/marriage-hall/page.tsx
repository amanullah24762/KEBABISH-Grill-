import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Marriage Hall | Kebabish Grill', description: 'Explore the setting for weddings, receptions and family celebrations at Kebabish Grill in Abdul Hakim.' };
export default function MarriageHallPage() { return <HomePage section="hall" />; }
