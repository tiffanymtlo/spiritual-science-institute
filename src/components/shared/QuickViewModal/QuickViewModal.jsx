import React from 'react';
import './QuickViewModal.css';


const QuickViewModal = ({
  content, // React component to be displayed in the modal
  onClose,
}) => {

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
        {content}
      </div>
    </div>
  );
};

export default QuickViewModal;
