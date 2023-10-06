'use client';
// import { useSession } from 'next-auth/react';
import ProfileComponent from '@/components/pages/profile/profile-component/ProfileComponent';
import { IUser } from '@/models/userModel';

export interface UserProfile extends IUser {
  createdAt: string;
  updatedAt: string;
}

const ProfileClientPage = () => {
  // const { data: session, update } = useSession();

  return (
    <div className='min-h-screen pt-[45px]'>
      <div className='container'>
        {/* <h2>ProfileClientPage</h2> */}
        <ProfileComponent /> 
      </div>
    </div>
  );
};

export default ProfileClientPage;
