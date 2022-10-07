import { useContext } from "react";

// Components
import SelectBox from "./SelectBox";

import { IRadioValueContext } from "../../types/RadioType";
import RadioContext from "../../context/RadioContext";

// Hook
import useRadioFilter from "./useRadioFilter";

// Style
import "./index.css";

export default function RadioFilter() {
  const { step } = useContext<IRadioValueContext>(RadioContext);
  const { options } = useRadioFilter();

  return (
    <div className="filter-section">
      <SelectBox
        options={options("format")}
        radioGroup="format"
        title="Format"
        id={0}
        step={step}
      />
      <SelectBox
        options={options("pages")}
        radioGroup="pages"
        title="Pages"
        id={1}
        step={step}
      />
      <SelectBox
        options={options("material")}
        radioGroup="material"
        title="Material"
        id={2}
        step={step}
      />
      <SelectBox
        options={options("weight")}
        radioGroup="weight"
        title="Weight"
        id={3}
        step={step}
      />
      <SelectBox
        options={options("color")}
        radioGroup="color"
        title="Color & refinement"
        id={4}
        step={step}
      />
    </div>
  );
}
