import { Dispatch, SetStateAction } from "react";

export interface ISelectObject {
  [key: string]: string | number;
}

export interface IRadioElement {
  name: string;
}

export interface IRadioValueContext {
  radioValue: ISelectObject;
  setRadioValue: Dispatch<SetStateAction<ISelectObject>>;
}
