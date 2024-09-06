import React from 'react';
import './Button.css';

const Button = ({ size, children, className, ...props }) => {
  let newClassName = 'button';

  switch (size) {
    case 'small':
      newClassName += ' button-small' + ' ' + className;
      break;
    case 'medium':
      newClassName += ' button-medium' + ' ' + className;
      break;
    case 'large':
      newClassName += ' button-large' + ' ' + className;
      break;
    default:
      newClassName += ' button-small' + ' ' + className; // Default to small if no size is provided
  }

  return (
    <button className={newClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;