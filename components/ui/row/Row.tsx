import React, { ReactNode } from 'react';
import cn from 'classnames'

interface RowProps {
  children: ReactNode;
  className?: string;
}

const styles = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4'

const Row: React.FC<RowProps> = ({ children, className }) => {
  return (
    <div className={cn(styles, className)}>
      {children}
    </div>
  );
};

export default Row;
