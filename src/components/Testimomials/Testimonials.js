import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>The services provided by the Spiritual Science Institute have truly transformed my life. I have found inner peace and balance like never before.</p>
          <h4>Jane Doe</h4>
          <p>I highly recommend the feng shui consultation. It brought a positive shift in my living space and energy.</p>
        </div>
        <div className="testimonial">
          <p>The spiritual soothing sessions have been incredibly calming and uplifting. I feel more connected to my inner self.</p>
          <h4>John Smith</h4>
        </div>
        <div className="testimonial">
          <p>The Spiritual Science Institute's approach to holistic wellness is exceptional. I have experienced profound changes in my life.</p>
          <h4>Emily Chen</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
