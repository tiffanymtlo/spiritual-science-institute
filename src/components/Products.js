import React from 'react';
import Button from './Button';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <h2>Our Offerings</h2>
        <p>Everyone possesses unique energy, and we influence one another, generating new energy which directly impacts our emotions, physical well-being and overall fortune.</p>
        <p>We have unique at-home methods that allow you to harness the power of this new energy, promote auspiciousness, and achieve balance in various aspects of your life.</p>
      </div>
      <div className="products">
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/iching_cards_lamp_cloth.png'} alt="Product 1" />
          <h3>The Ultimate Set: Iching Cards</h3>
          <hr className='product-grid-divider' />
          <p className='product-price'>¥25</p>
          <Button className="product-button" size="small">Buy Now</Button>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/iching_card_pic.png'} alt="Product 2" />
          <h3>Iching Feng Shui Oracle Cards (Small)</h3>
          <hr className='product-grid-divider' />
          <p className='product-price'>¥85</p>
          <Button className="product-button" size="small">Buy Now</Button>
        </div>
        <div className="product">
          <img src={process.env.PUBLIC_URL + '/iching_card_pic.png'} alt="Product 3" />
          <h3>Iching Feng Shui Oracle Cards (Large)</h3>
          <hr className='product-grid-divider' />
          <p className='product-price'>¥85</p>
          <Button className="product-button" size="small">Buy Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
