import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradiant-to-r from-black to-grey-700">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/**logo Pizza */}
                <FaPizzaSlice className="w-6 h-6 text-pink-700 hover:text-cyan-400" />

                {/** Search Icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search your Tempting Pizzas From Menu"
                  />
                  <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className="w-5 h-5 text-pink-600 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  {" "}
                  Order now and get it with
                  <span className="text-pink-600">15 minutes!</span>
                </p>

                {/**Cart Icon*/}
                <FaShoppingCart className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400 " />
                <img
                  className="inline-block  w-8 h-8 rounded-full ring-2 ring-sky-400 "
                  src="https://i.pinimg.com/236x/35/ed/b9/35edb9e9d1629c112b0be81465a8cb95.jpg"
                  alt="user avtar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
