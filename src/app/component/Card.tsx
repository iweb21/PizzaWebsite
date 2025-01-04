import React from "react";
import Image from "next/image";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          Delicious Pizza
        </h2>
        <p className="text-white mb-4">
          Experience the juiciest pizza in town, made with fresh ingredients and
          grilled to perfection.
        </p>
        <button className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
          Order Now
        </button>
        <p className="text-white text-2 mt-6 mb-2 text-center font-semibold items-center">
          🍕 Coming Soon: Our New Pizza Launch! 🍕 Get ready for a delicious new
          addition to our menu! Fresh flavors and exciting toppings are just
          around the corner. Stay tuned!
        </p>
        <ul >
          <li className="text-cyan-700"><strong>Cheesy pizza:</strong> is a melty, savory delight with gooey layers of rich, irresistible cheese on a crispy crust.</li>
          <br/>
          <li className="text-cyan-700"><strong>Mashroom Pizza:</strong>Mushroom pizza features earthy, tender mushrooms atop a savory layer of cheese and sauce, creating a rich, flavorful bite.</li>
          <br/>
          <li className="text-cyan-700"><strong>Pepperoni Pizza:</strong> A classic, flavorful pizza with a crispy crust and a thick layer of pepperoni cheese, complete with a generous amount of garlic bread.</li>
          <br/>
          <li className="text-cyan-700"><strong>Veggie Pizza:</strong> A delightful pizza with a crispy crust and a variety of fresh, veggie toppings, such as mushrooms, onions, bell peppers, and spinach.</li>
          <br/>
          <li className="text-cyan-700"><strong>Seafood Pizza: </strong>A pizza with a crispy crust and a rich, flavorful seafood topping, such as salmon, shrimp, or bass, topped with a variety of cheese and sauce.</li>
        </ul>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">


       <Image
        src="https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?ga=GA1.1.289545309.1731409775&semt=ais_hybrid"
        alt="Delicious pizza"
        className="w-full h-auto md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
       />
     </div>
    </section>
  );
};

export default FloatingImageContentBlock;
