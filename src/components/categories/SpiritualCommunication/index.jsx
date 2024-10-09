import React from 'react';
import ReactPlayer from 'react-player';
import textsEng from '../../../texts/strings_eng';
import './SpiritualCommunication.css';

const SpiritualCommunication = () => {
  return (
    <div className="spiritual-communication-section">
      <h2>
        {textsEng['products.category.spiritualCommunication.header']}
      </h2>
      <ReactPlayer url={process.env.PUBLIC_URL + '/inner-child-tvb.mp4'} controls={true} />
    </div>
  );
};

export default SpiritualCommunication;