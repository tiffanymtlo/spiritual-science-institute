import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../constants';
import DetailsView from '../shared/DetailsViewPage';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(
    (service) => service.id === parseInt(serviceId));

  return (
    <DetailsView data={service} detailsViewBtnText="Book Now" />
  );
};

export default ServiceDetails;
