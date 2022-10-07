import axios from "../axiosInstance";
//todo ovo se brise koristi se post i prosledjuje se prazan objekat i on vraca isto sve kao i ovo
const fetchAllProducts = () => {
  return axios({
    method: "GET",
    url: "/product",
  });
};

export default fetchAllProducts;
