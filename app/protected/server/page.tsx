'use server';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProtectedComponent from '@/components/protected/ProtectedComponent';


const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);

  console.log('protected server page session: ', session);

  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        <h2 className='py-4 text-xl'>PROTECTED SERVER PAGE</h2>
        <ProtectedComponent user={session?.user} />
      </div>
    </div>
  );
};

export default ProtectedServerPage;
