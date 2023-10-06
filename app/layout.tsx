import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import Providers from '@/components/providers/Providers';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hookah Cost',
  description: 'Hookah manager',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
