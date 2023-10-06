import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/utils/hooks/hooks';
import { useFindNumberFromPercentage } from '@/utils/hooks/useFindNumberFromPercentage';
import { useFilledBowlPrice } from '@/utils/hooks/useFilledBowlPrice';
import { setTwoFilledBowlPrice } from '@/store/slices/two/twoResults.slice';

const TwoFilledBowlPrice: React.FC = () => {
  const { first, second } = useAppSelector((state) => state.twoResults.pricePerGram);
  const { bowlCapacity, percentageFirst, percentageSecond } = useAppSelector(
    (state) => state.bowlTwo
  );

  const dispatch = useAppDispatch();

  const calculateFilledBowlPrice = (percentage: string, price: string): string | null => {
    const grams = bowlCapacity && percentage
      ? useFindNumberFromPercentage(+bowlCapacity, +percentage)
      : null;

    return price && grams ? useFilledBowlPrice(+price, +grams) : null;
  };

  const fbpFirst = calculateFilledBowlPrice(percentageFirst, first);
  const fbpSecond = calculateFilledBowlPrice(percentageSecond, second);
  const fbpBoth = fbpFirst && fbpSecond ? (+fbpFirst + +fbpSecond).toFixed(2) : null;

  useEffect(() => {
    if (fbpFirst !== null && fbpSecond !== null && fbpBoth !== null) {
      dispatch(
        setTwoFilledBowlPrice({
          first: fbpFirst,
          second: fbpSecond,
          both: fbpBoth,
        })
      );
    }
  }, [fbpFirst, fbpSecond, fbpBoth, dispatch]);

  const renderRow = (label: string, percentage: string | null, price: string | null) => (
    <div className='flex items-center justify-between w-full'>
      <p className='w-28'>{label}</p>
      <div className='px-4 w-28 text-neutral-400'>{percentage ? `${percentage}%` : null}</div>
      <span className='text-neutral-300 font-medium'>{price}</span>
    </div>
  );

  return (
    <div className='mb-2'>
      <h5>Filled bowl price</h5>
      {renderRow('first', percentageFirst, fbpFirst)}
      {renderRow('second', percentageSecond, fbpSecond)}
      {renderRow('both tobaccos', '100', fbpBoth)}
    </div>
  );
};

export default TwoFilledBowlPrice;
