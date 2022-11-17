import { useContext } from 'react';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { CloseButton } from '../CloseButton';
import { getChildren } from '../../../GuestRooms/contexts/getters';
import { ChildSelect } from './ChildSelect';

type ChildrenSelectPropTypes = {
  roomIndex: number;
};


export const ChildrenSelect = ({ roomIndex }: ChildrenSelectPropTypes) => {
  const { guestRooms } = useContext(GuestRoomsContext);
  const chidren = getChildren(guestRooms, roomIndex);

  return (
    <div className={""}>
      {chidren.map((child, index) => (
        <div
          className={""}
          key={`${roomIndex}-child-${index}`}
        >
          <span>Child {index + 1} age</span>
          <div className={""}>
            <ChildSelect child={child} roomIndex={roomIndex} index={index} />
            <CloseButton roomIndex={roomIndex} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
};
