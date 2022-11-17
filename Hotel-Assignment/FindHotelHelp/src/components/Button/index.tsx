import { FC, PropsWithChildren } from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'disabled' | 'danger' | 'close';

type ButtonPropTypes = {
  disabled?: boolean;
  onClick: () => void;
  variant?: ButtonVariants;
  className?: string;
  fullWidth?: boolean;
  dataTestid?: string;
};

export const Button: FC<PropsWithChildren<ButtonPropTypes>> = ({
  children,
  disabled = false,
  onClick,
  variant = 'primary',
  className,
  fullWidth = false,
  dataTestid,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    data-testid={dataTestid}
    className={""}
  >
    {children}
  </button>
);
