import { useEffect, useState } from "react";
import usePublic from "./usePublic";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = usePublic();

  useEffect(() => {
    axiosPublic.get()
    .then(response => {
      setProducts(response?.data?.data?.data); 
    })
    .catch(error => {
      console.error('Error fetching product data:', error);
    });
  }, []);
  return [products];
};

export default useProducts;
