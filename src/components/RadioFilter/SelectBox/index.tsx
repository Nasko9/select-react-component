// Components
import BoxBody from "./BoxBody";
import BoxTitle from "./BoxTitle";

// Hook
import useSelectBox from "./useSelectBox";

// Type
import { IRadioElement } from "../../../types/RadioType";

// Style
import "./index.css";
import { useEffect, useRef, useState } from "react";

export interface ISelectBox {
  options: Array<IRadioElement>;
  radioGroup: string;
  title: string;
  id: number;
  step: number;
}

export default function SelectBox({
  options,
  radioGroup,
  title,
  id,
  step,
}: ISelectBox) {
  const { onChangeHandler, radioValue } = useSelectBox(radioGroup);

  const heightRef = useRef<any>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  useEffect(() => {
    setTimeout(() => {
      // heightRef?.current.classList.add("animate-text");
      setHeight(() => heightRef?.current.clientHeight);
    }, 200);
  }, [heightRef]);

  console.log(height);
  return (
    <div className="select-box">
      <div ref={heightRef}>
        <BoxTitle title={title} radioGroup={radioGroup} />
        <BoxBody
          options={options}
          radioGroup={radioGroup}
          onSelected={onChangeHandler}
          radioValue={radioValue}
          id={id}
          step={step}
        />
      </div>
    </div>
  );
}
