import React, { useRef } from 'react';
import OrderSubmit from './OrderSubmit';
import ProductGrid from '../Components/ProductGrid';
import ProductCard from '../Components/PorductDetails';
import TrendingAndRecommended from '../Components/TrendingAndRecommended';



const LeningWeb = () => {
  const orderSubmitRef = useRef(null);

  const scrollToOrder = () => {
    if (orderSubmitRef.current) {
      orderSubmitRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>

      <div style={{ height: '10px' }}></div>

      <TrendingAndRecommended scrollToOrder={scrollToOrder} />
      <ProductCard scrollToOrder={scrollToOrder} />
      <ProductGrid scrollToOrder={scrollToOrder} />
      <OrderSubmit ref={orderSubmitRef} />
    </div>
  );
};

export default LeningWeb;
