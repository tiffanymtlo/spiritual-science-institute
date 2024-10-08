import React from 'react';
import textsEng from '../../../texts/strings_eng';
import { testimonialsData } from '../../constants';
import './Testimonials.css';

const TestimomialRow = ({ text, name }) => {
  return (
    <div className="testimonial">
      <hr className='testimonial-divider' />
      <div className="testimonial-content">
        <h4>{name}</h4>
        <p>{text}</p> 
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>{textsEng['home.testimonials.title']}</h2>
        <p>{textsEng['home.testimonials.subtitle']}</p>
      </div>
      <div className="testimonials-container">
        {testimonialsData.map(({ id, text, name }) => (
          <TestimomialRow key={id} text={text} name={name} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
