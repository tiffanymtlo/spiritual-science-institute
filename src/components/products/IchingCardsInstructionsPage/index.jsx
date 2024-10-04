import React from 'react';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import textsEng from '../../../texts/strings_eng';
import './IchingCardsInstructionsPage.css';

const IchingCardsInstructionsAboutSection = () => {
  return (
    <div className="iching-cards-instructions-page-section">
      <div className="iching-cards-instructions-page-text-column">
        <h3>{textsEng['products.iChingCardsInstructions.about.title'].toUpperCase()}</h3>
        <p>{textsEng['products.iChingCardsInstructions.about.content.p1']}</p>
        <p>{textsEng['products.iChingCardsInstructions.about.content.p2']}</p>
        <p>{textsEng['products.iChingCardsInstructions.about.content.p3']}</p>
        <p>{textsEng['products.iChingCardsInstructions.about.content.p4']}</p>
      </div>
      <div className="iching-cards-instructions-page-video-column">
        <ReactPlayer
          url={process.env.PUBLIC_URL + '/I Ching 1 mins video.MP4'}
          controls={true}
        />
      </div>
    </div>
  );
};

const IchingCardsInstructionsHowToSection = () => {
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
    <div className='iching-cards-instructions-page-section'>
      <div className="iching-cards-instructions-page-video-column">
        <YouTube videoId="F8LjnvWI0vI" options={options} onReady={_onReady}/>
        <YouTube videoId="AmU1eq20SgY" options={options} onReady={_onReady}/>
      </div>
      <div className="iching-cards-instructions-page-text-column">
        <h3>{textsEng['products.iChingCardsInstructions.instructions.title'].toUpperCase()}</h3>
        <p>{textsEng['products.iChingCardsInstructions.instructions.content.p1']}</p>
        <p>{textsEng['products.iChingCardsInstructions.instructions.content.p2']}</p>
        <h3>{textsEng['products.iChingCardsInstructions.steps.title'].toUpperCase()}</h3>
        <ol>
          <li>{textsEng['products.iChingCardsInstructions.steps.1']}</li>
          <li>{textsEng['products.iChingCardsInstructions.steps.2']}</li>
          <li>{textsEng['products.iChingCardsInstructions.steps.3']}</li>
          <li>{textsEng['products.iChingCardsInstructions.steps.4']}</li>
          <li>{textsEng['products.iChingCardsInstructions.steps.5']}</li>
        </ol>
        <p>{textsEng['products.iChingCardsInstructions.steps.p1']}</p>
      </div>
    </div>
  );
};

