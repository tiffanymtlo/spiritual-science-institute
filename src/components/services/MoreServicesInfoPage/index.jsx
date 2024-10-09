import React from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
import textsEng from '../../../texts/strings_eng';
import './MoreServicesInfoPage.css';

const MoreServicesInfoPage = () => {
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
    <div className="more-services-info-page">
      <div className="more-services-info-page-header">
        <h1>{textsEng['services.moreServicesInfo.title']}</h1>
        <h3>{textsEng['services.moreServicesInfo.subTitle']}</h3>
      </div>
      <div className="more-services-info-page-content-container">
        <div className="more-services-info-page-content">
          <YouTube videoId="2ncMS49-jZU" options={options} onReady={_onReady}/>
          <hr />
          <div className="more-services-info-page-section">
            <h2>{textsEng['services.moreServicesInfo.content.subconsciousIntegration.header']}</h2>
            <h5>{textsEng['services.moreServicesInfo.content.subconsciousIntegration.intro.caption']}</h5>
            <YouTube videoId="L2T7w6wnBBA" options={options} onReady={_onReady}/>
            <h5>{textsEng['services.moreServicesInfo.content.subconsciousIntegration.caseSharing.caption']}</h5>
            <YouTube videoId="hCDrt2tiQBA" options={options} onReady={_onReady}/>
          </div>
          <div className="more-services-info-page-section">
            <h2>{textsEng['services.moreServicesInfo.content.singingBowls.header']}</h2>
            <h5>{textsEng['services.moreServicesInfo.content.singingBowls.caption']}</h5>
            <ReactPlayer url={process.env.PUBLIC_URL + '/singing_bowls_service.mp4'} controls={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreServicesInfoPage;
