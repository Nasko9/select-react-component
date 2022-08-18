// Type
import { IRadio } from "../../types/RadioType";

// Style
import "./index.css";

export default function RadioBtn({ name, radioGroup, onSelected }: IRadio) {
  return (
    <div className="radio-section">
      <input
        type="radio"
        name={radioGroup}
        id={name}
        value={name}
        onChange={onSelected}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}
