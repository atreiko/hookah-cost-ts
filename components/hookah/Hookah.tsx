'use client';

import React, { FC } from 'react';
import { useForm, get, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Cell from '../ui/cell/Cell';
import Field from '../ui/field/Field';
import Button from '../ui/button/Button';

import { HookahSchema } from '@/utils/validation/hookahSchema';
import { useAppDispatch } from '@/utils/hooks/hooks';
import { HOOKAH_FIELDS as fields } from '@/utils/constants/field.constants';
import { setHookah } from '@/store/slices/hookah.slice';

type HookahType = {
  hookahPrice: string;
  salaryPerOneHookah: string;
  additionalExpenses: string;
};

const Hookah = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<HookahType>({
    mode: 'onChange',
    resolver: zodResolver(HookahSchema),
    defaultValues: {
      hookahPrice: '',
      salaryPerOneHookah: '0',
      additionalExpenses: '0',
    }
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<HookahType> = (data) => {
    dispatch(setHookah(data));
  };

  return (
    <Cell title='Hookah'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ id, name, label, tooltip }) => (
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

        <div className='flex justify-end mt-5'>
          <Button typeIcon={!isValid ? null : 'Done'} isValid={isValid}>
            Submit
          </Button>
        </div>
      </form>
    </Cell>
  );
};

export default Hookah;
