import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import Button from '../../shared/Button';
import { servicesData } from '../../constants';
import './ServiceDetails.css';

const IMG_CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(
    (service) => service.id === parseInt(serviceId));
  const { name, description, duration, price, imgPath } = service;

  return (
    <div className="service-details-container">
      <div className="service-details">
        <div className="service-carousel">
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
              className="service-image"
              src={process.env.PUBLIC_URL + imgPath[0]}
              alt={name}
            />
          )}
        </div>
        <div className="service-info">
          <h1>{name}</h1>
          <div className="service-price">
            <p>{duration}</p>
            <p>${price}</p>
          </div>
          <p>{description}</p>
          <Button className="book-now-btn" size="large">Book Now</Button>
        </div>
      </div>

      <div className="service-contact-details">
        <h3>Contact Details</h3>
        <div className="service-info-tab">
          <p>852-9111-9111</p>
          <p>info@iching.com</p>
          <p>Hong Kong</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
