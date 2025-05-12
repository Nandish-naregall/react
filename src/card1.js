import React from 'react';
import ProductCard from './productCard'

const Card1 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://wallpapercave.com/wp/wp7489540.jpg" 
         
        title="king"
        price="$100.50"
        backgrond-color="purple"
      />
    </div>
  );
};

export default Card1;