import React, { useContext } from "react";

// Context
import RadioContext from "../../../context/RadioContext";

// Type
import { IRadioValueContext } from "../../../types/RadioType";

export default function useSelectBox(radioGroup: string) {
  const { radioValue, setRadioValue, setStep } =
    useContext<IRadioValueContext>(RadioContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((prevState: object) => {
      return { ...prevState, [radioGroup]: e.target.value };
    });

    setTimeout(() => {
      setStep((prev: number) => ++prev);
    }, 200);
  };

  const clearRadioValue = () => {
    switch (radioGroup) {
      case "product":
        if (radioValue.product) {
          setRadioValue({});
          setStep(0);
        }
        break;
      case "format":
        if (radioValue.format) {
          setRadioValue((prevState) => {
            const { format, material, color, ...rest } = prevState;
            return rest;
          });
          setStep(1);
        }
        break;
      case "material":
        if (radioValue.material) {
          setRadioValue((prevState) => {
            const { material, color, ...rest } = prevState;
            return rest;
          });
          setStep(2);
        }
        break;
      case "color":
        if (radioValue.color) {
          setRadioValue((prevState) => {
            const { color, ...rest } = prevState;
            return rest;
          });
          setStep(3);
        }
        break;
      default:
        break;
    }
  };

  return { onChangeHandler, radioValue, clearRadioValue };
}
