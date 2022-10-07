import { useQuery } from "react-query";

// Api
import fetchAllProducts from "../../api/products";
import { ISelectObject } from "../../types/RadioType";

//todo: poseban tip za singledata objekat sa property string

export default function useRadioFilter() {
  const { data } = useQuery("products", fetchAllProducts);

  const options = (radioGroup: string) => {
    if (data?.data.data !== undefined) {
      const optionsArr = data?.data.data.map((singleData: ISelectObject) => {
        return singleData[radioGroup];
      });

      // konvertovati array u set i onda set u array i to je to
      // todo izmeniti logiku koristi set pa posle to kovnertuj u array
      return optionsArr.filter(
        (item: any, index: any) => optionsArr.indexOf(item) === index
      );
    } else {
      return [];
    }
  };

  return { options, data };
}
