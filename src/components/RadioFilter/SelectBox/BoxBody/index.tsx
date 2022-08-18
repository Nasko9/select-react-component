// Component
import RadioBtn from "../../../RadioBtn";

// Type
import { IBoxBody } from "../../../../types/RadioType";

export default function BoxBody({ options, radioGroup, onSelected }: IBoxBody) {
  return (
    <div>
      {options.map(({ name }) => (
        <RadioBtn
          key={name}
          name={name}
          radioGroup={radioGroup}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
}
