import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../constants';
import textsEng from '../../texts/strings_eng';
import DetailsView from '../shared/DetailsViewPage';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(
    (service) => service.id === parseInt(serviceId));

  return (
    <DetailsView data={service} detailsViewBtnText={textsEng['servicePage.serviceDetails.bookNow.button']} />
  );
};

export default ServiceDetails;
