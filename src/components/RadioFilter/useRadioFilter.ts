// import { useContext } from "react";
import { useQuery } from "react-query";

// Api
import axios from "../../api/axiosInstance";
// import RadioContext from "../../context/RadioContext";
// import { IRadioValueContext } from "../../types/RadioType";

// Type
interface IProduct {
  id: string;
  product_type_id: number;
  product_type_name: string;
  format: string;
  pages: number;
  weight: number;
  material: string;
  color: string;
}

export default function useRadioFilter() {
  // const { radioValue } = useContext<IRadioValueContext>(RadioContext);

  const { data } = useQuery("product", () => {
    return axios.get("/product");
  });

  const options = (radioGroup: string) => {
    if (data?.data.data !== undefined) {
      const optionsArr = data?.data.data.map((singleData: any) => {
        return singleData[radioGroup];
      });

      return optionsArr.filter(
        (item: any, index: any) => optionsArr.indexOf(item) === index
      );
    } else {
      return [];
    }
  };

  return { options };
}
