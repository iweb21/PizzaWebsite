import React from "react";
import Image from "next/image";

type PizzaCardProps = {
  imageSrc: string;
  altText: string;
  title: string;
};

const PizzaCard: React.FC<PizzaCardProps> = ({ imageSrc, altText, title }) => {
  return (
    <a
      href="#"
      className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={400}
        height={300}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
      <h3 className="z-10 text-2xl font-serif text-white absolute top-0 left-0 p-4">
        {title}
      </h3>
    </a>
  );
};

const Carousel: React.FC = () => {
  const pizzaData = [
    {
      imageSrc: "/images/fajita2.jpeg",
      altText: "Chicken Fajita Pizza",
      title: "Chicken Fajita",
    },
    {
      imageSrc: "/images/cheese.jpeg",
      altText: "Cheese Stuffed Pizza",
      title: "Cheese Stuffed Pizza",
    },
    {
      imageSrc: "/images/tikka.jpeg",
      altText: "Chicken Supreme Pizza",
      title: "Chicken Supreme",
    },
    {
      imageSrc: "/images/gola.jpeg",
      altText: "BBQ Chicken Pizza",
      title: "BBQ Chicken Pizza",
    },
    {
      imageSrc: "/images/pizza.jpeg",
      altText: "Italian Thin Crust Pizza",
      title: "Italian Thin Crust Pizza",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black to-gray-700 py-4 px-2 mx-auto max-w-screen-xl ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4">
        {/* First Column */}
        <div className="col-span-2  bg-gradient-to-r from-black to-gray-700 flex flex-col"> 
        
          <PizzaCard {...pizzaData[0]} />
        </div>

        {/* Second Column */}
        <div className="col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto flex flex-col">
          <PizzaCard {...pizzaData[1]} />
          <div className="grid gap-4 grid-cols-2 mt-4">
            <PizzaCard {...pizzaData[2]} />
            <PizzaCard {...pizzaData[3]} />
          </div>
        </div>

        {/* Third Column */}
        <div className="col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto flex flex-col">
          <PizzaCard {...pizzaData[4]} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;

