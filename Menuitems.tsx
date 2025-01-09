// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import Image from "next/image";
// // // import ProductCard from "./Productcard";
// // // import { Product } from "@/pages/types";

// // // const LOCAL_STORAGE_KEY = "Cart";

// // // const ButgeryMenu = () => {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [cart, setCart] = useState<Product[]>([]);
// // //   const [showCart, setShowCart] = useState(false);
// // //   const [isCheckout, setIsCheckout] = useState(false);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const response = await fetch("/api/products");
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch products");
// // //         }
// // //         const data = await response.json();
// // //         setProducts(data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     const loadCart = () => {
// // //       const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
// // //       if (savedCart) {
// // //         setCart(JSON.parse(savedCart));
// // //       }
// // //     };

// // //     fetchProducts();
// // //     loadCart();
// // //   }, []);

// // //   const addToCart = (product: Product) => {
// // //     setCart((prevCart) => {
// // //       const updatedCart = [...prevCart, product];
// // //       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));
// // //       return updatedCart;
// // //     });
// // //   };

// // //   const toggleCart = () => setShowCart((prev) => !prev);

// // //   const clearCart = () => {
// // //     setCart([]);
// // //     localStorage.removeItem(LOCAL_STORAGE_KEY);
// // //   };

// // //   const goToCheckout = () => setIsCheckout(true);

// // //   const confirmOrder = () => {
// // //     alert("Order confirmed. It will be delivered to your doorstep!");
// // //     setCart([]);
// // //     localStorage.removeItem(LOCAL_STORAGE_KEY);
// // //     setIsCheckout(false);
// // //   };

// // //   const cartTotal = cart.reduce((total, product) => total + product.price, 0);

// // //   return (
// // //     <div className="relative min-h-screen py-6">
// // //       {/* Background */}
// // //       <div
// // //         className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
// // //         style={{
// // //           backgroundImage:
// // //             "url('https://th.bing.com/th/id/OIP.3Pb65bePzOEOfN4D7cgEPQHaEL?pid=ImgDet&w=206&h=116&c=7&dpr=1.3')",
// // //         }}
// // //       ></div>

// // //       {/* Content */}
// // //       <div className="relative z-10">
// // //         {/* Header */}
// // //         <div className="max-w-6xl mx-auto text-center mb-8">
// // //           <h1 className="text-4xl font-bold text-red-600 mb-4">
// // //             Delicious Pizza
// // //           </h1>
// // //           <p className="text-xl text-white">
// // //             Discover the delicious pizza options in our menu, crafted to satisfy
// // //             your cravings!
// // //           </p>
// // //         </div>

// // //         {/* Product Grid */}
// // //         <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {products.map((product) => (
// // //             <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
// // //           ))}
// // //         </div>

// // //         {/* Cart Section */}
// // //         <div className="max-w-6xl mx-auto mt-8">
// // //           <button
// // //             onClick={toggleCart}
// // //             className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out"
// // //           >
// // //             {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
// // //           </button>

// // //           {showCart && (
// // //             <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-4xl font-bold mb-4 text-blue-600">
// // //                 Your Cart Items
// // //               </h2>
// // //               {cart.length > 0 ? (
// // //                 <>
// // //                   <ul>
// // //                     {cart.map((product, index) => (
// // //                       <li
// // //                         key={index}
// // //                         className="flex items-center mb-4"
// // //                       >
// // //                         <Image
// // //                           src={product.image}
// // //                           alt={product.name}
// // //                           width={60}
// // //                           height={60}
// // //                           className="rounded-md"
// // //                         />
// // //                         <span className="ml-4 text-lg font-medium">
// // //                           {product.name} - ${product.price.toFixed(2)}
// // //                         </span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>

