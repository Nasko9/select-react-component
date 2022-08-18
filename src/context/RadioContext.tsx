import { createContext, useState } from "react";

const RadioContext = createContext<any>(null);

export const RadioContextProvider = ({ children }: any) => {
  const initialValue = {
    product: "",
    format: "",
    material: "",
    color: "",
  };
  const [radioValue, setRadioValue] = useState<any>(initialValue);

  console.log(radioValue);

  return (
    <RadioContext.Provider value={{ radioValue, setRadioValue }}>
      {children}
    </RadioContext.Provider>
  );
};

export default RadioContext;
