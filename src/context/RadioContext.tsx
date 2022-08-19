import { createContext, Dispatch, SetStateAction, useState } from "react";

// Type
import { IRadioContextProvider } from "../types/RadioType";

//Todo: Ove interfejse prebaciti u RadioType.ts
interface IUseSelectBox {
  [key: string]: any;
  product?: string;
  format?: string;
  material?: string;
  color?: string;
}

export interface IRadioValueContext {
  radioValue: IUseSelectBox;
  setRadioValue: Dispatch<SetStateAction<IUseSelectBox>>;
}

const initialStateContext = {
  radioValue: {},
  setRadioValue: () => {},
};

const RadioContext = createContext<IRadioValueContext>(initialStateContext);

export const RadioContextProvider = ({ children }: IRadioContextProvider) => {
  const [radioValue, setRadioValue] = useState<IUseSelectBox>({});

  return (
    <RadioContext.Provider value={{ radioValue, setRadioValue }}>
      {children}
    </RadioContext.Provider>
  );
};

export default RadioContext;
