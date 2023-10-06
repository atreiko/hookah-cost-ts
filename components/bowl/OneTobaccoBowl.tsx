import React, { FC } from 'react';
import { SubmitHandler, useForm, get } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import Cell from '@/components/ui/cell/Cell';

import { OneTobaccoBowlSchema } from '@/utils/validation/oneTobaccoBowlSchema';
import { useAppDispatch } from '@/utils/hooks/hooks';
import { BOWL_FIELDS as fields } from '@/utils/constants/field.constants';

import { setOneTobaccoBowl } from '@/store/slices/one/oneTobaccoBowl.slice';

type OneTobaccoBowlType = {
  bowlCapacity: string;
};

const OneTobaccoBowl: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<OneTobaccoBowlType>({
    mode: 'onChange',
    resolver: zodResolver(OneTobaccoBowlSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<OneTobaccoBowlType> = (data) => {
    dispatch(setOneTobaccoBowl(data))
  };

  return (
    <Cell title='Bowl'>
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

        <div className='flex justify-end mt-5'>
          <Button typeIcon={!isValid ? null : 'Done'} isValid={isValid}>
            Submit
          </Button>
        </div>
      </form>
    </Cell>
  );
};

export default OneTobaccoBowl;
