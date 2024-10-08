import React from 'react';
import { useParams } from 'react-router-dom';
import { classesData } from '../constants';
import textsEng from '../../texts/strings_eng';
import DetailsView from '../shared/DetailsViewPage';

const ClassDetails = () => {
  const { classId } = useParams();
  const classItem = classesData.find(
    (classItem) => classItem.id === parseInt(classId));

  return (
    <DetailsView data={classItem} detailsViewBtnText={textsEng['classesPage.classDetails.bookNow.button']} />
  );
};

export default ClassDetails;