// // //                   <div className="flex justify-between mt-6">
// // //                     <span className="font-semibold text-xl">
// // //                       Total: ${cartTotal.toFixed(2)}
// // //                     </span>
// // //                     <div>
// // //                       <button
// // //                         onClick={goToCheckout}
// // //                         className="bg-green-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-green-700"
// // //                       >
// // //                         Proceed to Checkout
// // //                       </button>
// // //                       <button
// // //                         onClick={clearCart}
// // //                         className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-red-700"
// // //                       >
// // //                         Clear Cart
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </>
// // //               ) : (
// // //                 <p className="text-lg">Your cart is empty</p>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Checkout Modal */}
// // //         {isCheckout && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // //             <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
// // //               <h2 className="text-4xl font-bold text-blue-600 mb-4">
// // //                 Checkout
// // //               </h2>
// // //               <ul>
// // //                 {cart.map((product, index) => (
// // //                   <li key={index} className="flex justify-between mb-4">
// // //                     <span>{product.name}</span>
// // //                     <span>${product.price.toFixed(2)}</span>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //               <div className="flex justify-between mt-4">
// // //                 <span className="font-semibold text-xl">Total:</span>
// // //                 <span className="font-semibold text-xl">
// // //                   ${cartTotal.toFixed(2)}
// // //                 </span>
// // //               </div>
// // //               <div className="mt-6 flex justify-between">
// // //                 <button
// // //                   onClick={() => setIsCheckout(false)}
// // //                   className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
// // //                 >
// // //                   Close
// // //                 </button>
// // //                 <button
// // //                   onClick={confirmOrder}
// // //                   className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
// // //                 >
// // //                   Confirm Order
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ButgeryMenu;





// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Image from "next/image";
// // import { Product } from "@/pages/types";

// // type ProductCardProps = {
// //   product: Product;
// //   onAddToCart: (product: Product) => void;
// // };

// // const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
// //       <Image
// //         src={product.image}
// //         alt={product.name}
// //         width={200}
// //         height={200}
// //         className="rounded-md"
// //       />
// //       <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
// //       <p className="text-gray-600">${product.price.toFixed(2)}</p>
// //       <button
// //         onClick={() => onAddToCart(product)}
// //         className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700"
// //       >
// //         Add to Cart
// //       </button>
// //     </div>
// //   );
// // };

// // const LOCAL_STORAGE_KEY = "Cart";

// // const ButgeryMenu: React.FC = () => {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [cart, setCart] = useState<Product[]>([]);
// //   const [showCart, setShowCart] = useState(false);
// //   const [isCheckout, setIsCheckout] = useState(false);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await fetch("/api/products");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch products");
// //         }
// //         const data = await response.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     const loadCart = () => {
// //       const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
// //       if (savedCart) {
// //         setCart(JSON.parse(savedCart));
// //       }
// //     };

// //     fetchProducts();
// //     loadCart();
// //   }, []);

// //   const addToCart = (product: Product) => {
// //     setCart((prevCart) => {
// //       const updatedCart = [...prevCart, product];
// //       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));
// //       return updatedCart;
// //     });
// //   };

// //   const toggleCart = () => setShowCart((prev) => !prev);

// //   const clearCart = () => {
// //     setCart([]);
// //     localStorage.removeItem(LOCAL_STORAGE_KEY);
// //   };

// //   const goToCheckout = () => setIsCheckout(true);

// //   const confirmOrder = () => {
// //     alert("Order confirmed. It will be delivered to your doorstep!");
// //     setCart([]);
// //     localStorage.removeItem(LOCAL_STORAGE_KEY);
// //     setIsCheckout(false);
// //   };

// //   const cartTotal = cart.reduce((total, product) => total + product.price, 0);

// //   return (
// //     <div className="relative min-h-screen py-6">
// //       {/* Background */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
// //         style={{
// //           backgroundImage:
// //             "url('https://th.bing.com/th/id/OIP.3Pb65bePzOEOfN4D7cgEPQHaEL?pid=ImgDet&w=206&h=116&c=7&dpr=1.3')",
// //         }}
// //       ></div>

// //       {/* Content */}
// //       <div className="relative z-10">
// //         {/* Header */}
// //         <div className="max-w-6xl mx-auto text-center mb-8">
// //           <h1 className="text-4xl font-bold text-red-600 mb-4">
// //             Delicious Pizza
// //           </h1>
// //           <p className="text-xl text-white">
// //             Discover the delicious pizza options in our menu, crafted to satisfy
// //             your cravings!
// //           </p>
// //         </div>

