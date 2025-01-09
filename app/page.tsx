// import React from 'react';
// import Navbar from '../app/component/Navbar';
// import Carousel from './component/Carousel';
// import Progressor from './component/Progressor';
// import Pizza from './component/Pizza';
// import Banner from './component/Banner';
// import ProductList from './component/ProductList';
// import Home from './component/Menuitems'; 
// import Offer from './component/Offer';
// import Reservation from './component/Reservation';
// import Card from './component/Card';
// import Footer from './component/Footer';
// import Menuitems from './component/Menuitems';


// export default function App() {
//   return (
//     <div className="bg-gradient-to-r from-black to-slate-600 min-h-screen">
//       <Navbar />
//       <Carousel />
//       <Progressor />
//       <Pizza />
//       <Banner />
//       <ProductList />
//       <Home />
//       <Offer />
//       <Card />
//       <Reservation />
//       <Menuitems />
//       <Footer />
//     </div>
//   );
// }


import React from 'react';
import Navbar from '../app/component/Navbar';
import Carousel from './component/Carousel';
import Progressor from './component/Progressor';
import Pizza from './component/Pizza';
import Banner from './component/Banner';
import ProductList from './component/ProductList';
import Offer from './component/Offer';
import Reservation from './component/Reservation';
import Card from './component/Card';
import Footer from './component/Footer';
import Menuitems from './component/Menuitems'; // Assuming 'Home' and 'Menuitems' are the same, so we'll keep 'Menuitems' only.

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-600 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Pizza />
      <Banner />
      <ProductList />
      <Menuitems />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
