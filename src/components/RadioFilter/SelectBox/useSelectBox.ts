import React, { useContext } from "react";

// Context
import RadioContext, {
  IRadioValueContext,
} from "../../../context/RadioContext";

// interface IUseSelectBox {
//   product: string;
//   format: string;
//   material: string;
//   color: string;
// }

export default function useSelectBox(radioGroup: string) {
  const { radioValue, setRadioValue } =
    useContext<IRadioValueContext>(RadioContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((prevState: object) => {
      return { ...prevState, [radioGroup]: e.target.value };
    });
  };

  //Todo: da ne setuje na prazan string nego da ga stvarno obriše jer je inicijalno prazan objekat
  const clearRadioValue = () => {
    setRadioValue((prevState: object) => {
      return { ...prevState, [radioGroup]: "" };
    });
  };

  return { onChangeHandler, radioValue, clearRadioValue };
}
