// 'use client'
// import React from 'react'

// type  offer = {
//   title: string,
//   description: string,
  
// }

// const SpecialOffers: React.FC = () => {
//   const offers: offer[] = [
//     {title: '25% Off', description: 'All Pizzas with 3 or more toppings' },
    
//     { title: '20% Off', description: 'All Pizzas' },
    
//     { title: '10% Off', description: 'Pizzas with 2 or more toppings' },
//     { title: '5% Off', description: 'Buy 3 Pizzas and get 4th one free' },
//   ];


//   const handleofferClick = (description :string) => {
//     alert(`You have selected ${description}`);
//   }
// return (
//   <section className='py-10 bg-white'>
//     <div className='container mx-auto text-center'>
//       <h2 className='text-3xl font-bold text-gray-900'>Special Offers</h2>
//       <p className='text-sm text-cyan-700 mb-6'>Discover our most popular offers and discounts</p>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6'>
//         {offers.map((offer, index) => (
//           <button key={index}
//           onClick={()=>handleofferClick(offer.description)}
//           className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'>
//             <h3 className='text-2xl font-serif text-slate-700'>{offer.title}</h3>
//             <p className='text-sm text-gray-600'>{offer.description}</p>

//           </button>
//           ))}
//       </div>

//     </div>
//     </section>

// )
// }

// export default SpecialOffers

'use client';

import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    { title: '25% Off', description: 'All Pizzas with 3 or more toppings' },
    { title: '20% Off', description: 'All Pizzas' },
    { title: '10% Off', description: 'Pizzas with 2 or more toppings' },
    { title: '5% Off', description: 'Buy 3 Pizzas and get 4th one free' },
  ];

  const handleOfferClick = (description: string) => {
    alert(`You have selected: ${description}`);
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
        <p className="text-sm text-cyan-700 mb-6">
          Discover our most popular offers and discounts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              role="button"
              aria-label={`Special offer: ${offer.title}`}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-serif text-slate-700 mb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
