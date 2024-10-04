import React from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
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
      <h2 className="iching-cards-info-header">What are I Ching Oracle Cards</h2>
      <ReactPlayer url={process.env.PUBLIC_URL + '/I Ching 1 mins video.MP4'} controls={true} />
      <p>
        Many people have experienced the challenge of finding a traditional Feng Shui master 
        for Feng Shui consultations, requiring appointments, and often coming at a high cost...
      </p>
      <p>
        Everyone possesses unique energy, and when we gather in shared environments, 
        we influence one another, generating new energy. This phenomenon is known as Feng 
        Shui energy, which directly impacts our emotions, physical well-being, career success, 
        and overall fortune.
      </p>
      <p>
        Now, we introduce a unique method that utilizes the Fengshui Oracle and energy lamps, 
        allowing you to harness the power of Feng Shui energy, promote auspiciousness, and 
        achieve balance in various aspects of your life. The best part is, you can do it 
        yourself without relying on others, and it is both effective and affordable.
      </p>
      <p>
        With our Fengshui Oracle and energy lamps, you can now easily enhance the Feng Shui 
        energy of your living or working space, leading to an improved quality of life.
      </p>
      <h2 className="iching-cards-info-header">How to use I Ching Oracle Cards</h2>
      <YouTube videoId="F8LjnvWI0vI" options={options} onReady={_onReady}/>
      <YouTube videoId="AmU1eq20SgY" options={options} onReady={_onReady}/>
    </div>
  );
};

export default IchingOracleCardsInfo;