import React from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import textsEng from '../../../../../texts/strings_eng';
import './IchingOracleCards.css';

const IchingOracleCardsInfo = () => {
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
    <div className="iching-cards-info-section">
      <h2 className="iching-cards-info-header">{textsEng['products.category.iChingCards.header']}</h2>
      <ReactPlayer url={process.env.PUBLIC_URL + '/I Ching 1 mins video.MP4'} controls={true} />
      <p>{textsEng['products.iChingCardsInstructions.about.content.p1']}</p>
      <p>{textsEng['products.iChingCardsInstructions.about.content.p2']}</p>
      <p>{textsEng['products.iChingCardsInstructions.about.content.p3']}</p>
      <p>{textsEng['products.iChingCardsInstructions.about.content.p4']}</p>
      <h2 className="iching-cards-info-header">How to use I Ching Oracle Cards</h2>
      <YouTube videoId="F8LjnvWI0vI" options={options} onReady={_onReady}/>
      <YouTube videoId="AmU1eq20SgY" options={options} onReady={_onReady}/>
    </div>
  );
};

export default IchingOracleCardsInfo;