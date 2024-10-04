import React from 'react';
import ClassCard from '../../shared/ClassCard/ClassCard';
import { classesData } from '../../constants';
import './Classes.css';

const Classes = () => {
  return (
    <section className="classes">
      <div className="classes-header">
        <h2>Classes</h2>
        <p>Wonder how to do it? Come and learn it yourselves</p>
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
