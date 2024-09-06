import React from 'react';
import './Classes.css';

const Classes = () => {
  return (
    <section className="classes">
      <h2>Classes</h2>
      <p>Wonder how to do it? Come and learn it yourselves</p>
      <div className="classes-container">
        <div className="class-card">
          <img src={process.env.PUBLIC_URL + '/spiritual_communication_class1.webp'} alt="Spiritual Communication Class"/>
          <h3>Spiritual Communication Class (Beginner)</h3>
          <p>Learn how to communicate with your pets or animals</p>
          <p>¥ 1,980</p>
          <button>View Course</button>
        </div>
        <div className="class-card">
          <img src={process.env.PUBLIC_URL + '/Iching_card_class1.png'} alt="Iching Cards Fortune-telling Class"/>
          <h3>Iching Cards Fortune-telling Class</h3>
          <p>Learn how to analyze your lives and environments with Iching Cards</p>
          <p>¥ 6,280</p>
          <button>Book Now</button>
        </div>
        <div className="class-card">
          <img src={process.env.PUBLIC_URL + '/feng_shui_class.png'} alt="Feng Shui Flying Stars Course"/>
          <h3>Feng Shui Flying Stars Course</h3>
          <p>Learn how to analyze the Feng Shui in your environments to enhance you</p>
          <p>¥ 12,000</p>
          <button>View Course</button>
        </div>
        <div className="class-card">
          <img src={process.env.PUBLIC_URL + '/ba_zi_class1.png'} alt="BaZi Astrology Course Basic"/>
          <h3>BaZi Astrology Course (Basic)</h3>
          <p>Study fate and destiny through the analysis of a person's birth data</p>
          <p>¥ 8,400</p>
          <button>View Course</button>
        </div>
        <div className="class-card">
          <img src={process.env.PUBLIC_URL + '/ba_zi_class2.webp'} alt="BaZi Astrology Course Advanced"/>
          <h3>BaZi Astrology Course (Advanced)</h3>
          <p>With the basics learned, this course focuses on practicing and how to...</p>
          <p>¥ 8,400</p>
          <button>View Course</button>
        </div>
      </div>
    </section>
  );
}

export default Classes;
