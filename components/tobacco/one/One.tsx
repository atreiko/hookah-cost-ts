import React, { FC } from 'react';
import { SubmitHandler, useForm, get } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import Coal from '@/components/coal/Coal';
import OneTobaccoBowl from '@/components/bowl/OneTobaccoBowl';
import Hookah from '@/components/hookah/Hookah';
import Cell from '@/components/ui/cell/Cell';

import { OneTobaccoSchema } from '@/utils/validation/oneTobaccoSchema';
import { useAppDispatch } from '@/utils/hooks/hooks';
import { TOBACCO_FIELDS_FOR_ONE as fields } from '@/utils/constants/field.constants';

import { setOneTobacco } from '@/store/slices/one/oneTobacco.slice';

type OneType = {
  tobaccoPrice: string;
  tobaccoWeight: string;
};

const One: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<OneType>({
    mode: 'onChange',
    resolver: zodResolver(OneTobaccoSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<OneType> = (data) => {
    dispatch(setOneTobacco(data));
  };

  return (
    <>
      <Cell title='Tobacco'>
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
      <Coal />
      <OneTobaccoBowl />
      <Hookah />
    </>
  );
};

export default One;
