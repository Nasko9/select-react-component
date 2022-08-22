// Components
import BoxBody from "./BoxBody";
import BoxTitle from "./BoxTitle";

// Hook
import useSelectBox from "./useSelectBox";

// Type
import { IRadioElement } from "../../../types/RadioType";

// Style
import "./index.css";

export interface ISelectBox {
  options: Array<IRadioElement>;
  radioGroup: string;
  title: string;
}

export default function SelectBox({ options, radioGroup, title }: ISelectBox) {
  const { onChangeHandler, radioValue } = useSelectBox(radioGroup);

  return (
    <div className="select-box">
      <BoxTitle title={title} radioGroup={radioGroup} />
      <BoxBody
        options={options}
        radioGroup={radioGroup}
        onSelected={onChangeHandler}
        radioValue={radioValue}
      />
    </div>
  );
}
