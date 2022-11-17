import { FC, useContext } from 'react';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { Button } from '../../Button';
import { AdultsCountInput } from '../AdultsCountInput';
import { ChildrenCountInput } from '../ChildrenCountInput';
import { ChildrenSelect } from '../ChildrenSelect';

type GuestRoomPropTypes = {
  index: number;
};

export const GuestRoom: FC<GuestRoomPropTypes> = ({ index }) => {
  const { removeRoom } = useContext(GuestRoomsContext);
  const removeRoomOnClick = (roomIndex: number) => () => {
    removeRoom(roomIndex);
  };

  return (
    <>
      <div className={""}>
        <h2 className={""}>Room {index + 1}</h2>
        {index ? (
          <Button
            variant="danger"
            onClick={removeRoomOnClick(index)}
            className={""}
          >
            Remove room
          </Button>
        ) : null}
      </div>
      <div className={""} data-testid="adults-count-input-block">
        <span>Adults</span>
        <AdultsCountInput roomIndex={index} />
      </div>
      <div data-testid="children-count-input-block">
        <div className={""}>
          <span>Children</span>
          <ChildrenCountInput roomIndex={index} />
        </div>
        <ChildrenSelect roomIndex={index} />
      </div>
    </>
  );
};
