'use client';

import React from 'react';
import { SubmitHandler, useForm, get } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
// import Button from '@/components/ui/button/Button';
import ActionButtons from '@/components/ui/action-buttons/ActionButtons';
import Cell from '@/components/ui/cell/Cell';

import { SIGN_UP_FIELDS as fields } from '@/utils/constants/field.constants';
import { SignUpFormValues, SignUpSchema } from '@/utils/validation/authSchema';

// type SignUpType = {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpFormValues>({
    mode: 'onChange',
    resolver: zodResolver(SignUpSchema),
  });

  const handleCancel = () => {};

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    console.log('SIGN UP: ', data);
  };

  return (
    <Cell title='Sign Up'>
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
            titleSecond='Confirm'
            iconFirst='Cancel'
            iconSecond='Save'
            isValid={isValid}
          />
        </div>
      </form>
    </Cell>
  );
};

export default SignUp;
