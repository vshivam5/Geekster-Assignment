import { ChangeEvent, FC, useContext } from 'react';
import { GuestRoomsContext } from '../../../GuestRooms/contexts/GuestRoomsContext';
import { Child } from '../../../GuestRooms/types/GuestRooms';

const ageOptions = [...Array(18)];


type ChildSelectPropTypes = {
  child: Child;
  roomIndex: number;
  index: number;
};

export const ChildSelect: FC<ChildSelectPropTypes> = ({
  child,
  roomIndex,
  index,
}) => {
  const { updateChild } = useContext(GuestRoomsContext);

  const childAgeOnChange =
    (childIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const childAge = Number(event.target.value);
      updateChild(roomIndex, childIndex, childAge);
    };

  return (
    <select
      onChange={childAgeOnChange(index)}
      value={child.age}
      className={""}
    >
      {ageOptions.map((_, age) => (
        <option
          value={age}
          key={`${roomIndex}-child-${index}-age-option-${age}`}
        >
          {age ? age : '<1'}
        </option>
      ))}
    </select>
  );
};
