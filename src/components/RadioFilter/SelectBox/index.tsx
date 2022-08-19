// Components
import BoxBody from "./BoxBody";
import BoxTitle from "./BoxTitle";

// Hook
import useSelectBox from "./useSelectBox";

// Type
import { ISelectBox } from "../../../types/RadioType";

// Style
import "./index.css";

export default function SelectBox({ options, radioGroup, title }: ISelectBox) {
  //ovde ide use radio btn hook i tu se prosleđuje ta funkcija
  const { onChangeHandler, radioValue } = useSelectBox(radioGroup);

  return (
    <div className="select-box">
      <BoxTitle title={title} radioGroup={radioGroup} />
      {/* Todo prima niz opcija (data) i to je posebna komponenta i prima on
      selected (trigeriuje se kada se klikne na njega)*/}
      <BoxBody
        options={options}
        radioGroup={radioGroup}
        onSelected={onChangeHandler}
        value={radioValue}
      />
    </div>
  );
}
