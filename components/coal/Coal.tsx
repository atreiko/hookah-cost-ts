import React, { FC } from 'react';
import { useForm, get, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Cell from '../ui/cell/Cell';
import Field from '../ui/field/Field';
import FieldSelect from '../ui/field-select/FieldSelect';
import Button from '../ui/button/Button';

import { CoalSchema } from '@/utils/validation/coalSchema';
import { useAppDispatch } from '@/utils/hooks/hooks';
import {
  COAL_PIECES_PER_KG_SELECT as selectFields,
  COAL_FIELDS as fields,
} from '@/utils/constants/field.constants';
import { COAL_PIECES_PER_KG_TOOLTIP as selectTooltip } from '@/utils/constants/string.constants';

import { setCoal } from '@/store/slices/coal.slice';

type CoalType = {
  piecesPerKg: string;
  coalPriceKg: string;
  coalConsumption: string;
};

const Coal: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<CoalType>({
    mode: 'onChange',
    resolver: zodResolver(CoalSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<CoalType> = (data) => {
    dispatch(setCoal(data));
  };

  return (
    <Cell title='Coal'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSelect
          id='pieces-per-kg'
          name='piecesPerKg'
          label='pieces per kilogram'
          tooltip={selectTooltip}
          options={selectFields}
          register={register}
        />

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

export default Coal;
