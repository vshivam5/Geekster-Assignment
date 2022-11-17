import { FC } from 'react';
import { GuestRooms } from '../../GuestRooms';
import { GuestRoomsProvider } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from '../SearchButton';
import { Header } from '../Header';
import { mediaQuery } from '../../../base/mediaQuery';
import { OnSearchFunction } from '../GuestRoomDialog';


type DialogPropTypes = {
  guestRoomsString?: string;
  onClose: () => void;
  onSearch?: OnSearchFunction;
};

export const Dialog: FC<DialogPropTypes> = ({
  guestRoomsString,
  onClose,
  onSearch,
}) => (
  <GuestRoomsProvider guestRoomsString={guestRoomsString}>
    <div className={"modelStyle"}>
      <Header onClose={onClose} />
      <GuestRooms />
      <SearchButton onSearch={onSearch} />
    </div>
  </GuestRoomsProvider>
);
