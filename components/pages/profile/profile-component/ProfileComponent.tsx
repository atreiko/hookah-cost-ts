'use client';

import { useSession } from 'next-auth/react';
import CellResult from '@/components/ui/cell-result/CellResult';
import { IUser } from '@/models/userModel';
import ProfileCell from '../profile-cell/ProfileCell';
import { UserProfile } from '@/app/profile/client/page';

interface ProfileComponentProps {
  user?: UserProfile;
  // update?: () => void;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ user }) => {
  const { data: session, update } = useSession()

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-8 mb-8'>
      <ProfileCell user={session?.user || user} update={update} />
      <CellResult>Chart</CellResult>
      <CellResult>Something</CellResult>
      <CellResult>Something</CellResult>
      <CellResult>Something</CellResult>
    </div>
  );
};

export default ProfileComponent;

