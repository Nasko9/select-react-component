// Type
import { IRadio } from "../../types/RadioType";

// Style
import "./index.css";

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
        onChange={onSelected}
        checked={radioValue[radioGroup] === name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