const IchingCardsInstructionsCardSpreadSection = () => {
  return (
    <div className="iching-card-spread-container">
      <h3>{textsEng['products.iChingCardsInstructions.cardSpread.title'].toUpperCase()}</h3>
      <div className="iching-card-spread-grid-container">
        <div className="iching-card-spread-grid">
          <h4>{textsEng['products.iChingCardsInstructions.cardSpread.oneCardDivination.title']}</h4>
          <ul><li>{textsEng['products.iChingCardsInstructions.cardSpread.oneCardDivination.content']}</li></ul>
          <span className="iching-cards-instructions-page-card">
            <img src={process.env.PUBLIC_URL + '/Iching card 1.svg'} alt="Card 1" />
          </span>
        </div>
        <div className="iching-card-spread-grid">
          <h4>{textsEng['products.iChingCardsInstructions.cardSpread.twoCardDivination.title']}</h4>
          <ul><li>{textsEng['products.iChingCardsInstructions.cardSpread.twoCardDivination.content']}</li></ul>
          <p>{textsEng['products.iChingCardsInstructions.cardSpread.twoCardDivination.content.p1']}</p>
          <p>{textsEng['products.iChingCardsInstructions.cardSpread.twoCardDivination.content.p2']}</p>
          <div className="iching-card-spread-cards-container">
            <span className="iching-cards-instructions-page-card">
              <img src={process.env.PUBLIC_URL + '/Iching card A.svg'} alt="Card A" />
            </span>
            <span className="iching-cards-instructions-page-card">
              <img src={process.env.PUBLIC_URL + '/Iching card B.svg'} alt="Card B" />
            </span>
          </div>
        </div>
        <div className="iching-card-spread-grid">
          <h4>{textsEng['products.iChingCardsInstructions.cardSpread.threeCardDivination.title']}</h4>
          <ul>
            <li>{textsEng['products.iChingCardsInstructions.cardSpread.threeCardDivination.content.li1']}</li>
            <li>{textsEng['products.iChingCardsInstructions.cardSpread.threeCardDivination.content.li2']}</li>
          </ul>
          <p>{textsEng['products.iChingCardsInstructions.cardSpread.threeCardDivination.content.p1']}</p>
          <p>{textsEng['products.iChingCardsInstructions.cardSpread.threeCardDivination.content.p2']}</p>
          <p>{textsEng['products.iChingCardsInstructions.cardSpread.threeCardDivination.content.p3']}</p>
          <div className="iching-card-spread-cards-container grid-flex">
            <span className="iching-cards-instructions-page-card vertical-writing">
              <img src={process.env.PUBLIC_URL + '/Iching card Past.svg'} alt="Card Past" />
            </span>
            <span className="iching-cards-instructions-page-card vertical-writing">
              <img src={process.env.PUBLIC_URL + '/Iching card Present.svg'} alt="Card Present" />
            </span>
            <span className="iching-cards-instructions-page-card vertical-writing">
              <img src={process.env.PUBLIC_URL + '/Iching card Future.svg'} alt="Card Future" />
            </span>
            <span className="iching-cards-instructions-page-card vertical-writing">
              <img src={process.env.PUBLIC_URL + '/Iching card Problem.svg'} alt="Card Problem" />
            </span>
            <span className="iching-cards-instructions-page-card vertical-writing">
              <img src={process.env.PUBLIC_URL + '/Iching card Why.svg'} alt="Card Why" />
            </span>
            <span className="iching-cards-instructions-page-card vertical-writing">
              <img src={process.env.PUBLIC_URL + '/Iching card Result.svg'} alt="Card Result" />
            </span>
          </div>
        </div>
      </div>
      <div className="iching-card-spread-section-container">
        <h4>{textsEng['products.iChingCardsInstructions.cardSpread.fengShuiDivination.title']}</h4>
        <ul>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.fengShuiDivination.content.li1']}</li>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.fengShuiDivination.content.li2']}</li>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.fengShuiDivination.content.li3']}</li>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.fengShuiDivination.content.li4']}</li>
        </ul>
        <div className="iching-card-spread-grid-container">
          <div className="iching-card-spread-grid">
            <div className="iching-card-spread-cards-container grid-flex">
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card SE.svg'} alt="Card SE" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card S.svg'} alt="Card S" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card SW.svg'} alt="Card SW" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card E.svg'} alt="Card E" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card Middle.svg'} alt="Card Middle" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card W.svg'} alt="Card W" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card NE.svg'} alt="Card NE" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card N.svg'} alt="Card N" />
              </span>
              <span className="iching-cards-instructions-page-card vertical-writing">
                <img src={process.env.PUBLIC_URL + '/Iching card NW.svg'} alt="Card NW" />
              </span>
            </div>
          </div>
          <div className="iching-card-spread-grid">
            <img src={process.env.PUBLIC_URL + '/home_fengshui.png'} alt="Home Feng Shui with Energy Lamps" />
          </div>
          <div className="iching-card-spread-grid">
            <img src={process.env.PUBLIC_URL + '/Iching Cards Inside.jpeg'} alt="Iching Cards Example" />
          </div>
        </div>
      </div>
      <div className="iching-card-spread-section-container">
        <h4>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.title']}</h4>
        <ul>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li1']}</li>
          <li>
            {textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2']}
            <ul>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.life']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.parents']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.psychic']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.residence']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.career']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.friends']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.travel']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.health']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.wealth']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.children']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.spouse']}</li>
              <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li2.siblings']}</li>
            </ul>
          </li>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li3']}</li>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li4']}</li>
          <li>{textsEng['products.iChingCardsInstructions.cardSpread.astrologyDivination.content.li5']}</li>
        </ul>
        <div className="iching-card-spread-grid-container">
          <div className="iching-card-spread-grid">
            <img src={process.env.PUBLIC_URL + '/Iching astrology img1.png'} alt="Astrology Divination Image1" />
          </div>
          <div className="iching-card-spread-grid">
            <img src={process.env.PUBLIC_URL + '/Iching astrology img2.png'} alt="Astrology Divination Image2" />
          </div>
          <div className="iching-card-spread-grid">
            <img src={process.env.PUBLIC_URL + '/Iching astrology img3.png'} alt="Astrology Divination Image3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const IchingCardsInstructionsPage = () => {
  return (
    <div className="iching-cards-instructions-page">
      <div className="iching-cards-instructions-page-header">
        <h1>{textsEng['products.iChingCardsInstructions.title']}</h1>
      </div>
      <IchingCardsInstructionsAboutSection />
      <IchingCardsInstructionsHowToSection />
      <IchingCardsInstructionsCardSpreadSection />
      <div className='iching-cards-instructions-page-section'>
        <h3>
          {textsEng['products.iChingCardsInstructions.nextStepsGuide.text']}
          <a href="">{textsEng['products.iChingCardsInstructions.nextStepsGuide.text.link']}</a>
        </h3>
      </div>
    </div>
  );
};

export default IchingCardsInstructionsPage;
