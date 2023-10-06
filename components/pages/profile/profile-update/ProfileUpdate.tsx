'use client';

import React, { FC } from 'react';
import { SubmitHandler, useForm, get } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import Cell from '@/components/ui/cell/Cell';
import ActionButtons from '@/components/ui/action-buttons/ActionButtons';

import { PROFILE_UPDATE_FIELDS as fields } from '@/utils/constants/field.constants';
import { profileUpdateSchema } from '@/utils/validation/profileUpdateSchema';
import { updateUser } from '@/actions/auth.actions';

interface ProfileUpdateProps {
  isShow: boolean;
  showProfileUpdate: () => void;
  update?: (data: ProfileUpdateValues) => void;
}

type ProfileUpdateValues = {
  name: string;
  image: string;
};

const ProfileUpdate: FC<ProfileUpdateProps> = ({ isShow, showProfileUpdate, update }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<ProfileUpdateValues>({
    mode: 'onChange',
    resolver: zodResolver(profileUpdateSchema),
  });

  const handleCancel = () => {
    showProfileUpdate();
    reset();
  };

  const onSubmit: SubmitHandler<ProfileUpdateValues> = async (data) => {
    const { name, image } = data;

    if (update) {
      // when update() is run client side, the page will re-render
      // server side won't re-render
      update({ name, image });
    }

    const res = await updateUser({ name, image });
    if (res?.message) alert(res?.message); //! fix
    // console.log('RES DATA: ', res);
    showProfileUpdate();
    reset();
  };

  if (isShow === false) return null;

  return (
    <div className='absolute inset-0 flex items-center'>
      <Cell>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ id, name, label, tooltip }, index) => (
            <React.Fragment key={id}>
              <Field
                id={id}
                register={register}
                name={name}
                tooltip={tooltip}
                label={label}
                error={get(errors, name)?.message}
              />
            </React.Fragment>
          ))}

          <div className='mt-8'>
            <ActionButtons
              onClickFirst={handleCancel}
              // onClickSecond={handleUpdate}
              titleFirst='Cancel'
              titleSecond='Update'
              iconFirst='Cancel'
              iconSecond='Save'
              isValid={isValid}
            />
          </div>
        </form>
      </Cell>
    </div>
  );
};

export default ProfileUpdate;
