// Components
import SelectBox from "./SelectBox";

// Data
import { data, data1, data2, data3 } from "../../data/radioData";

// Style
import "./index.css";

export default function RadioFilter() {
  return (
    <div className="filter-section">
      <SelectBox data={data} radioGroup="product" title="Product" />
      <SelectBox data={data1} radioGroup="format" title="Format" />
      <SelectBox data={data2} radioGroup="material" title="Material" />
      <SelectBox data={data3} radioGroup="color" title="Color & refinement" />
    </div>
  );
}
