'use client';

import React, { useEffect } from 'react';
import CellResult from '@/components/ui/cell-result/CellResult'
import { Icon } from '@/components/ui/icon/Icon'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/hooks';
import { useFindPercentageFromNumber } from '@/utils/hooks/useFindPercentageFromNumber';
import { setTwoPercentageSpending } from '@/store/slices/two/twoPercentageSpending.slice';

const TwoPercentageSpending = () => {
  const {
    filledBowlPrice: { first, second, both },
    coalsCost: { perHookah },
  } = useAppSelector((state) => state.twoResults);
  const { hookahPrice, salaryPerOneHookah, additionalExpenses } = useAppSelector(
    (state) => state.hookah
  );

  const dispatch = useAppDispatch();

  const percentageFirst =
    hookahPrice && first
      ? useFindPercentageFromNumber(+hookahPrice, +first)
      : null;

  const percentageSecond =
    hookahPrice && second
      ? useFindPercentageFromNumber(+hookahPrice, +second)
      : null;

  const percentageBoth =
    hookahPrice && both
      ? useFindPercentageFromNumber(+hookahPrice, +both)
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
      percentageFirst !== null &&
      percentageSecond !== null &&
      percentageBoth !== null &&
      percentageCoals !== null &&
      percentageSalary !== null &&
      percentageAdditionalExpenses !== null 
    ) {
      dispatch(
        setTwoPercentageSpending({
          firstTobacco: percentageFirst.toString(),
          secondTobacco: percentageSecond.toString(),
          bothTobaccos: percentageBoth.toString(),
          coals: percentageCoals.toString(),
          salary: percentageSalary.toString(),
          additionalExpenses: percentageAdditionalExpenses.toString(),
        })
      )
    }
  }, [percentageFirst, percentageSecond, percentageBoth, percentageSalary, percentageAdditionalExpenses, dispatch])

  return (
    <CellResult>
      <h5 className='mb-2 flex justify-between items-center'>
        Percentage spending <Icon type='PercentageRed' />
      </h5>
      <div className='flex items-center justify-between w-full'>
        <p>tobacco first</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageFirst}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>tobacco second</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageSecond}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>both tobaccos</p>
        <span className='flex items-center gap-1 text-red-500 font-medium'>{percentageBoth}</span>
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
  )
}

export default TwoPercentageSpending