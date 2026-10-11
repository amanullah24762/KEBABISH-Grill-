import type { Metadata } from 'next';
import { HomePage } from '@/components/home-page';

export const metadata: Metadata = { title: 'Book a Table or Event | Kebabish Grill', description: 'Prepare a table or marriage hall enquiry and contact Kebabish Grill to confirm availability.' };
export default function BookingPage() { return <HomePage section="booking" />; }
