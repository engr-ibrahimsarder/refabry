import useProducts from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products] = useProducts();

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