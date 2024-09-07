import React, { useState } from 'react';
import Button from '../Button/Button';
import ProductGrid from './ProductGrid';
import './Products.css';


const ProductsList = () => {
  // Initial product data
  const productData = [
    { id: 1, name: 'The Ultimate Set: Iching Cards (Large + Small) + Iching Cards Mat +Energy lamp', price: 25, imgPath: '/iching_cards_lamp_cloth.png' },
    { id: 2, name: 'Iching Feng Shui Oracle Cards (Small)', price: 85, imgPath: '/iching_card_pic.png' },
    { id: 3, name: 'Iching Feng Shui Oracle Cards (Large)', price: 85, imgPath: '/iching_card_pic.png' },
    { id: 4, name: 'Energy lamp', price: 20, imgPath: '/iching_cards_lamp_cloth.png' },
    { id: 5, name: 'Iching Cards Spreads Cloth', price: 10, imgPath: '/iching_cards_lamp_cloth.png' },
    { id: 6, name: 'Iching Cards (Large) + Energy lamp Set', price: 75, imgPath: '/iching_cards_lamp_cloth.png' },
    { id: 7, name: 'Essential Oils Energy Cards Set', price: 75, imgPath: '/iching_cards_lamp_cloth.png' }
  ];

  const [visibleProducts, setVisibleProducts] = useState(3);

  const loadMoreProducts = () => {
    setVisibleProducts(visibleProducts + 3);
  };

  return (
    <>
      <div className="products">
        <div className="product-grid-container">
          {productData.slice(0, visibleProducts).map(product => (
            <ProductGrid key={product.id} name={product.name} price={product.price} imgPath={product.imgPath} />
          ))}
        </div>
      </div>
      {visibleProducts < productData.length && (
        <Button onClick={loadMoreProducts} className="load-more-btn">
          Load More
        </Button>
      )}
    </>
  );
};

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <h2>Our Offerings</h2>
        <p>Everyone possesses unique energy, and we influence one another, generating new energy which directly impacts our emotions, physical well-being and overall fortune.</p>
        <p>We have unique at-home methods that allow you to harness the power of this new energy, promote auspiciousness, and achieve balance in various aspects of your life.</p>
      </div>
      <ProductsList />
    </section>
  );
};

export default Products;
