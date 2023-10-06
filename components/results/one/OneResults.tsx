import React from 'react';
import CellResult from '@/components/ui/cell-result/CellResult';
import OnePricePerGram from './OnePricePerGram';
import CoalsCost from '../CoalsCost';
import OneFilledBowlPrice from './OneFilledBowlPrice';

const OneResults: React.FC = () => {
  return (
    <CellResult>
      <OnePricePerGram />
      <CoalsCost />
      <OneFilledBowlPrice />
    </CellResult>
  );
};

export default OneResults;
