import React from 'react';
import ClassCard from '../shared/ClassCard/ClassCard';
import { classesData } from '../constants';
import './ClassesPage.css';

const ClassesPage = () => {
  return (
    <div className="classes-page">
      <div className='classes-page-header'>
        <h1>Our Classes / Courses</h1>
        <p>
          Have you ever wondered how does Fortune-telling work? 
          Come and learn it yourselves! Having an instructor to teach 
          you step-by-step of what you need to know. The best thing about 
          this is that all our classes are unlimited to repeating taking 
          classes you have taken.
        </p>
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
