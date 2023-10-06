import Image from 'next/image';
import CellResult from '@/components/ui/cell-result/CellResult';
import Button from '@/components/ui/button/Button';
import { UserProfile } from '@/app/profile/client/page';

interface ProfileInfoProps {
  user?: UserProfile;
  showProfileUpdate: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user, showProfileUpdate }) => {
  return (
    <CellResult>
      <h2 className='flex justify-between items-center text-xl mb-4'>
        {user?.name}
        <Button onClick={showProfileUpdate} variant='clean' typeIcon='Settings' />
      </h2>
      <div className='flex gap-4'>
        {user?.image && (
          <div className=''>
            <Image className='max-h-[150px] max-w-[150px] min-h-[150px] min-w-[150px] object-cover' src={user?.image} width={150} height={150} alt='avatar' />
          </div>
        )}
        <div className='flex flex-col justify-center gap-2'>
          <p className='flex justify-between items-center'>
            <span className='text-base'>{user?.email}</span>
          </p>
          <p className='flex justify-between items-center'>
            <span className='text-base'>{user?.role}</span>
          </p>
          <p className='flex justify-between items-center'>
            <span className='text-base'>{user?.provider}</span>
          </p>
        </div>
      </div>
    </CellResult>
  );
};

export default ProfileInfo;
