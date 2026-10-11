export function Icon({ name = 'flame', size = 22 }: { name?: 'flame' | 'arrow' | 'pin' | 'phone' | 'bag' | 'menu' | 'close' | 'chat' | 'heart' | 'clock' | 'check'; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    flame: <path d="M12 3q1 4 4 6.5t3 5.5a7 7 0 0 1-14 0q0-3 2-5c0 4 4 4 4 1 0-2-2-3-1.5-5Q10 4 12 3Z"/>,
    arrow: <><path d="M7 7h10v10"/><path d="m7 17 10-10"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    phone: <path d="M22 17v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3l2 6-3 2a14 14 0 0 0 8 8l2-3Z"/>,
    bag: <><path d="M4 7h16v14H4ZM4 7l3-5h10l3 5"/><path d="M8 10a4 4 0 0 0 8 0"/></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
    close: <path d="m6 6 12 12M6 18 18 6"/>,
    chat: <path d="M21 11a9 9 0 0 1-13 8l-6 3 2-6A9 9 0 1 1 21 11Z"/>,
    heart: <path d="M20 4c-3-3-7-1-8 2-1-3-5-5-8-2-5 5 2 11 8 16 6-5 13-11 8-16Z"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
