import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import Button from '../../shared/Button';
import { productData } from '../../constants';
import './ProductDetails.css';

const IMG_CAROUSEL_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData.find(
    (product) => product.id === parseInt(productId));
  const { name, price, description, imgPath } = product;

  return (
    <div className="product-details-container">
      <div className="product-header">
        <div className="product-carousel">
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
              className="product-image"
              src={imgPath[0]}
              alt={name}
            />
          )}
        </div>
        <div className="product-info">
          <h1>{name}</h1>
          <p>${price}</p>
          <div className="product-purchase">
            <div className="product-quantity">
              <label htmlFor="quantity">Quantity:</label>
              <input id="quantity" type="number" min="1" defaultValue="1" />
            </div>
            <Button className="buy-now-btn">Buy Now</Button>
          </div>
        </div>
      </div>

      <div className="product-description">
        <div className="product-tabs">
          <div className="tab product-info-tab">
            <h3>PRODUCT INFO</h3>
            <p>
              {/* TODO: ADD PRODUCT INFO HERE */}
              {description}
              {/* This ultimate set has everything you need to start analyzing and enhancing
              the energy in you and your environments (including home and offices). It includes:
              <ul>
                <li><b>Iching Cards (Large):</b> Best for at-home use.</li>
                <li><b>Iching Cards (Small):</b> Best for on-the-go insights.</li>
                <li><b>Iching Cards Mat Cloth:</b> Double-sided mat for Feng Shui analysis.</li>
                <li><b>Energy Lamp:</b> Enhances energy with Iching Cards.</li>
              </ul> */}
            </p>
          </div>
          <div className="tab">
            <h3>SHIPPING INFO</h3>
            <p>
              For shipping within Hong Kong, we provide free shipping for orders over $500. For orders under $500,
              a shipping fee of $20 applies. Additional fees apply for international shipping. Please contact us for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
