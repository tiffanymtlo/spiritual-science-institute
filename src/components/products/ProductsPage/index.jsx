import React from 'react';
import { productData } from '../../constants';
import Header from './Header';
import ProductsList from './ProductsList';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header />
      <ProductsList products={productData} />
    </div>
  );
};

export default ProductsPage;