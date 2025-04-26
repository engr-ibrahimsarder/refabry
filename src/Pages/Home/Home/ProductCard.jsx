import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const { name, price,discount_amount, image,  unique_id } = product;
    const navigateToProductDetail = (id) => {
      navigate(`/products/${id}`);
    };
  return (
    <>
    <button
      onClick={() => navigateToProductDetail(unique_id)}
      className="bg-white cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
        <img className="h-96 w-56" src={image} alt="product" />
      <div className="max-w-sm p-5">
        <h1 className="text-start">{name}</h1>
        <p className="text-start text-orange-500 font-bold">
            <span className="text-lg font-extrabold">&#2547;</span>
            {price}
        <sub className="text-gray-500 font-normal ml-2">-{discount_amount}</sub>
        </p>
      </div>
    </button>
  </>
  );
};

export default ProductCard;