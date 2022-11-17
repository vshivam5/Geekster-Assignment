import { FC, useContext } from 'react';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { toGuestRoomsString } from '../../../GuestRooms/transformers/toGuestRoomsString';
import { Button } from '../../Button';
import { mediaQuery } from '../../../base/mediaQuery';
import { getGuestsCount, getRooms } from '../../../GuestRooms/contexts/getters';
import { GuestRooms } from '../../../GuestRooms/types/GuestRooms';
import { OnSearchFunction } from '../GuestRoomDialog';

function getRoomsCountText(roomsCount: number) {
  return roomsCount > 1 ? `${roomsCount} rooms` : `${roomsCount} room`;
}

function getGuestsCountText(guestsCount: number) {
  return guestsCount > 1 ? `${guestsCount} guests` : `${guestsCount} guest`;
}

function search(guestRooms: GuestRooms, callback: OnSearchFunction) {
  const guestRoomsString = toGuestRoomsString(guestRooms);

  return () =>
    callback(
      { guestRooms: guestRoomsString },
      `?guestRooms=${guestRoomsString}`
    );
}

type SearchButtonPropTypes = {
  onSearch?: OnSearchFunction;
};

export const SearchButton: FC<SearchButtonPropTypes> = ({ onSearch }) => {
  const { guestRooms } = useContext(GuestRoomsContext);
  const rooms = getRooms(guestRooms);
  const roomsCountText = getRoomsCountText(rooms.length);
  const guestsCount = getGuestsCount(guestRooms);
  const guestsCountText = getGuestsCountText(guestsCount);

  return (
    <div className={""}>
      <Button onClick={search(guestRooms, onSearch)} fullWidth>
        Search {roomsCountText} • {guestsCountText}
      </Button>
    </div>
  );
};
