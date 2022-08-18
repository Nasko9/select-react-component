export interface IRadioBtn {
  name: string;
}

export interface ISelectBox {
  data: Array<IRadioBtn>;
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
}

export interface IRadio {
  name: string;
  radioGroup: string;
  onSelected: any;
}
