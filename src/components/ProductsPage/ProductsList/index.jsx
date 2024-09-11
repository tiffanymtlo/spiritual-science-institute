import React from 'react';
import ProductGrid from '../../shared/ProductGrid/ProductGrid';
import './ProductsList.css';

const ProductsList = ({ products }) => {
  return (
    <div className="products-list-container">
      <h6 className='products-count'>{products.length + ' products'}</h6>
      <div className="products-list">
        {products.map((product) => (
          <ProductGrid key={product.id} product={product} isDisplayOnHover={false} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
