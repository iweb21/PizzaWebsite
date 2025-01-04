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
//                   className="inline-block  w-8 h-8 rounded-full ring-2 ring-sky-400 "
//                   src="https://i.pinimg.com/236x/35/ed/b9/35edb9e9d1629c112b0be81465a8cb95.jpg"
//                   alt="user avtar"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/deals");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://example.com/path-to-image.jpg"
          alt="Delicious pizza with vibrant toppings"
          layout="fill" // Ensures full coverage
          objectFit="cover" // Keeps the aspect ratio
          priority // Ensures image is preloaded for better LCP
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg mb-6 max-w-xl">
          Shop now for exclusive pizza discounts!
        </p>

        <button
          type="button"
          aria-label="Exciting deal launches at 12 PM"
          onClick={handleButtonClick}
          className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exciting Deal Launch at 12 PM
        </button>
      </div>
    </section>
  );
}

