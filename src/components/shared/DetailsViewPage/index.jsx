import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../../shared/Button';
import './DetailsViewPage.css';

const IMG_CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const DetailsView = ({ data, detailsViewBtnText }) => {
  const { name, description, duration, price, imgPath } = data;

  return (
    <div className="details-view-container">
      <div className="details-view">
        <div className="details-view-carousel">
          {imgPath && imgPath.length > 1 ? (
            <Slider {...IMG_CAROUSEL_SETTINGS}>
              {imgPath.map((path, index) => (
                <div key={index}>
                  <img
                    className="carousel-image"
                    src={process.env.PUBLIC_URL + path}
                    alt={name + ' image ' + index}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              className="details-view-image"
              src={process.env.PUBLIC_URL + imgPath[0]}
              alt={name}
            />
          )}
        </div>
        <div className="details-view-info">
          <h1>{name}</h1>
          <div className="details-view-price">
            <p>{duration}</p>
            <p>${price}</p>
          </div>
          <p>{description}</p>
          <Button className="details-view-btn" size="large">{detailsViewBtnText}</Button>
        </div>
      </div>

      <div className="details-view-contacts">
        <h3>Contact Details</h3>
        <div className="details-view-contact-info">
          <p>852-9111-9111</p>
          <p>info@iching.com</p>
          <p>Hong Kong</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
