import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://admin.refabry.com/api/all/product/get",
});
const usePublic = () => {
  return axiosPublic;
};

export default usePublic;
