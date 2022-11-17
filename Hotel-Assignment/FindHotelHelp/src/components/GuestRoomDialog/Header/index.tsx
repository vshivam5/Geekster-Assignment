import { FC } from 'react';
import { Button } from '../../Button';
import { ReactComponent as CloseIcon } from '../../Icons/close.svg';
import { mediaQuery } from '../../../base/mediaQuery';

type HeaderPropTypes = {
  onClose: () => void;
};


export const Header: FC<HeaderPropTypes> = ({ onClose }) => (
  <div className={""}>
    <div className={""}>
      <span>Rooms & Guests</span>
    </div>
    <Button
      variant="close"
      onClick={onClose}
      className={""}
      dataTestid="dialog-close-button"
    >
      <CloseIcon />
    </Button>
  </div>
);
