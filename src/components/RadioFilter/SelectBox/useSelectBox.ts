import React, { useContext } from "react";

// Context
import RadioContext from "../../../context/RadioContext";

// Type
import { IRadioValueContext } from "../../../types/RadioType";

export default function useSelectBox(radioGroup: string) {
  const { radioValue, setRadioValue } =
    useContext<IRadioValueContext>(RadioContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((prevState: object) => {
      return { ...prevState, [radioGroup]: e.target.value };
    });
  };

  const clearRadioValue = () => {
    setRadioValue((prevState) => {
      //Todo: ifovi kada se prvo briše briše se sve itd
      const { [radioGroup]: _sd, ...rest } = prevState;
      return rest;
    });
  };

  //Za svaki slucaj ako ti ne radi proveri state (Ne vezuj za state toliko zbog animacije)
  const boxBodyClass = () => {
    if (radioValue === {}) {
      return "body-hide";
    }
  };

  return { onChangeHandler, radioValue, clearRadioValue };
}
