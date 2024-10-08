import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../../shared/Button';
import textsEng from '../../../texts/strings_eng';
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
  const { name, description, duration, price, imgPath, dates } = data;

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
          {dates && <p>{dates}</p>}
          <p>{description}</p>
          <Button className="details-view-btn" size="large">{detailsViewBtnText}</Button>
        </div>
      </div>

      <div className="details-view-contacts">
        <h3>{textsEng['detailViewPage.contactDetails.title']}</h3>
        <div className="details-view-contact-info">
          <p>{textsEng['detailViewPage.contactDetails.phone']}</p>
          <p>{textsEng['detailViewPage.contactDetails.email']}</p>
          <p>{textsEng['detailViewPage.contactDetails.location']}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
