import React, { ReactNode } from 'react';
import Cell from '../cell/Cell';

type CellInfoProps = {
  title: string;
  info: string;
  desc: string;
  children?: ReactNode;
};

const CellInfo: React.FC<CellInfoProps> = ({ title, info, desc, children }) => {
  return (
    <Cell title={title}>
      <p className='mb-4 font-thin text-base leading-7'>{info}</p>
      {children}
      {desc && <p className='mt-4 font-thin text-base leading-7'>{desc}</p>}
    </Cell>
  );
};

export default CellInfo;
