'use server';
import { getServerSession } from 'next-auth';
import ProfileComponent from '@/components/pages/profile/profile-component/ProfileComponent';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const ProfileServerPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        {/* <h2>ProfileServerPage</h2> */}
        <ProfileComponent user={session?.user} />
      </div>
    </div>
  );
};

export default ProfileServerPage;
