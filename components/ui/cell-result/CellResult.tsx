import React, { ReactNode } from 'react';

interface ICellResult {
  children: ReactNode;
}

const CellResult: React.FC<ICellResult> = ({ children }) => {
  return (
    <div className='overflow-hidden p-4 rounded-xl bg-neutral-900 shadow-md shadow-neutral-950 border border-neutral-700'>
      {children}
    </div>
  );
};

export default CellResult;
