import React from "react";
import Image from "next/image";


export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black">
          <a className="text-white hover:text-gray-400" href="#">
            Home
          </a>

          <a className="text-white hover:text-gray-400" href="#">
            About
          </a>

          <a className="text-white hover:text-gray-400" href="#">
            Delievery
          </a>

          <a className="text-white hover:text-gray-400" href="#">
            Contact
          </a>

          <a className="text-white hover:text-gray-400" href="#">
            Terms & Conditions
          </a>

          <a className="text-white hover:text-gray-400" href="#">
            Privacy Policy
          </a>
        </nav>

        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <a href="https://facebook.com/" target="blank" rel="nofollow">
            <Image
              src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
              alt="facebook logo"
            />
          </a>

          <a href="https://linkedin.com/" target="blank" rel="nofollow">
            <Image
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
              alt="linkedin logo"
            />
          </a>

          <a href="https://instagram.com/" target="blank" rel="nofollow">
            <Image
              src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
              alt="insta logo"
            />
          </a>

          <a href="https://twitter.com/" target="blank" rel="nofollow">
            <Image
              src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
              alt="twitter logo"
             
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
