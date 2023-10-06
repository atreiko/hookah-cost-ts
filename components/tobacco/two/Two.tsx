import React, { FC } from 'react';
import { SubmitHandler, useForm, get } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import Button from '@/components/ui/button/Button';
import Coal from '@/components/coal/Coal';
import TwoTobaccosBowl from '@/components/bowl/TwoTobaccosBowl';
import Hookah from '@/components/hookah/Hookah';
import Cell from '@/components/ui/cell/Cell';

import { TwoTobaccosSchema } from '@/utils/validation/twoTobaccosSchema';
import { useAppDispatch } from '@/utils/hooks/hooks';
import { TOBACCO_FIELDS_FOR_TWO as fields } from '@/utils/constants/field.constants';

import { setTwoTobaccos } from '@/store/slices/two/twoTobaccos.slice';

type TwoType = {
  tobaccoPrice: string;
  tobaccoWeight: string;
  secondTobaccoPrice: string;
  secondTobaccoWeight: string;
};

const Two: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<TwoType>({
    mode: 'onChange',
    resolver: zodResolver(TwoTobaccosSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TwoType> = (data) => {
    console.log('TWO DATA: ', data);
    dispatch(setTwoTobaccos(data));
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
      <TwoTobaccosBowl />
      <Hookah />
    </>
  );
};

export default Two;
