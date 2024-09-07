import React from 'react';
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
  const testimonials = [
    {
      id: 1,
      text: 'I highly recommend the feng shui consultation. It brought a positive shift in my living space and energy.',
      name: 'Jane Doe',
    },
    {
      id: 2,
      text: 'The spiritual soothing sessions have been incredibly calming and uplifting. I feel more connected to my inner self.',
      name: 'John Smith',
    },
    {
      id: 3,
      text: 'The Spiritual Science Institute\'s approach to holistic wellness is exceptional. I have experienced profound changes in my life.',
      name: 'Emily Chen',
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>The services provided by the Spiritual Science Institute have truly transformed my life. I have found inner peace and balance like never before.</p>
      </div>
      <div className="testimonials-container">
        {testimonials.map(({ id, text, name }) => (
          <TestimomialRow key={id} text={text} name={name} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
