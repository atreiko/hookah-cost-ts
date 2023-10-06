'use client';
import ProtectedComponent from '@/components/protected/ProtectedComponent';
// import { useSession } from 'next-auth/react';

const ProtectedClientPage = () => {
  // const { data: session } = useSession();

  // console.log('protected client page session: ', session);

  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        <h2 className='py-4 text-xl'>PROTECTED CLIENT PAGE</h2>
        <ProtectedComponent />
      </div>
    </div>
  );
};

export default ProtectedClientPage;
