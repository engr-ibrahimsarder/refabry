import { useEffect } from "react";
import { useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://admin.refabry.com/api/all/product/get`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
      console.log(data)
  }, [productId]);
  return [product, setProduct];
};

export default useProduct;
