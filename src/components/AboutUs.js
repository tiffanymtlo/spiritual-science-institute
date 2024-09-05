import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-content">
        <img src={process.env.PUBLIC_URL + '/pallas_profile_pic.jpeg'} alt="Founder" />
        <div className="text-content">
          <h2>Embrace Spiritual Wellness</h2>
          <p>Welcome to the Spiritual Science Institute, a sanctuary of spiritual soothing Lorem ipsum dolor sit amet consectetur adipiscing elit est quis accumsan, semper pellentesque mus congue elementum magnis donec lacus interdum. Erat porta ultrices nulla dapibus justo, rhoncus posuere mus viverra ut parturient, quis augue hac cubilia. Magna phasellus accumsan semper platea congue facilisi justo morbi, vitae habitant urna commodo hac luctus aliquam, tortor quisque purus egestas integer mattis nunc. Hendrerit tristique accumsan potenti integer curae nam nulla quisque facilisis sociosqu pharetra sociis diam, vulputate rutrum tempus ornare donec tortor vehicula cursus sed mi vestibulum.</p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
