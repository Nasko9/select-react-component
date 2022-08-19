// Type
import { IBoxTitle } from "../../../../types/RadioType";
import useSelectBox from "../useSelectBox";

export default function BoxTitle({ title, radioGroup }: IBoxTitle) {
  const { clearRadioValue, radioValue } = useSelectBox(radioGroup);

  return (
    <h1 className="title-box" onClick={clearRadioValue}>
      {title}
      {radioValue === {} ? "" : `: ${radioValue[radioGroup]}`}
    </h1>
  );
}
