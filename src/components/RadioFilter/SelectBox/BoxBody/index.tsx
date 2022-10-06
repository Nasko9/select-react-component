// Component
import RadioBtn from "../../../RadioBtn";

// Type
import { IRadioElement, ISelectObject } from "../../../../types/RadioType";

// Style
import "./index.css";

export interface IBoxBody {
  options: Array<string | number>;
  radioGroup: string;
  onSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radioValue: ISelectObject;
  id: number;
  step: number;
}

export default function BoxBody({
  options,
  radioGroup,
  onSelected,
  radioValue,
  id,
  step,
}: IBoxBody) {
  const height = options.length * 30;
  // console.log(height);
  return (
    <div
      className="body-animation"
      style={id === step ? { height: height } : { height: 0 }}
    >
      <div className="body-box">
        {options.map((option) => (
          <RadioBtn
            key={option}
            name={`${option}`}
            radioGroup={radioGroup}
            onSelected={onSelected}
            radioValue={radioValue}
          />
        ))}
      </div>
    </div>
  );
}
