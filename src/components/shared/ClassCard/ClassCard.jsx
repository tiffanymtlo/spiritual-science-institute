import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import textsEng from '../../../texts/strings_eng';
import './ClassCard.css';

const ClassCard = ({ classData, isDisplayOnHover = true }) => {
  const {
    id,
    name,
    description,
    price,
    imgPath,
    dates,
    duration,
  } = classData;
  const navigate = useNavigate();

  const onClassCardClick = () => {
    navigate(`/class/${id}`);
  };

  return (
    <div className="class-card" onClick={onClassCardClick}>
      <img src={process.env.PUBLIC_URL + imgPath[0]} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <hr className='class-card-divider' />
      <div className='class-card-pricing'>
        <p>{price}</p>
        <p>{duration}</p>
      </div>
      {dates && <hr className='class-card-divider' />}
      {dates && <p>{dates}</p>}
      <Button
        className={`class-card-button ${isDisplayOnHover ? 'display-on-hover' : ''}`}
        size="small"
      >
        {dates ? textsEng['classCard.bookNow.button'] : textsEng['classCard.viewCourse.button']}
      </Button>
    </div>
  );
};

export default ClassCard;
