import React, { useState } from 'react';
import { productData } from '../../constants';
import Button from '../../Button/Button';
import ProductGrid from './ProductGrid';
import './Products.css';


const ProductsList = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const loadMoreProducts = () => {
    setVisibleProducts(visibleProducts + 3);
  };

  return (
    <>
      <div className="products">
        <div className="product-grid-container">
          {productData.slice(0, visibleProducts).map(product => (
            <ProductGrid key={product.id} product={product} />
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
