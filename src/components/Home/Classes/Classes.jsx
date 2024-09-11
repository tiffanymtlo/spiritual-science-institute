import React from 'react';
import Button from '../../Button/Button';
import './Classes.css';

const ClassCard = ({ name, description, price, imagePath, dates }) => {
  return (
    <div className="class-card">
      <img src={process.env.PUBLIC_URL + '/' + imagePath} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <hr className='class-card-divider' />
      <p>{price}</p>
      {dates && <hr className='class-card-divider' />}
      {dates && <p>{dates}</p>}
      <Button className="class-button" size="small">{dates ? 'Book Now' : 'View Course'}</Button>
    </div>
  );
};

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: 'Spiritual Communication Class (Beginner)',
      description: 'Learn how to communicate with your pets or animals',
      price: '¥ 1,980',
      imagePath: 'spiritual_communication_class1.webp',
    },
    {
      id: 2,
      name: 'Iching Cards Fortune-telling Class',
      description: 'Learn how to analyze your lives and environments with Iching Cards',
      price: '¥ 6,280',
      imagePath: 'Iching_card_class1.png',
      dates: 'Nov 1-11, 2024',
    },
    {
      id: 3,
      name: 'Feng Shui Flying Stars Course',
      description: 'Learn how to analyze the Feng Shui in your environments to enhance you',
      price: '¥ 12,000',
      imagePath: 'feng_shui_class.png',
    },
    {
      id: 4,
      name: 'BaZi Astrology Course (Basic)',
      description: 'Study fate and destiny through the analysis of a person\'s birth data',
      price: '¥ 8,400',
      imagePath: 'ba_zi_class1.png',
    },
    {
      id: 5,
      name: 'BaZi Astrology Course (Advanced)',
      description: 'With the basics learned, this course focuses on practicing and how to...',
      price: '¥ 8,400',
      imagePath: 'ba_zi_class2.webp',
    },
  ];

  return (
    <section className="classes">
      <div className="classes-header">
        <h2>Classes</h2>
        <p>Wonder how to do it? Come and learn it yourselves</p>
      </div>
      <div className="classes-container">
        <div className='classes-grid-container'>
          {classes.map(classData => (
            <ClassCard
              key={classData.id}
              name={classData.name}
              description={classData.description}
              price={classData.price}
              imagePath={classData.imagePath}
              dates={classData.dates}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;
