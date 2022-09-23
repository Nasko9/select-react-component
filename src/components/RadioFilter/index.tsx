import { useContext } from "react";

// Components
import SelectBox from "./SelectBox";

import { IRadioValueContext } from "../../types/RadioType";
import RadioContext from "../../context/RadioContext";

// Data
import { data, data1, data2, data3 } from "../../data/radioData";

// Style
import "./index.css";
import { useQueries } from "react-query";

export default function RadioFilter() {
  const { step } = useContext<IRadioValueContext>(RadioContext);
  // const {data} = useQueries

  return (
    <div className="filter-section">
      <SelectBox
        options={data}
        radioGroup="product"
        title="Product"
        id={0}
        step={step}
      />
      <SelectBox
        options={data1}
        radioGroup="format"
        title="Format"
        id={1}
        step={step}
      />
      <SelectBox
        options={data2}
        radioGroup="material"
        title="Material"
        id={2}
        step={step}
      />
      <SelectBox
        options={data3}
        radioGroup="color"
        title="Color & refinement"
        id={3}
        step={step}
      />
    </div>
  );
}
