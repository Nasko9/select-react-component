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
}

export default function BoxBody({
  options,
  radioGroup,
  onSelected,
  radioValue,
}: IBoxBody) {
  // inicijalno poluresenje: radioValue[radioGroup] ? "body-hide" : `body-box`
  return (
    <div className={radioValue[radioGroup] ? "body-hide" : `body-box`}>
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
