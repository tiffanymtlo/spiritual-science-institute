import React, { useState } from 'react';
import { productData } from '../../constants';
import Button from '../../shared/Button';
import ProductGrid from '../../shared/ProductGrid/ProductGrid';
import textsEng from '../../../texts/strings_eng';
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
        <h2>{textsEng['home.products.title']}</h2>
        <p>{textsEng['home.products.subtitle.first.paragraph']}</p>
        <p>{textsEng['home.products.subtitle.second.paragraph']}</p>
      </div>
      <ProductsList />
    </section>
  );
};

export default Products;
