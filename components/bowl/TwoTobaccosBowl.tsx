'use client';

import React, { useEffect } from 'react';
import { useForm, get, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Field from '@/components/ui/field/Field';
import FieldSelect from '@/components/ui/field-select/FieldSelect';
import Button from '@/components/ui/button/Button';
import Cell from '@/components/ui/cell/Cell';

import { TwoTobaccosBowlSchema } from '@/utils/validation/twoTobaccosBowlSchema';
import { useAppDispatch } from '@/utils/hooks/hooks';
import {
  BOWL_FIELDS as fields,
  BOWL_PERCENTAGE_FIRST_SELECT as options,
} from '@/utils/constants/field.constants';
import {
  BOWL_PERCENTAGE_FIRST_TOOLTIP as firstTooltip,
  BOWL_PERCENTAGE_SECOND_TOOLTIP as secondTooltip,
} from '@/utils/constants/string.constants';

import { setTwoTobaccosBowl } from '@/store/slices/two/twoTobaccosBowl.slice';

type TwoTobaccosBowlType = {
  bowlCapacity: string;
  percentageFirst: string;
  percentageSecond: string;
};

const TwoTobaccosBowl = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<TwoTobaccosBowlType>({
    mode: 'onChange',
    resolver: zodResolver(TwoTobaccosBowlSchema),
    defaultValues: {
      bowlCapacity: '',
      percentageFirst: '50',
      percentageSecond: '50',
    },
  });

  const dispatch = useAppDispatch();

  const percentageFirstValue = watch('percentageFirst');

  useEffect(() => {
    if (percentageFirstValue) {
      setValue('percentageSecond', String(100 - Number(percentageFirstValue)));
    }
  }, [percentageFirstValue]);

  const onSubmit: SubmitHandler<TwoTobaccosBowlType> = (data) => {
    dispatch(setTwoTobaccosBowl(data));
  };

  return (
    <Cell title='Bowl'>
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

        <FieldSelect
          id='percentage-first'
          name='percentageFirst'
          label='first tobacco percentage'
          options={options}
          tooltip={firstTooltip}
          register={register}
        />

        <Field
          id='percentage-second'
          register={register}
          name='percentageSecond'
          tooltip={secondTooltip}
          label='second tobacco percentage'
          error={get(errors, 'percentageSecond')?.message}
          disabled={true}
        />

        <div className='flex justify-end mt-5'>
          <Button typeIcon={!isValid ? null : 'Done'} isValid={isValid}>
            Submit
          </Button>
        </div>
      </form>
    </Cell>
  );
};

export default TwoTobaccosBowl;
