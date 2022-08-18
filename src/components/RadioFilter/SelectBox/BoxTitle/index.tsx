import { useContext } from "react";

// Context
import RadioContext from "../../../../context/RadioContext";

// Type
import { IBoxTitle } from "../../../../types/RadioType";

export default function BoxTitle({ title, radioGroup }: IBoxTitle) {
  const { radioValue } = useContext(RadioContext);

  // console.log(radioGroup);

  return (
    <h1 className="title-box">
      {title}
      {radioValue === "" ? "" : `: ${radioValue}`}
    </h1>
  );
}
