import React, { ReactNode } from 'react';

interface ICell {
  children: ReactNode;
  title?: string | null;
}

const Cell: React.FC<ICell> = ({ children, title = null }) => {
  return (
    <div className='h-full w-full p-4 rounded-xl bg-neutral-950 shadow-md shadow-neutral-950 border border-neutral-700'>
      {title ? <h3>{title}</h3> : null}
      {children}
    </div>
  );
}

export default Cell;