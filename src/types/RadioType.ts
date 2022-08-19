export interface IRadioBtn {
  name: string;
}

export interface ISelectBox {
  options: Array<IRadioBtn>;
  radioGroup: string;
  title: string;
}

export interface IBoxTitle {
  title: string;
  radioGroup: string;
}

export interface IBoxBody {
  options: Array<IRadioBtn>;
  radioGroup: string;
  onSelected: any;
  value: object;
}

export interface IRadio {
  name: string;
  radioGroup: string;
  onSelected: any;
  radioValue: any;
}

export interface IRadioContextProvider {
  //? Da li je ok ovaj tip za children ili da koristim kao u ovom članku (https://www.carlrippon.com/react-children-with-typescript/)?
  children: JSX.Element;
}
