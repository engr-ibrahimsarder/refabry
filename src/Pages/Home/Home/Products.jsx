// import useProducts from "../../../hooks/useProducts";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
//   const [products] = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://admin.refabry.com/api/all/product/get')
      .then(response => {
        console.log(response.data); // Check structure first
        setProducts(response?.data?.data?.data); 
        console.log(response?.data?.data?.data)// Adjust based on actual data shape
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 pb-10 px-10 md:px-0">
        {products.map((product) => (
          <ProductCard key={product.unique_id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;