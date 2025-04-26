import { Link, useParams } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { useState } from "react";

const ProductDetail = () => {
    const {productId} = useParams();
    const [products, loading] = useProducts();
    const [quantity, setQuantity] = useState(1);
    const product = products.filter((product) => product.unique_id === productId);
    if(loading) {
        <p>loaddin...</p>
    }
    const handleQuantityIncrease = (value) => {
      setQuantity(prev => prev + value);
    };
  
    const handleQuantityDecrease = (value) => {
      if (quantity > 1) {
        setQuantity(prev => prev - value);
      }
    };
    const parseShortDesc = (desc) => {
        const lines = desc?.split(/\r?\n/)?.filter(Boolean);
        const title = lines?.[0];
        const call = lines?.find(line => line?.toLowerCase()?.includes("call"));
        const whatsapp = lines?.find(line => line?.toLowerCase()?.includes("whatsapp"));
      
        const detailsStart = lines?.findIndex(line => line?.toLowerCase()?.includes("details"));
        const sizesStart = lines?.findIndex(line => line?.toLowerCase()?.includes("available sizes"));
      
        const features = lines?.slice(detailsStart + 1, sizesStart);
        const sizes = lines?.slice(sizesStart + 1);
      
        return {
          title,
          call,
          whatsapp,
          features,
          sizes
        };
      };
      
      const parsed = parseShortDesc(product?.[0]?.short_desc);
      
      // Optional: Push to an array
      const productDesc = [];
      productDesc.push(parsed);
      
      console.log(productDesc);
      console.log(productDesc?.[0]?.short_desc);
  return (
    <div className="container mx-auto pt-5">
        <Link to="/"><span>category &gt; </span>{product?.[0]?.category?.name}</Link>
     <section  className="pt-5 mt-5 bg-white p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <img className="h-96 w-full p-5" src={product?.[0]?.image} alt="product" />
        </div>
        <div>
            <h1 className="text-lg font-semibold">{product?.[0]?.name}</h1>
            <hr className="border-t-1.5 border-gray-300 my-5" />
            <p className="text-start text-orange-500 font-semibold text-2xl">
            <span className="text-xl font-extrabold">&#2547;</span>
            {product?.[0]?.price}
        <sub className="text-gray-500 font-normal ml-2">-{product?.[0]?.discount_amount}</sub>
        </p>
        <hr className="border-t-1.5 border-gray-300 my-5" />
        <div className="flex items-center gap-2 mt-2">
            <h1 className="text-gray-500">Quentity</h1>
            <div className="flex items-center gap-2 ">     
            <button 
        onClick={() => handleQuantityDecrease(1)} 
        className="rounded-lg px-3 pb-1 bg-gray-500"
        disabled={quantity <= 1}
      >
        <span className="text-2xl text-gray-200">-</span>
        
      </button>
      <p>{quantity}</p>
      <button 
        onClick={() => handleQuantityIncrease(1)} 
        className=" rounded-lg px-3 pb-1 bg-gray-500"
      >
         <span className="text-2xl text-gray-200">+</span>
      </button>
            </div>
        </div>
        <hr className="border-t-1.5 border-gray-300 my-5" />
        <div className="flex items-center gap-4 mt-2">
            <button className="px-4 py-2 bg-cyan-500 text-white font-semibold cursor-pointer rounded">Buy Now</button>
            <button className="px-4 py-2 bg-orange-500 text-white font-semibold cursor-pointer rounded">Add to Cart</button>
        </div>
        </div>
     </section>
     <section className="pt-5 mt-5 bg-white p-5">
        <p>
            {
                productDesc?.[0]?.title && <h1 className="text-lg font-semibold">{productDesc?.[0]?.title}</h1>
            }
        </p>
        <p>
            {
                productDesc?.[0]?.call && <h1>{productDesc?.[0]?.call}</h1>
            }
        </p>
        <p>
            {
                productDesc?.[0]?.whatsapp && <h1>{productDesc?.[0]?.whatsapp}</h1>
            }
        </p>
       
        <p>
            { productDesc?.[0]?.call !== undefined &&
                productDesc?.[0]?.features?.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))
            }
        </p>
        <p>
            {
                productDesc?.[0]?.sizes?.map((size, index) => (
                    <p key={index}>{size}</p>
                ))
            }
        </p>
     </section>
    </div>
  );
};

export default ProductDetail;