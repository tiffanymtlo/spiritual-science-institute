import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <section id="offerings" className="offerings">
      <h2>Our Offerings</h2>
      <p>Everyone possesses unique energy, and we influence one another...</p>
      <div className="products">
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/iching_cards_lamp_cloth.png'} alt="Product 1" />
          <h3>The Ultimate Set: Iching Cards</h3>
          <p>¥25</p>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/iching_card_pic.png'} alt="Product 2" />
          <h3>Iching Feng Shui Oracle Cards (Small)</h3>
          <p>¥85</p>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/iching_card_pic.png'} alt="Product 3" />
          <h3>Iching Feng Shui Oracle Cards (Large)</h3>
          <p>¥85</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
