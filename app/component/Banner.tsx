// // import React from "react";
// // import Image from "next/image";

// // export default function Banner() {
// //   return (
// //     <div className="relative overflow-hidden bg-gradiant-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
// //       <div className="absolute inset-0 opacity-20">
// //         <Image
// //           src="https://th.bing.com/th/id/R.a90f420ad8c71c3aacf28f87de3f1708?rik=A5WC8v2va1qFGg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-n-jZjyEzncE%2fUq8IxN6-giI%2fAAAAAAAADWk%2fOL-YhSPEG_4%2fs1600%2fPizza%2bFood%2bHd%2bWallpaper.jpg&ehk=P%2f8NwSvvwjLvNExGqNkmVRip5lATlUieTUwxOT6m2D0%3d&risl=&pid=ImgRaw&r=0"
// //           alt="Delicious Pizza Banner"
// //         width={200}
// //         height={300}
// //         />
// //       </div>

// //       <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
// //         <h2 className="text-white sm:text-5xl font-bold mb-4">
// //           {" "}
// //           Discover Our Menu
// //         </h2>
// //         <p className="text-white text-lg text-center mb-6 max-w-xl">
// //           Shop Now for Exclusive Pizza Discount!{" "}
// //         </p>

// //         <button
// //           type="button"
// //           className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
// //         >
// //           Exciting Deal Launch at 12pm
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


import React from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">


<Image
  src="https://th.bing.com/th/id/R.a90f420ad8c71c3aacf28f87de3f1708?rik=A5WC8v2va1qFGg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-n-jZjyEzncE%2fUq8IxN6-giI%2fAAAAAAAADWk%2fOL-YhSPEG_4%2fs1600%2fPizza%2bFood%2bHd%2bWallpaper.jpg&ehk=P%2f8NwSvvwjLvNExGqNkmVRip5lATlUieTUwxOT6m2D0%3d&risl=&pid=ImgRaw&r=0"
  alt="Delicious pizza"
  width={500}   // Specify the width of the image
  height={500}  // Specify the height of the image
  style={{ objectFit: 'cover' }}  // Apply object-fit styling
/>

      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">Discover Our Menu</h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now for Exclusive Pizza Discount!
        </p>
        <button
          type="button"
          className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exciting Deal Launch at 12pm
        </button>
      </div>
    </div>
  );
};

export default Banner;



