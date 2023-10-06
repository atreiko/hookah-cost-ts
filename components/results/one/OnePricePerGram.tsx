import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/hooks';
import { usePricePerGram } from '@/utils/hooks/usePricePerGram';
import { setOnePricePerGram } from '@/store/slices/one/oneResults.slice';

const OnePricePerGram = () => {
  const { tobaccoPrice, tobaccoWeight } = useAppSelector((state) => state.one);

  const dispatch = useAppDispatch();

  const ppg =
    tobaccoPrice && tobaccoWeight
      ? usePricePerGram(Number(tobaccoPrice), Number(tobaccoWeight))
      : null;

  useEffect(() => {
    if (ppg !== null && ppg !== undefined) {
      dispatch(setOnePricePerGram(ppg.toString()));
    }
  }, [ppg, dispatch]);

  return (
    <div className='flex justify-between items-center mb-2'>
      <h5>Tobacco price per gram</h5>
      <span className='text-neutral-300 font-medium'>{ppg ? ppg : ''}</span>
    </div>
  );
};

export default OnePricePerGram;
