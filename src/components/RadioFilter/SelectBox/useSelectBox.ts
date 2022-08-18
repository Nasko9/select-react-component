import React, { useContext } from "react";

// Context
import RadioContext from "../../../context/RadioContext";

export default function useSelectBox(radioGroup: string) {
  const { radioValue, setRadioValue } = useContext(RadioContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((prevState: object) => {
      return { ...prevState, [radioGroup]: e.target.value };
    });
  };

  return { onChangeHandler, radioValue };
}