// //         {/* Product Grid */}
// //         <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {products.map((product) => (
// //             <ProductCard
// //               key={product.id}
// //               product={product}
// //               onAddToCart={addToCart}
// //             />
// //           ))}
// //         </div>

// //         {/* Cart Section */}
// //         <div className="max-w-6xl mx-auto mt-8">
// //           <button
// //             onClick={toggleCart}
// //             className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out"
// //           >
// //             {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
// //           </button>

// //           {showCart && (
// //             <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
// //               <h2 className="text-4xl font-bold mb-4 text-blue-600">
// //                 Your Cart Items
// //               </h2>
// //               {cart.length > 0 ? (
// //                 <>
// //                   <ul>
// //                     {cart.map((product, index) => (
// //                       <li key={index} className="flex items-center mb-4">
// //                         <Image
// //                           src={product.image}
// //                           alt={product.name}
// //                           width={60}
// //                           height={60}
// //                           className="rounded-md"
// //                         />
// //                         <span className="ml-4 text-lg font-medium">
// //                           {product.name} - ${product.price.toFixed(2)}
// //                         </span>
// //                       </li>
// //                     ))}
// //                   </ul>

// //                   <div className="flex justify-between mt-6">
// //                     <span className="font-semibold text-xl">
// //                       Total: ${cartTotal.toFixed(2)}
// //                     </span>
// //                     <div>
// //                       <button
// //                         onClick={goToCheckout}
// //                         className="bg-green-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-green-700"
// //                       >
// //                         Proceed to Checkout
// //                       </button>
// //                       <button
// //                         onClick={clearCart}
// //                         className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-red-700"
// //                       >
// //                         Clear Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </>
// //               ) : (
// //                 <p className="text-lg">Your cart is empty</p>
// //               )}
// //             </div>
// //           )}
// //         </div>

// //         {/* Checkout Modal */}
// //         {isCheckout && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //             <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
// //               <h2 className="text-4xl font-bold text-blue-600 mb-4">
// //                 Checkout
// //               </h2>
// //               <ul>
// //                 {cart.map((product, index) => (
// //                   <li key={index} className="flex justify-between mb-4">
// //                     <span>{product.name}</span>
// //                     <span>${product.price.toFixed(2)}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <div className="flex justify-between mt-4">
// //                 <span className="font-semibold text-xl">Total:</span>
// //                 <span className="font-semibold text-xl">
// //                   ${cartTotal.toFixed(2)}
// //                 </span>
// //               </div>
// //               <div className="mt-6 flex justify-between">
// //                 <button
// //                   onClick={() => setIsCheckout(false)}
// //                   className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
// //                 >
// //                   Close
// //                 </button>
// //                 <button
// //                   onClick={confirmOrder}
// //                   className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
// //                 >
// //                   Confirm Order
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ButgeryMenu;







// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Product } from "@/pages/types";

// type ProductCardProps = {
//   product: Product;
//   onAddToCart: (product: Product) => void;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
//       {/* Image Section */}
//       <div className="flex-shrink-0">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={250} // Increased width
//           height={150} // Adjusted height
//           className="rounded-md"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="ml-4 flex flex-col justify-between flex-grow">
//         <h2 className="text-lg font-bold">{product.name}</h2>
//         <p className="text-gray-600">${product.price.toFixed(2)}</p>
//         <button
//           onClick={() => onAddToCart(product)}
//           className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 self-start"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// const LOCAL_STORAGE_KEY = "Cart";

// const ButgeryMenu: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [isCheckout, setIsCheckout] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/products");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const loadCart = () => {
//       const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
//       if (savedCart) {
//         setCart(JSON.parse(savedCart));
//       }
//     };

//     fetchProducts();
//     loadCart();
//   }, []);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const toggleCart = () => setShowCart((prev) => !prev);

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem(LOCAL_STORAGE_KEY);
//   };

//   const goToCheckout = () => setIsCheckout(true);

//   const confirmOrder = () => {
//     alert("Order confirmed. It will be delivered to your doorstep!");
//     setCart([]);
//     localStorage.removeItem(LOCAL_STORAGE_KEY);
//     setIsCheckout(false);
//   };

