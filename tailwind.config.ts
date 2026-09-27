import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { coal: '#120f0d', ember: '#8e1c16', saffron: '#d9a441', cream: '#f6f0e7' }, fontFamily: { display: ['var(--font-display)'], body: ['var(--font-body)'] } } }, plugins: [] };
export default config;
