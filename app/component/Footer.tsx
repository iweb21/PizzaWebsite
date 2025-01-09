// import React from "react";
// import Image from "next/image";


// export default function Footer() {
//   return (
//     <div>
//       <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
//         <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black">
//           <a className="text-white hover:text-gray-400" href="#">
//             Home
//           </a>

//           <a className="text-white hover:text-gray-400" href="#">
//             About
//           </a>

//           <a className="text-white hover:text-gray-400" href="#">
//             Delievery
//           </a>

//           <a className="text-white hover:text-gray-400" href="#">
//             Contact
//           </a>

//           <a className="text-white hover:text-gray-400" href="#">
//             Terms & Conditions
//           </a>

//           <a className="text-white hover:text-gray-400" href="#">
//             Privacy Policy
//           </a>
//         </nav>

//         <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
//           <a href="https://facebook.com/" target="blank" rel="nofollow">
//             <Image
//               src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
//               alt="facebook logo"
//             />
//           </a>

//           <a href="https://linkedin.com/" target="blank" rel="nofollow">
//             <Image
//               src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
//               alt="linkedin logo"
//             />
//           </a>

//           <a href="https://instagram.com/" target="blank" rel="nofollow">
//             <Image
//               src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
//               alt="insta logo"
//             />
//           </a>

//           <a href="https://twitter.com/" target="blank" rel="nofollow">
//             <Image
//               src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
//               alt="twitter logo"
//               width={200}
//               height={300}
             
//             />
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center px-4 py-10 bg-gradient-to-r from-black to-gray-800">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium">
        {["Home", "About", "Delivery", "Contact", "Terms & Conditions", "Privacy Policy"].map(
          (link, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              {link}
            </a>
          )
        )}
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-5">
        {[
          { href: "https://facebook.com/", label: "Facebook", src: "https://img.icons8.com/?size=100&id=118497&format=png" },
          { href: "https://linkedin.com/", label: "LinkedIn", src: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png" },
          { href: "https://instagram.com/", label: "Instagram", src: "https://img.icons8.com/?size=100&id=32323&format=png" },
          { href: "https://twitter.com/", label: "Twitter", src: "https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png" },
        ].map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${icon.label} page`}
          >
            <Image
              src={icon.src}
              alt={`Visit our ${icon.label} page`}
              width={40}
              height={40}
              className="transition-transform duration-300 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
