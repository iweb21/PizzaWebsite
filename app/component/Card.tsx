import React from "react";
import Image from "next/image";

const FloatingImageContentBlock: React.FC = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center px-6">
      {/* Text Content */}
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white text-center md:text-left">
          Delicious Pizza
        </h2>
        <p className="text-white mb-4 text-center md:text-left">
          Experience the juiciest pizza in town, made with fresh ingredients and
          grilled to perfection.
        </p>
        <button className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
          Order Now
        </button>
        <p className="text-white text-lg mt-6 mb-2 text-center md:text-left font-semibold">
          🍕 Coming Soon: Our New Pizza Launch! 🍕 Get ready for a delicious new
          addition to our menu! Fresh flavors and exciting toppings are just
          around the corner. Stay tuned!
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li className="text-cyan-400">
            <strong>Cheesy Pizza:</strong> A melty, savory delight with gooey
            layers of rich, irresistible cheese on a crispy crust.
          </li>
          <li className="text-cyan-400">
            <strong>Mushroom Pizza:</strong> Features earthy, tender mushrooms
            atop a savory layer of cheese and sauce, creating a rich, flavorful
            bite.
          </li>
          <li className="text-cyan-400">
            <strong>Pepperoni Pizza:</strong> A classic with crispy crust and a
            thick layer of pepperoni cheese, paired with garlic bread.
          </li>
          <li className="text-cyan-400">
            <strong>Veggie Pizza:</strong> A delightful mix of fresh toppings
            like mushrooms, onions, bell peppers, and spinach.
          </li>
          <li className="text-cyan-400">
            <strong>Seafood Pizza:</strong> Topped with seafood like salmon,
            shrimp, or bass, alongside a variety of cheese and sauce.
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?ga=GA1.1.289545309.1731409775&semt=ais_hybrid"
          alt="Pattern of various pizzas"
          width={500}
          height={400}
          className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
