// Hook
import useSelectBox from "../useSelectBox";
export interface IBoxTitle {
  title: string;
  radioGroup: string;
}

export default function BoxTitle({ title, radioGroup }: IBoxTitle) {
  const { clearRadioValue, radioValue } = useSelectBox(radioGroup);

  console.log(radioValue);

  return (
    <h1 className="title-box" onClick={clearRadioValue}>
      {title}
      {radioValue[radioGroup] && `: ${radioValue[radioGroup]}`}
    </h1>
  );
}
