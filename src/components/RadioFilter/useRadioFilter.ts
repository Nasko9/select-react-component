import { useContext, useEffect, useState } from "react";

// Api
import axios from "../../api/axiosInstance";
import RadioContext from "../../context/RadioContext";
import { IRadioValueContext } from "../../types/RadioType";

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
  const { radioValue } = useContext<IRadioValueContext>(RadioContext);
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const { data: product } = await axios.get("/product", radioValue);
        setProduct(product.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return { product };
}
