// Component
import RadioBtn from "../../../RadioBtn";

// Type
import { IBoxBody } from "../../../../types/RadioType";

// Style
import "./index.css";

export default function BoxBody({
  options,
  radioGroup,
  onSelected,
  value,
}: IBoxBody) {
  return (
    <div className="body-box">
      {options.map(({ name }) => (
        <RadioBtn
          key={name}
          name={name}
          radioGroup={radioGroup}
          onSelected={onSelected}
          radioValue={value}
        />
      ))}
    </div>
  );
}
