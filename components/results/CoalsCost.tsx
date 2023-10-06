'use client';

import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/hooks';

import { setOneCoalsCost } from '@/store/slices/one/oneResults.slice';
import { setTwoCoalsCost } from '@/store/slices/two/twoResults.slice';

import { useCoalsCost } from '@/utils/hooks/useCoalsCost';

interface ICoalsCostResult {
  perOnePiece: string;
  perHookah: string;
}

const CoalsCost = () => {
  const [currentResult, setCurrentResult] = useState<ICoalsCostResult>({ perOnePiece: '', perHookah: '' });
  const { coalPriceKg, piecesPerKg, coalConsumption } = useAppSelector((state) => state.coal);
  const { amount } = useAppSelector((state) => state.brands);

  // console.log('COALS COST: ', { coalPriceKg, piecesPerKg, coalConsumption });

  const dispatch = useAppDispatch();

  useEffect(() => {
    let result: ICoalsCostResult = { perOnePiece: '', perHookah: '' };

    if (coalPriceKg && piecesPerKg && coalConsumption) {
      result = useCoalsCost(+coalPriceKg, +piecesPerKg, +coalConsumption) as ICoalsCostResult;
    }

    if (amount === 'one') {
      dispatch(setOneCoalsCost(result));
      setCurrentResult(result);
    } else {
      dispatch(setTwoCoalsCost(result));
      setCurrentResult(result);
    }
  }, [coalPriceKg, piecesPerKg, coalConsumption]);

  // console.log('CURRENT: ', currentResult);

  return (
    <div className='mb-2'>
      <h5>Coals cost</h5>
      <div className='flex items-center justify-between w-full'>
        <p>per one piece</p>
        <span className='text-neutral-300 font-medium'>{currentResult?.perOnePiece}</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p>per hookah</p>
        <span className='text-neutral-300 font-medium'>{currentResult?.perHookah}</span>
      </div>
    </div>
  );
};

export default CoalsCost;

