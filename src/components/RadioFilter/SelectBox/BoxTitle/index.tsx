// Hook
import useSelectBox from "../useSelectBox";

import "./index.css";
interface IBoxTitle {
  title: string;
  radioGroup: string;
}

export default function BoxTitle({ title, radioGroup }: IBoxTitle) {
  const { clearRadioValue, radioValue } = useSelectBox(radioGroup);

  return (
    <h1 className="title-box" onClick={clearRadioValue}>
      {title} &nbsp;
      <span
        className="title-animation"
        style={radioValue[radioGroup] ? { width: "450px" } : { width: "0px" }}
      >
        {radioValue[radioGroup] && ` ${radioValue[radioGroup]}`}
      </span>
    </h1>
  );
}
