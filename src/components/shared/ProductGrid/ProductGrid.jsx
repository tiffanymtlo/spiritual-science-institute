import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuickViewModal from '../QuickViewModal/QuickViewModal';
import Button from '../Button';
import './ProductGrid.css';

const ProductGrid = ({ product, isDisplayOnHover = true }) => {
  const { id, name, price, imgPath, ribbon } = product;

  const [showQuickView, setShowQuickView] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const navigate = useNavigate();

  const toggleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    toggleQuickView();
  };

  const handleProductClick = (e) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product" onClick={handleProductClick}>
      <div
        className="product-image-container"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={process.env.PUBLIC_URL + imgPath}
          alt={"Product " + id}
          className={`product-image ${isImageHovered ? 'zoom-in' : ''}`}
          onClick={handleImageClick}
        />
        <div className="quick-view-banner" onClick={toggleQuickView}>
          Quick View
        </div>
        {ribbon && <div className="product-ribbon">{ribbon}</div>}
      </div>
      <h3>{name}</h3>
      <hr className='product-grid-divider' />
      <p className='product-price'>${price}</p>
      <Button
        className={`product-button ${isDisplayOnHover ? 'display-on-hover' : ''}`}
        size="small"
      >
        Buy Now
      </Button>

      {showQuickView && (
        <QuickViewModal
          product={product}
          onClose={toggleQuickView}
        />
      )}
    </div>
  );
};

export default ProductGrid;
