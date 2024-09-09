import React, { useState } from 'react';
import Button from '../Button/Button';

const ProductGrid = ({ name, price, imgPath, num }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const toggleQuickView = () => {
      setShowQuickView(!showQuickView);
  };

  const handleImageClick = () => {
      toggleQuickView();
  };

  return (
    <div className="product">
      <div
        className="product-image-container"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={process.env.PUBLIC_URL + imgPath}
          alt={"Product " + num}
          className={`product-image ${isImageHovered ? 'zoom-in' : ''}`}
          onClick={handleImageClick}
        />
        <div className="quick-view-banner" onClick={toggleQuickView}>
          Quick View
        </div>
      </div>
      <h3>{name}</h3>
      <hr className='product-grid-divider' />
      <p className='product-price'>${price}</p>
      <Button className="product-button" size="small">Buy Now</Button>

      {showQuickView && (
        <div className="quick-view-modal">
          <div className="quick-view-content">
            <span className="close-modal" onClick={toggleQuickView}>&times;</span>
            <img
              src={process.env.PUBLIC_URL + imgPath}
              alt={"Product " + num}
              className="modal-product-image"
            />
            <h3>{name}</h3>
            <p>description</p>
            <p className="modal-price">{price}</p>
          </div>
        </div>
        )}
    </div>
  );
};

export default ProductGrid;
