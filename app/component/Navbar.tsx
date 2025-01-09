// import React from "react";
// import { FaPizzaSlice } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import Image from "next/image";
// export default function Navbar() {
//   return (
//     <div>
//       <div className="grid xl:grid-cols-1 grid-cols-1">
//         <div className="p-5">
//           <div className="py-3 px-3 rounded-xl border w-full bg-gradiant-to-r from-black to-grey-700">
//             <div className="flex justify-between items-center">
//               <div className="flex justify-items-center items-center gap-2">
//                 {/**logo Pizza */}
//                 <FaPizzaSlice className="w-6 h-6 text-pink-700 hover:text-cyan-400" />

//                 {/** Search Icon */}
//                 <div style={{ position: "relative" }}>
//                   <input
//                     className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
//                     placeholder="Search your Tempting Pizzas From Menu"
//                   />
//                   <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
//                 </div>
//               </div>

//               <div className="flex justify-center items-center gap-2">
//                 <FaBolt className="w-5 h-5 text-pink-600 hidden lg:block md:block" />
//                 <p className="text-sm text-white hidden lg:block md:block">
//                   {" "}
//                   Order now and get it with
//                   <span className="text-pink-600">15 minutes!</span>
//                 </p>

//                 {/**Cart Icon*/}
//                 <FaShoppingCart className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400 " />
//                 <Image
//                   // className="inline-block  w-8 h-8 rounded-full ring-2 ring-sky-400 "
                 
//   src="../avatar.jpg"             
//   alt="user avatar"
//   width={200}
//   height={300}
// />

                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FaPizzaSlice, FaSearch, FaBolt, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
// import avatar from "../public/avatar.jpg";

const Navbar: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
          <div className="flex justify-between items-center">
            {/* Logo and Search */}
            <div className="flex items-center gap-2">
              {/* Pizza Logo */}
              <FaPizzaSlice className="w-6 h-6 text-pink-700 hover:text-cyan-400" />

              {/* Search Bar */}
              <div style={{ position: "relative" }} className="hidden lg:block md:block">
                <input
                  type="text"
                  className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10"
                  placeholder="Search your Tempting Pizzas From Menu"
                  aria-label="Search pizzas"
                />
                <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Bolt Icon */}
              <FaBolt className="w-5 h-5 text-pink-600 hidden lg:block md:block" />

              {/* Order Now Text */}
              <p className="text-sm text-white hidden lg:block md:block">
                Order now and get it within <span className="text-pink-600">15 minutes!</span>
              </p>

              {/* Cart Icon */}
              <FaShoppingCart className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400" />

              {/* User Avatar */}
              <Image
              className="rounded-full ring-2 ring-sky-400"
              src="/avatar.jpg" // Using a fallback image if avatar is not available
              alt="User avatar"
              width={40}
              height={40}
            />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
