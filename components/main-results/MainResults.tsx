'use client';

import React from 'react';
import { useAppSelector } from '@/utils/hooks/hooks';

const MainResults = () => {
  const {
    cost: { value: costValue },
    proceeds: { value: proceedsValue },
  } = useAppSelector((state) => state.total);

  if (costValue === null || proceedsValue === null || costValue === '' || proceedsValue === '') {
    return null;
  }

  return (
    <div className='px-2 py-1 flex gap-2 border rounded-xl bg-neutral-950 border-neutral-700 z-50'>
      <span className='text-red-500 font-bold'>{costValue}</span>
      <span className='text-green-300 font-bold'>{proceedsValue}</span>
    </div>
  );
};

export default MainResults;