//   const cartTotal = cart.reduce((total, product) => total + product.price, 0);

//   return (
//     <div className="relative min-h-screen py-6">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
//         style={{
//           backgroundImage:
//             "url('https://th.bing.com/th/id/OIP.3Pb65bePzOEOfN4D7cgEPQHaEL?pid=ImgDet&w=206&h=116&c=7&dpr=1.3')",
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Header */}
//         <div className="max-w-6xl mx-auto text-center mb-8">
//           <h1 className="text-4xl font-bold text-red-600 mb-4">
//             Delicious Pizza
//           </h1>
//           <p className="text-xl text-white">
//             Discover the delicious pizza options in our menu, crafted to satisfy
//             your cravings!
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onAddToCart={addToCart}
//             />
//           ))}
//         </div>

//         {/* Cart Section */}
//         <div className="max-w-6xl mx-auto mt-8">
//           <button
//             onClick={toggleCart}
//             className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out"
//           >
//             {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
//           </button>

//           {showCart && (
//             <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-4xl font-bold mb-4 text-blue-600">
//                 Your Cart Items
//               </h2>
//               {cart.length > 0 ? (
//                 <>
//                   <ul>
//                     {cart.map((product, index) => (
//                       <li key={index} className="flex items-center mb-4">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           width={60}
//                           height={60}
//                           className="rounded-md"
//                         />
//                         <span className="ml-4 text-lg font-medium">
//                           {product.name} - ${product.price.toFixed(2)}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="flex justify-between mt-6">
//                     <span className="font-semibold text-xl">
//                       Total: ${cartTotal.toFixed(2)}
//                     </span>
//                     <div>
//                       <button
//                         onClick={goToCheckout}
//                         className="bg-green-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-green-700"
//                       >
//                         Proceed to Checkout
//                       </button>
//                       <button
//                         onClick={clearCart}
//                         className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-white shadow-md hover:bg-red-700"
//                       >
//                         Clear Cart
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <p className="text-lg">Your cart is empty</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Checkout Modal */}
//         {isCheckout && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//               <h2 className="text-4xl font-bold text-blue-600 mb-4">
//                 Checkout
//               </h2>
//               <ul>
//                 {cart.map((product, index) => (
//                   <li key={index} className="flex justify-between mb-4">
//                     <span>{product.name}</span>
//                     <span>${product.price.toFixed(2)}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-between mt-4">
//                 <span className="font-semibold text-xl">Total:</span>
//                 <span className="font-semibold text-xl">
//                   ${cartTotal.toFixed(2)}
//                 </span>
//               </div>
//               <div className="mt-6 flex justify-between">
//                 <button
//                   onClick={() => setIsCheckout(false)}
//                   className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
//                 >
//                   Close
//                 </button>
//                 <button
//                   onClick={confirmOrder}
//                   className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
//                 >
//                   Confirm Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ButgeryMenu;










"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import ProductCard from "./Productcard";
import { Product } from "@/pages/types";
import Image from "next/image";

const ButgeryMenu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCard, setShowCard] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProduct();

    const savedCart = localStorage.getItem("Cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("Cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Cart visibility toggle
  const toggleCart = () => {
    setShowCard((prev) => !prev);
  };

  // Checkout modal
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("Cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/OIP.3Pb65bePzOEOfN4D7cgEPQHaEL?pid=ImgDet&w=206&h=116&c=7&dpr=1.3')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl max-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Delicious Pizza
          </h1>
          <p className="text-xl text-white">
            {" "}
            Discover the delicious pizza options in our menu, crafted to satisfy
            your cravings!
          </p>
        </div>

        {/* Product section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart section */}
        <div className="max-w-6xl max-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out transform"
          >
            {showCard ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCard && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Cart Items Include:
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={product.image}
                          alt={product.image}
                          className="w-20 h-20 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform text-black"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>

                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout section */}
        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-red-600">
                Please confirm your order before proceeding
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total: </span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-700 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Order confirmed. It will be delivered to your doorstep!"
                    )
                  }
                  className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButgeryMenu;