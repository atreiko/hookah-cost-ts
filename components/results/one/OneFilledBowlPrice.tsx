import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/hooks';
import { useFilledBowlPrice } from '@/utils/hooks/useFilledBowlPrice';
import { setOneFilledBowlPrice } from '@/store/slices/one/oneResults.slice';

const OneFilledBowlPrice: React.FC = () => {
  const { pricePerGram } = useAppSelector((state) => state.oneResults);
  const { bowlCapacity } = useAppSelector((state) => state.bowlOne);

  const dispatch = useAppDispatch();

  const calculateFilledBowlPrice = (price: string, capacity: string): string | null => {
    if (price && capacity) {
      return useFilledBowlPrice(+price, +capacity);
    }
    return null;
  };

  const fbp = calculateFilledBowlPrice(pricePerGram, bowlCapacity);

  useEffect(() => {
    if (fbp !== null && fbp !== undefined) {
      dispatch(setOneFilledBowlPrice(fbp.toString()));
    }
  }, [fbp, dispatch]);

  return (
    <div className='flex justify-between items-center mb-2'>
      <h5>Filled bowl price</h5>
      <span className='text-neutral-300 font-medium'>{fbp}</span>
    </div>
  );
};

export default OneFilledBowlPrice;
