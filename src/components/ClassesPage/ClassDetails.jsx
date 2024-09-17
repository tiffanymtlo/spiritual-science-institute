import React from 'react';
import { useParams } from 'react-router-dom';
import { classesData } from '../constants';
import DetailsView from '../shared/DetailsViewPage';

const ClassDetails = () => {
  const { classId } = useParams();
  const classItem = classesData.find(
    (classItem) => classItem.id === parseInt(classId));

  return (
    <DetailsView data={classItem} detailsViewBtnText='Book Now' />
  );
};

export default ClassDetails;
