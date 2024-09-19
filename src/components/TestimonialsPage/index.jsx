import React from 'react';
import { testimonialsData } from '../constants';
import './TestimonialsPage.css';

const TestimonialGrid = ({ testimonial }) => {
  return (
    <div className="testimonial-grid">
      <div className="testimonial-grid-img-container">
        <img src={process.env.PUBLIC_URL + '/testimonial_grid_decor.png'} alt="testimonial-grid-background-image" />
      </div>
      <div className='testimonial-grid-content'>
        <h2>{testimonial.name}</h2>
        <p>{testimonial.text}</p>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <div className='testimonials-page-header'>
        <h1>Testimonials</h1>
        <h4>"Listen what the others have to say walking down this journey"</h4>
      </div>
      <div className="testimonials-page-list">
        {testimonialsData.map((testimonial) => (
          <TestimonialGrid key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
