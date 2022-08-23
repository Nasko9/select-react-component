// Component
import RadioBtn from "../../../RadioBtn";

// Type
import { IRadioElement, ISelectObject } from "../../../../types/RadioType";

// Style
import "./index.css";

export interface IBoxBody {
  options: Array<IRadioElement>;
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
  // inicijalno poluresenje: radioValue[radioGroup] ? "body-hide" : `body-box`

  return (
    <div className={id === step ? "body-box" : "body-hide"}>
      {options.map(({ name }) => (
        <RadioBtn
          key={name}
          name={name}
          radioGroup={radioGroup}
          onSelected={onSelected}
          radioValue={radioValue}
        />
      ))}
    </div>
  );
}
