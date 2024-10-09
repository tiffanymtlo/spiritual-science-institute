import React, { useState } from 'react';
import QuickViewModal from '../../shared/QuickViewModal/QuickViewModal';
import textsEng from '../../../texts/strings_eng';
import { iChingCardsData } from '../../constants';
import './IchingCardsExplanationPage.css';

const IchingCardQuickView = ({ card }) => {
  const {
    imgPath,
    title,
    subTitle,
    overview,
    relationships,
    career,
    wealth,
    advice,
  } = card;

  return (
    <div className="iching-cards-explanations-page-quick-view">
      <div className="iching-cards-explanations-page-quick-view-image-container">
        <img
          src={process.env.PUBLIC_URL + imgPath}
          alt={title}
        />
      </div>
      <div className="iching-cards-explanations-page-quick-view-content">
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
        <p><b>{textsEng['products.iChingCardsExplanations.overview']}:</b> {overview}</p>
        <p><b>{textsEng['products.iChingCardsExplanations.relationships']}:</b> {relationships}</p>
        <p><b>{textsEng['products.iChingCardsExplanations.career']}:</b> {career}</p>
        <p><b>{textsEng['products.iChingCardsExplanations.wealth']}:</b> {wealth}</p>
        <p><b>{textsEng['products.iChingCardsExplanations.advice']}:</b> {advice}</p>
      </div>
    </div>
  );
};

const IchingCard = ({ card }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const { id, imgPath, title } = card;

  const toggleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  const handleCardClick = () => {
    toggleQuickView();
  };

  return (
    <span
      key={id}
      className="iching-cards-explanations-page-card"
      onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => setIsImageHovered(false)}
      onClick={handleCardClick}
    >
      <img
        src={process.env.PUBLIC_URL + imgPath}
        alt={title}
        className={`iching-cards-explanations-page-card-image ${isImageHovered ? 'zoom-in' : ''}`}
      />
      {showQuickView && (
        <QuickViewModal
          content={<IchingCardQuickView card={card} />}
          onClose={toggleQuickView}
        />
      )}
    </span>
  );
};

const IchingCardsExplanationPage = () => {
  const [inputText, setInputText] = useState('');

  const handleSpecialCharInput = (e) => {
    if (e.key === '-' || e.key === '+' || e.key === '.') {
      e.preventDefault();
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const inputId = inputText.split('');
  const searchResult = iChingCardsData.filter(card => {
    const cardId = card.id.toString().split('');
    return inputId.every((digit, index) => digit === cardId[index]);
  });

  return (
    <div className="iching-cards-explanations-page">
      <div className="iching-cards-explanations-page-header">
        <h1>{textsEng['products.iChingCardsExplanations.title']}</h1>
        <h3>{textsEng['products.iChingCardsExplanations.subTitle']}</h3>
      </div>
      <div className="iching-cards-explanations-page-search-bar-container">
        <input
          className="iching-cards-explanations-page-search-bar"
          placeholder={textsEng['products.iChingCardsExplanations.search.placeholder']}
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleSpecialCharInput}
          type='number'
          min={1}
          max={64}
        />
      </div>
      <div className="iching-cards-explanations-content-container">
        <div className="iching-cards-explanations-cards-container">
          {inputText ?
            searchResult.map(card => <IchingCard key={card.id} card={card} />) :
            iChingCardsData.map(card => <IchingCard key={card.id} card={card} />)
          }
          {inputText && (inputText < 1 || inputText > 64) &&
            <p className="iching-cards-explanations-page-error-message">
              {textsEng['products.iChingCardsExplanations.search.errorMessage']}
            </p>}
        </div>
      </div>
    </div>
  );
};

export default IchingCardsExplanationPage;
