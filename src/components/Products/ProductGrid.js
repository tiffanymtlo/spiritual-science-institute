import React from 'react';
import Button from '../Button/Button';

const ProductGrid = ({ name, price, imgPath, num }) => {
  return (
    <div className="product">
      <img src={process.env.PUBLIC_URL + imgPath} alt={"Product " + num} />
      <h3>{name}</h3>
      <hr className='product-grid-divider' />
      <p className='product-price'>${price}</p>
      <Button className="product-button" size="small">Buy Now</Button>
    </div>
  );
};

export default ProductGrid;
