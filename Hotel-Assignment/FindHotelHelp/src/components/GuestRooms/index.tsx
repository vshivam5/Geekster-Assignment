import { FC, useContext } from 'react';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../Button';
import { getRooms } from '../../GuestRooms/contexts/getters';

export const GuestRooms: FC = () => {
  const { guestRooms, addRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms(guestRooms);

  return (
    <div className={""}>
      {rooms.map((_, index) => (
        <div
          key={`room-key-${index}`}
          className={""}
          data-testid={`room-key-${index}`}
        >
          <GuestRoom index={index} />
        </div>
      ))}
      <Button variant="secondary" onClick={addRoom} fullWidth>
        + Add room
      </Button>
    </div>
  );
};
