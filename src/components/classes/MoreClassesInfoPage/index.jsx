import React from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
import textsEng from '../../../texts/strings_eng';
import './MoreClassesInfoPage.css';

const MoreClassesInfoPage = () => {
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
    <div className="more-classes-info-page">
      <div className="more-classes-info-page-header">
        <h1>{textsEng['classes.moreClassesInfo.title']}</h1>
        <h3>{textsEng['classes.moreClassesInfo.subTitle']}</h3>
      </div>
      <div className="more-classes-info-page-content-container">
        <div className="more-classes-info-page-content">
          <YouTube videoId="2ncMS49-jZU" options={options} onReady={_onReady}/>
          <hr />
          <div className="more-classes-info-page-section">
            <h2>{textsEng['classes.moreClassesInfo.content.spiritualCommunication.header']}</h2>
            <h5>{textsEng['classes.moreClassesInfo.content.spiritualCommunication.caseSharing.caption']}</h5>
            <ReactPlayer url={process.env.PUBLIC_URL + '/inner-child-tvb.mp4'} controls={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreClassesInfoPage;
