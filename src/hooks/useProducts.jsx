import { useEffect, useState } from "react";
import usePublic from "./usePublic";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = usePublic();

  useEffect(() => {
    axiosPublic.get()
    .then(response => {
      setProducts(response?.data?.data?.data); 
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching product data:', error);
      setLoading(false);
    });
  }, []);
  return [products,loading];
};

export default useProducts;
