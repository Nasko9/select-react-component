import { useQuery } from "react-query";

// Api
import axios from "../../api/axiosInstance";

export default function useRadioFilter() {
  const fetchOptions = () => {
    return axios.post("/characters");
  };

  const { data } = useQuery("filter", fetchOptions);

  console.log(data);
  return { data };
}
