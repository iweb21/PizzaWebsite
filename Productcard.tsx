// import { Product } from "@/pages/types";
// import React from "react";
// import Image from "next/image";

// interface ProductCardProps extends Product {
//   onAddToCart: (product: Product) => void; // Fixed the prop name here
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   id,
//   name,
//   price,
//   image,
//   onAddToCart, // Fixed the destructured prop name here
// }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
//       <Image
//         src={image}
//         alt={name}
//         // className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
//         width={200}
//         height={300}
//       />
//       <h3 className="text-xl text-red-600 font-semibold mb-2">{name}</h3>
//       <p className="text-lg text-slate-600 mb-4">{price}</p>
//       <button
//         onClick={() => onAddToCart({ id, name, price, image })} // Ensures the prop function is called correctly
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
//       >
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

import { Product } from "@/pages/types";
import React from "react";
import Image from "next/image";

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void; // Callback for adding the product to the cart
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
      {/* Product Image */}
      <Image
        src={image}
        alt={`Image of ${name}`}
        width={200}
        height={300}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-110"
      />

      {/* Product Details */}
      <h3 className="text-xl text-red-600 font-semibold mb-2">{name}</h3>
      <p className="text-lg text-gray-600 mb-4">${price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        aria-label={`Add ${name} to cart`}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
