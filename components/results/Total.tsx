import React from 'react';
import { Icon } from '@/components/ui/icon/Icon';
import CellResult from '@/components/ui/cell-result/CellResult';

interface ITotalProps {
  title: 'Cost' | 'Proc.';
  percentage: string | null;
  value: string | null;
  color?: 'text-red-500' | 'text-green-300';
}

const Total: React.FC<ITotalProps> = ({ title, percentage, value, color = 'text-green-300' }) => {
  return (
    <CellResult>
      <div className='grid grid-cols-2 gap-2 h-full'>
        <h4 className='text-4xl uppercase font-bold'>{title}</h4>
        <div className='flex justify-between order-2'>
          <div className={`text-4xl ${color} font-bold flex items-center gap-2 self-end`}>
            <span className={`${color}`}>{percentage}</span>{' '}
            {percentage ? <Icon type={`Percentage${color === 'text-red-500' ? 'Red' : 'Green'}`} /> : null}
          </div>
        </div>
        <span
          className={`xl:text-6xl text-5xl ${color} p-4 font-bold row-span-2 flex justify-center items-center`}>
          {value}
        </span>
      </div>
    </CellResult>
  );
};

export default Total;


