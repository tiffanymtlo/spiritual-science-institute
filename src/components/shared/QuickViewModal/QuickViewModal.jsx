import React from 'react';
import Slider from 'react-slick';
import Button from '../Button';
import './QuickViewModal.css';

const IMG_CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const QuickViewModal = ({
  product,
  onClose,
}) => {
  const { id, name, price, imgPath, ribbon } = product;

  const handleClickOutside = (e) => {
    e.stopPropagation();
    if (e.target.className === 'quick-view-modal') {
      onClose(); // Close when clicking outside
    }
  };

  return (
    <div className="quick-view-modal" onClick={handleClickOutside}>
      <div className="quick-view-content">
        <span className="close-modal" onClick={onClose}>×</span>
        <div className='quick-view-img-container'>
          <div className="quick-view-product-carousel">
            {imgPath && imgPath.length > 1 ? (
              <Slider {...IMG_CAROUSEL_SETTINGS}>
                {imgPath.map((path, idx) => (
                  <div key={idx}>
                    <img
                      src={process.env.PUBLIC_URL + path}
                      alt={`${name} + ' image' + ${idx}`}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img src={process.env.PUBLIC_URL + imgPath[0]} alt={name} className="carousel-image" />
            )}
          </div>
          {ribbon && <div className="quick-view-ribbon">{ribbon}</div>}
        </div>
        <div className="quick-view-texts">
          <h2 className="quick-view-header">{name}</h2>
          <p className="quick-view-price">${price}</p>
          <div className="quantity-container">
            <label>Quantity:</label>
            <input type="number" className="quantity-input" defaultValue={1} min={1} />
          </div>
          <div className="quick-view-buttons">
            <Button className="buy-now-button">Buy Now</Button>
            <a href={`/product/${id}`} className="view-details-link">View More Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
