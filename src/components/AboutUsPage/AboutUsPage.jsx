import React from 'react';
import textsEng from '../../texts/strings_eng';
import './AboutUsPage.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <section className="about-us-header">
        <h2>{textsEng['aboutUsPage.preTitle']}</h2>
        <h1>{textsEng['aboutUsPage.title']}</h1>
        <p>{textsEng['aboutUsPage.subtitle']}</p>
      </section>

      <section className="grid-layout">
        <div className="grid-item image-column">
          <img
            src={process.env.PUBLIC_URL + '/pallas_profile_pic_crop.jpeg'}
            alt="Founder image"
            className="person-image"
          />
        </div>
        <div className="grid-item text-column">
          <h2>{textsEng['aboutUsPage.ourMission.title']}</h2>
          <p>{textsEng['aboutUsPage.ourMission.content.first.paragraph']}</p>
          <p>{textsEng['aboutUsPage.ourMission.content.second.paragraph']}</p>
        </div>

        <div className="grid-item text-column">
          <h2>{textsEng['aboutUsPage.aboutPallas.title']}</h2>
          <p>{textsEng['aboutUsPage.aboutPallas.content.first.paragraph']}</p>
          <ul>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item1']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item2']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item3']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item4']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item5']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item6']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item7']}</li>
            <li>{textsEng['aboutUsPage.aboutPallas.content.list.item8']}</li>
          </ul>
        </div>
        <div className="grid-item image-column">
        <img src={process.env.PUBLIC_URL + '/about-us-collage.png'} alt="Pallas' journey" className="large-image" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
