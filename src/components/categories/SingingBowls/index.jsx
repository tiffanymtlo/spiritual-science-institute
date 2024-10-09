import React from 'react';
import ReactPlayer from 'react-player';
import textsEng from '../../../texts/strings_eng';
import './SingingBowls.css';

const SingingBowls = () => {
  return (
    <div className="singing-bowls-section">
      <h2 className="singing-bowls-header">
        {textsEng['products.category.singingBowls.header']}
      </h2>
      <ReactPlayer url={process.env.PUBLIC_URL + '/singing_bowls_service.mp4'} controls={true} />
    </div>
  );
};

export default SingingBowls;