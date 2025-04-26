import { Link, useParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";

const ProductDetail = () => {
    const {productId} = useParams();
    const [products] = useProducts();
    const product = products.filter((product) => product.unique_id === productId);
    console.log(product)
  return (
    <div className="container mx-auto pt-5">
        <Link to="/">{product?.[0]?.category?.name}</Link>
     <section  className="pt-5 mt-5 bg-white shadow-lg rounded-lg p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <img className="h-96 w-full p-5" src={product?.[0]?.image} alt="product" />
        </div>
        <div>
            <h1 className="text-lg font-semibold">{product?.[0]?.name}</h1>
            <hr className="border-t-1.5 border-gray-300 my-2" />
            <p className="text-start text-orange-500 font-semibold text-2xl">
            <span className="text-xl font-extrabold">&#2547;</span>
            {product?.[0]?.price}
        <sub className="text-gray-500 font-normal ml-2">-{product?.[0]?.discount_amount}</sub>
        </p>
        <hr className="border-t-1.5 border-gray-300 my-2" />
        </div>
     </section>
    </div>
  );
};

export default ProductDetail;