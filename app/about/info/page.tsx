import type { Metadata } from 'next';
import Information from '@/components/pages/about/information/Information';

export const metadata: Metadata = {
  title: 'Hookah Cost | Info',
  description: 'Information',
};

export default function Info() {
  return (
    <main className='min-h-screen pt-[45px]'>
      <div className='container'>
        <Information />
      </div>
    </main>
  );
}  