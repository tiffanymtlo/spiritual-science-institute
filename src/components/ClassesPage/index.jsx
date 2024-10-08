import React from 'react';
import ClassCard from '../shared/ClassCard/ClassCard';
import { classesData } from '../constants';
import './ClassesPage.css';
import textsEng from '../../texts/strings_eng';

const ClassesPage = () => {
  return (
    <div className="classes-page">
      <div className='classes-page-header'>
        <h1>{textsEng['classesPage.header.title']}</h1>
        <p>{textsEng['classesPage.header.subtitle']}</p>
      </div>
      <div className="classes-page-list">
        {classesData.map((classItem, index) => (
          <ClassCard key={index} classData={classItem} isDisplayOnHover={false} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
