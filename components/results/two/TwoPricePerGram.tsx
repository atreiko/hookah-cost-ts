'use client';

import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/hooks';
import { setTwoPricePerGram } from '@/store/slices/two/twoResults.slice';
import { usePricePerGram } from '@/utils/hooks/usePricePerGram';

const TwoPricePerGram = () => {
  const { tobaccoPrice, tobaccoWeight, secondTobaccoPrice, secondTobaccoWeight } = useAppSelector((state) => state.two);

  const dispatch = useAppDispatch();

  const firstPpg =
    tobaccoPrice.length && tobaccoWeight.length ? usePricePerGram(Number(tobaccoPrice), Number(tobaccoWeight)) : null;

  const secondPpg =
    secondTobaccoPrice.length && secondTobaccoWeight.length ? usePricePerGram(Number(secondTobaccoPrice), Number(secondTobaccoWeight)) : null;

  useEffect(() => {
    if (firstPpg !== null && secondPpg !== null) {
      dispatch(
        setTwoPricePerGram({
          first: firstPpg.toString(),
          second: secondPpg.toString(),
        })
      );
    }
  }, [firstPpg, secondPpg, dispatch]);

  return (
    <div className='mb-2'>
      <h5>Tobacco price per gram</h5>
      <div className='flex items-center justify-between w-full'>
        <p>first</p>
        <span className='text-neutral-300 font-medium'>{firstPpg}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>second</p>
        <span className='text-neutral-300 font-medium'>{secondPpg}</span>
      </div>
    </div>
  );
};

export default TwoPricePerGram;
