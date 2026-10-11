export const restaurant = {
  name: 'Kebabish Grill',
  phone: '+923337472104',
  displayPhone: '0333 7472104',
  address: 'Ghosia Chowk, Tulamba Road, Abdul Hakim',
  maps: 'https://www.google.com/maps/search/?api=1&query=Kebabish+Grill+Family+Restaurant+BBQ+Abdul+Hakim',
};

export const whatsapp = (message: string) => `https://wa.me/${restaurant.phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
export type MenuItem = { id: string; name: string; category: string; description: string; image: string; badge?: string };
// Add verified prices here when the restaurant supplies its current menu.
export const menuItems: MenuItem[] = [
  { id: 'bbq', name: 'BBQ & Tikka', category: 'BBQ', description: 'Flame-grilled favourites with bold Pakistani flavour. Ask our team about today’s cuts and portions.', image: '/images/bbq-platter.webp', badge: 'FROM THE GRILL' },
  { id: 'family', name: 'Family Favourites', category: 'Pakistani', description: 'A generous meal to share, with traditional flavours and bread for the table.', image: '/images/family-meal.webp', badge: 'MADE TO SHARE' },
  { id: 'rice', name: 'Rice & Biryani', category: 'Rice', description: 'Aromatic rice for a comforting family meal. Confirm today’s biryani and rice options with us.', image: '/images/rice-platter.webp' },
  { id: 'chinese', name: 'Chinese Favourites', category: 'Chinese', description: 'Colourful rice and saucy favourites for something a little different at your table.', image: '/images/chinese-platter.webp' },
];
export const galleryPhotos = [
  { name: 'A table for everyone', category: 'Restaurant', image: '/images/restaurant-interior.webp' },
  { name: 'Family dining', category: 'Restaurant', image: '/images/family-dining.webp' },
  { name: 'Fresh from the grill', category: 'Food', image: '/images/bbq-platter.webp' },
  { name: 'Your special occasion', category: 'Celebrations', image: '/images/celebration-stage.webp' },
  { name: 'A warm welcome', category: 'Restaurant', image: '/images/restaurant-entrance.webp' },
  { name: 'Gather around', category: 'Celebrations', image: '/images/celebration-dining.webp' },
  { name: 'Flavours worth sharing', category: 'Food', image: '/images/rice-platter.webp' },
  { name: 'Something for the table', category: 'Food', image: '/images/chinese-platter.webp' },
];
