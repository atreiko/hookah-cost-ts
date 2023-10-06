'use client';

import React, { useEffect } from 'react';
import CellResult from '@/components/ui/cell-result/CellResult';
import { Icon } from '@/components/ui/icon/Icon';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/hooks';
import { useFindPercentageFromNumber } from '@/utils/hooks/useFindPercentageFromNumber';
import { setOnePercentageSpending } from '@/store/slices/one/onePercentageSpending.slice';

interface IPercentageSpending {
  tobacco: number | null;
  coals: number | null;
  salary: number | null;
  additionalExpenses: number | null;
}

const OnePercentageSpending = () => {
  const {
    filledBowlPrice,
    coalsCost: { perHookah },
  } = useAppSelector((state) => state.oneResults);
  const { hookahPrice, salaryPerOneHookah, additionalExpenses } = useAppSelector(
    (state) => state.hookah
  );

  const dispatch = useAppDispatch();

  const percentageTobacco =
    hookahPrice && filledBowlPrice
      ? useFindPercentageFromNumber(+hookahPrice, +filledBowlPrice)
      : null;

  const percentageCoals =
    hookahPrice && perHookah 
      ? useFindPercentageFromNumber(+hookahPrice, +perHookah) 
      : null;

  const percentageSalary =
    hookahPrice && salaryPerOneHookah
      ? useFindPercentageFromNumber(+hookahPrice, +salaryPerOneHookah)
      : null;

  const percentageAdditionalExpenses =
    hookahPrice && additionalExpenses
      ? useFindPercentageFromNumber(+hookahPrice, +additionalExpenses)
      : null;

  useEffect(() => {
    if (
      percentageTobacco !== null &&
      percentageCoals !== null &&
      percentageSalary !== null &&
      percentageAdditionalExpenses !== null
    ) {
      dispatch(
        setOnePercentageSpending({
          tobacco: percentageTobacco.toString(),
          coals: percentageCoals.toString(),
          salary: percentageSalary.toString(),
          additionalExpenses: percentageAdditionalExpenses.toString(),
        })
      );
    }
  }, [percentageTobacco, percentageCoals, percentageSalary, percentageAdditionalExpenses, dispatch]);

  return (
    <CellResult>
      <h5 className='mb-2 flex justify-between items-center'>
        Percentage spending <Icon type='PercentageRed' />
      </h5>
      <div className='flex items-center justify-between w-full'>
        <p>tobacco</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageTobacco}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>coals</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageCoals}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>salary</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageSalary}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>additional expenses</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageAdditionalExpenses}</span>
      </div>
    </CellResult>
  );
};

export default OnePercentageSpending;
