// Type
import { ISelectObject } from "../../types/RadioType";

// Style
import "./index.css";

export interface IRadio {
  name: string;
  radioGroup: string;
  onSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radioValue: ISelectObject;
}

export default function RadioBtn({
  name,
  radioGroup,
  onSelected,
  radioValue,
}: IRadio) {
  return (
    <div className="radio-section">
      <input
        type="radio"
        id={name}
        value={name}
        name={radioGroup}
        onChange={onSelected}
        checked={radioValue[radioGroup] === name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
