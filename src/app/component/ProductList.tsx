import React from "react";
import Image from "next/image";

const Products = [
  {
    id: 1,
    title: "Gourmet Pizza",
    category: "fixing",
    price: "300.00",
    imageUrl:
   "https://media.giphy.com/media/gxLbfh5DvhspW/giphy.gif",
   bgcolor:"bg-amber-500",
  },


  {
    id: 2,
    title: "Grilled Parmesan Pizza",
    category: "delight",
    price: "350.00",
    imageUrl:
     "https://th.bing.com/th/id/R.f0d4f10ef24c54c1f908a5268a69233c?rik=4GwM%2bxW5TbamBg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fPkKbAmq0IJonS%2fgiphy.gif&ehk=h5964G7vQkcq17T8lfXcp1wyXWsqtYvAiA6NNzCuKCw%3d&risl=&pid=ImgRaw&r=0",
     bgcolor:"bg-green-700"
  },

  {
    id: 3,
    title: "Grilled Cheese Pizza",
    category: "fixing",
    price: " 380.0",
    imageUrl:
     "https://media.giphy.com/media/LZhjYok6EnDCE/giphy.gif" ,
    bgcolor: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6 ">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgcolor} rounded-lg shadow-lggroup max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradiant(black,transparent 50%",
                transform: "rotate3d(0, 0, 1, 20deg)scale3d(1, 0.6, 1",
                opacity: 0.2,
              }}
            ></div>

            <Image
              className="relative w-50"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between ">
              <span className="block font-serif text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
