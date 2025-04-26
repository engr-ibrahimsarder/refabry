import { useEffect, useState } from "react";
import usePublic from "./usePublic";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = usePublic();

  useEffect(() => {
    fetch("https://admin.refabry.com/api/all/product/get")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return [products];
};

export default useProducts;
