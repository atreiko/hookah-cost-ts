'use client';

import React, { useEffect } from 'react';
import Total from '../Total';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/hooks';
import { useFindNumberFromPercentage } from '@/utils/hooks/useFindNumberFromPercentage';
import { setCost } from '@/store/slices/total.slice';

const OneCost: React.FC = () => {
  const { hookahPrice } = useAppSelector((state) => state.hookah);
  const { tobacco, coals, salary, additionalExpenses } = useAppSelector(
    (state) => state.oneSpending
  );

  const dispatch = useAppDispatch();

  const totalPercentage =
    tobacco && coals && salary && additionalExpenses
      ? [tobacco, coals, salary, additionalExpenses]
          .reduce((acc, currentValue) => acc + (parseFloat(currentValue) || 0), 0)
          .toFixed(1)
          .toString()
      : null;

  const cost = 
    totalPercentage 
      ? useFindNumberFromPercentage(+hookahPrice, +totalPercentage)
      : null;

  useEffect(() => { 
    if (totalPercentage !== null && cost !== null) {
      dispatch(setCost({ percentage: totalPercentage, value: cost }));
    }
  }, [totalPercentage, cost, dispatch]);

  return <Total title='Cost' percentage={totalPercentage} value={cost} color='text-red-500' />;
};

export default OneCost;
