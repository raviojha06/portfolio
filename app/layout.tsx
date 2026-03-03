import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Ravi Ojha | Vibe Coder & SEO Consultant',
  description: 'Vibe Coding with AI + Bulletproof SEO. I build fast, beautiful, search-engine-loving digital products.',
  keywords: ['vibe coding', 'AI coding', 'SEO consultant', 'Next.js developer', 'web development', 'Ravi Ojha'],
  authors: [{ name: 'Ravi Ojha' }],
  openGraph: {
    title: 'Ravi Ojha | Vibe Coder & SEO Consultant',
    description: 'Turning ideas into high-ranking, high-vibe digital experiences.',
    images: [{ url: 'https://picsum.photos/id/1015/1200/630' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-zinc-950 text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
