import React from 'react';
import Button from '../Button';
import './QuickViewModal.css';

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
          <img src={process.env.PUBLIC_URL + imgPath} alt={name} />
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
