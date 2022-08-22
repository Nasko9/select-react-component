import { createContext, useState } from "react";

// Type
import { IRadioValueContext, ISelectObject } from "../types/RadioType";

export interface IRadioContextProvider {
  children: JSX.Element;
}

const initialStateContext = {
  radioValue: {},
  setRadioValue: () => {},
};

const RadioContext = createContext<IRadioValueContext>(initialStateContext);

export const RadioContextProvider = ({ children }: IRadioContextProvider) => {
  const [radioValue, setRadioValue] = useState<ISelectObject>({});

  return (
    <RadioContext.Provider value={{ radioValue, setRadioValue }}>
      {children}
    </RadioContext.Provider>
  );
};

export default RadioContext;
