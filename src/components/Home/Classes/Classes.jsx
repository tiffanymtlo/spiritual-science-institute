import React from 'react';
import ClassCard from '../../shared/ClassCard/ClassCard';
import { classesData } from '../../constants';
import textsEng from '../../../texts/strings_eng';
import './Classes.css';

const Classes = () => {
  return (
    <section className="classes">
      <div className="classes-header">
        <h2>{textsEng['home.classes.title']}</h2>
        <p>{textsEng['home.classes.subtitle']}</p>
      </div>
      <div className="classes-container">
        <div className="classes-grid-container">
          {classesData.map(classItem => (
            <ClassCard key={classItem.id} classData={classItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;
