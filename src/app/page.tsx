import React from 'react';
import Navbar from '../app/component/Navbar';
import Carousel from './component/Carousel';
import Progressor from './component/Progressor';
import Pizza from './component/Pizza';
import Banner from './component/Banner';
import ProductList from './component/ProductList';
import Home from './component/Menuitems'; 
import Offer from './component/Offer';
import Reservation from './component/Reservation';
import Card from './component/Card';
import Footer from './component/Footer';


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-600 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Pizza />
      <Banner />
      <ProductList />
      <Home />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
