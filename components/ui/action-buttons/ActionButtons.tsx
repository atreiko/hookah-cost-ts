import React, { FC, MouseEvent } from 'react';
import Button from '../button/Button';
import { Icon } from '../icon/Icon';
import { IconType } from '../icon/IconType';

type ActionButtonsProps = {
  onClickFirst?: (event: MouseEvent) => void;
  titleFirst: string;
  iconFirst: IconType;
  onClickSecond?: (event: MouseEvent) => void;
  titleSecond: string;
  iconSecond: IconType;
  variant?: 'primary' | 'secondary' | 'clean';
  isValid?: boolean;
};

const ActionButtons: FC<ActionButtonsProps> = ({
  onClickFirst,
  titleFirst,
  iconFirst,
  onClickSecond,
  titleSecond,
  iconSecond,
  variant = 'primary',
  isValid,
}) => {
  return (
    <div className='flex justify-end gap-8'>
      <Button variant={variant} onClick={onClickFirst}>
        {titleFirst} <Icon type={iconFirst} />
      </Button>
      <Button variant={variant} onClick={onClickSecond} isValid={isValid}>
        {titleSecond} <Icon type={iconSecond} />
      </Button>
    </div>
  );
};

export default ActionButtons;
