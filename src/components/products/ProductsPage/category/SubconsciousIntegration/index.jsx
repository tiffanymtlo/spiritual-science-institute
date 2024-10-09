import React from 'react';
import YouTube from 'react-youtube';
import textsEng from '../../../../../texts/strings_eng';
import './SubconsciousIntegration.css';

const SubconsciousIntegration = () => {
  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="subconscious-integration-section">
      <div className="subconscious-integration-container">
        <div className="subconscious-integration-sub-section">
          <h2 className="subconscious-integration-header">
            {textsEng['products.category.subconsciousIntegration.about.header']}
          </h2>
          <p>{textsEng['products.category.subconsciousIntegration.about.content.p1']}</p>
          <p>{textsEng['products.category.subconsciousIntegration.about.content.p2']}</p>
          <YouTube videoId="L2T7w6wnBBA" options={options} onReady={_onReady}/>
        </div>
        <div className="subconscious-integration-sub-section">
          <h2 className="subconscious-integration-header">
            {textsEng['products.category.subconsciousIntegration.demo.header']}
          </h2>
          <p>{textsEng['products.category.subconsciousIntegration.demo.content']}</p>
          <YouTube videoId="hCDrt2tiQBA" options={options} onReady={_onReady}/>
        </div>
      </div>
    </div>
  );
};

export default SubconsciousIntegration;