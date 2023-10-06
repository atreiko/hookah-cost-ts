import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';

import { Icon } from '../icon/Icon';
import { IconType } from '../icon/IconType';

// ButtonHTMLAttributes, DetailedHTMLProps push attr "type" to ...rest
// type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'clean' | 'primary' | 'secondary';

interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  isValid?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  typeIcon?: string | null;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  isDisabled = false,
  variant = 'primary',
  typeIcon,
  onClick,
  isValid = true,
}) => {
  return (
    <button
      // type='button'
      disabled={!isValid}
      className={cn(
        'clean',
        variant === 'primary' ? 'primary' : 'clean',
        variant === 'secondary' ? 'secondary' : 'clean'
      )}
      onClick={onClick}>
      {children}
      {typeIcon && <Icon type={typeIcon as IconType} />}
    </button>
  );
};

export default Button;
