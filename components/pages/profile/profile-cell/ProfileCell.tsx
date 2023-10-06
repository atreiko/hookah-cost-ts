'use client';

import React, { useState } from 'react';
import ProfileInfo from '../profile-info/ProfileInfo';
import ProfileUpdate from '../profile-update/ProfileUpdate';

const ProfileCell = ({ user, update }: any) => {
  const [isShow, setIsShow] = useState(false);

  const showProfileUpdate = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className='relative overflow-hidden rounded-xl shadow-md shadow-neutral-950 min-h-[220px]'>
      <ProfileInfo user={user} showProfileUpdate={showProfileUpdate} />
      <ProfileUpdate isShow={isShow} showProfileUpdate={showProfileUpdate} update={update} />
    </div>
  );
};

export default ProfileCell;
