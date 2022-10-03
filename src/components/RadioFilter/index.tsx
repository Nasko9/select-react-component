import { useContext } from "react";

// Components
import SelectBox from "./SelectBox";

import { IRadioValueContext } from "../../types/RadioType";
import RadioContext from "../../context/RadioContext";

// Data
import {
  formatData,
  pagesData,
  materialData,
  weightData,
  colorData,
} from "../../data/radioData";

// Style
import "./index.css";
import useRadioFilter from "./useRadioFilter";

export default function RadioFilter() {
  const { step } = useContext<IRadioValueContext>(RadioContext);
  const { product } = useRadioFilter();
  // console.log(product);

  return (
    <div className="filter-section">
      <SelectBox
        options={formatData}
        radioGroup="format"
        title="Format"
        id={0}
        step={step}
      />
      <SelectBox
        options={pagesData}
        radioGroup="pages"
        title="Pages"
        id={1}
        step={step}
      />
      <SelectBox
        options={materialData}
        radioGroup="material"
        title="Material"
        id={2}
        step={step}
      />
      <SelectBox
        options={weightData}
        radioGroup="weight"
        title="Weight"
        id={3}
        step={step}
      />
      <SelectBox
        options={colorData}
        radioGroup="color"
        title="Color & refinement"
        id={4}
        step={step}
      />
    </div>
  );
}
