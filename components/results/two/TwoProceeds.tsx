import React, { useEffect } from 'react';
import Total from '../Total';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/hooks';
import { useFindPercentageFromNumber } from '@/utils/hooks/useFindPercentageFromNumber';
import { setProceeds } from '@/store/slices/total.slice';

const TwoProceeds: React.FC = () => {
  const { hookahPrice } = useAppSelector((state) => state.hookah);
  const { cost: { value, percentage } } = useAppSelector(state => state.total)

  const dispatch = useAppDispatch();

  const proceeds = 
    hookahPrice && value
      ? (+hookahPrice - +value).toFixed(1).toString()
      : null;

  const proceedsPercentage = 
    proceeds && hookahPrice
      ? useFindPercentageFromNumber(+hookahPrice, +proceeds)
      : null;

  useEffect(() => {
    if (proceeds !== null && proceedsPercentage !== null) {
      dispatch(setProceeds({ percentage: proceedsPercentage, value: proceeds }))
    }
  }, [proceeds, proceedsPercentage, dispatch])

  return <Total title='Proc.' percentage={proceedsPercentage} value={proceeds} color='text-green-300' />
};

export default TwoProceeds;
