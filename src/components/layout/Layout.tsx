import { ReactNode } from 'react';

import { Navbar } from '@/components/layout/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col items-center h-[100svh] gap-20 py-10'>
      <Navbar />
      {children}
    </div>
  );
}
