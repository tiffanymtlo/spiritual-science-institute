import React from 'react';
import { useParams } from 'react-router-dom';
import { classesData } from '../../constants';
import textsEng from '../../../texts/strings_eng';
import DetailsView from '../../shared/DetailsViewPage';
import SpiritualCommunication from '../../categories/SpiritualCommunication';

const ClassDetails = () => {
  const { classId } = useParams();
  const classItem = classesData.find(
    (classItem) => classItem.id === parseInt(classId));

  return (
    <div className="class-details-view-container">
      <DetailsView
        data={classItem}
        detailsViewBtnText={textsEng['classesPage.classDetails.bookNow.button']}
      />
      {classItem.category && classItem.category === 'Spiritual Communication' &&
        <SpiritualCommunication />}
    </div>
  );
};

export default ClassDetails;
