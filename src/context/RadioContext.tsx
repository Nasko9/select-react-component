import { createContext, useState } from "react";

// Type
import { IRadioValueContext, ISelectObject } from "../types/RadioType";

export interface IRadioContextProvider {
  children: JSX.Element;
}

const initialStateContext = {
  radioValue: {},
  setRadioValue: () => {},
  step: 0,
  setStep: () => {},
};

const RadioContext = createContext<IRadioValueContext>(initialStateContext);

export const RadioContextProvider = ({ children }: IRadioContextProvider) => {
  const [radioValue, setRadioValue] = useState<ISelectObject>({});
  const [step, setStep] = useState(0);

  console.log(radioValue);

  return (
    <RadioContext.Provider value={{ radioValue, setRadioValue, step, setStep }}>
      {children}
    </RadioContext.Provider>
  );
};

export default RadioContext;
