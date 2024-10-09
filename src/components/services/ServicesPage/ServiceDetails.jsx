import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../../constants';
import textsEng from '../../../texts/strings_eng';
import DetailsView from '../../shared/DetailsViewPage';
import SubconsciousIntegration from '../../categories/SubconsciousIntegration';
import SingingBowls from '../../categories/SingingBowls';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(
    (service) => service.id === parseInt(serviceId));

  return (
    <div className="service-details-view-container">
      <DetailsView
        data={service}
        detailsViewBtnText={textsEng['servicePage.serviceDetails.bookNow.button']}
      />
      {service.category && service.category === 'Subconscious Integration' &&
        <SubconsciousIntegration />}
      {service.category && service.category === 'Singing Bowls' &&
        <SingingBowls />}
    </div>
  );
};

export default ServiceDetails;
