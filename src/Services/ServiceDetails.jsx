import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/services/${id}`)
      .then(response => {
        setService(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the service details!', error);
      });
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="service-details">
      <div className="image-container">
        <img src={service.Destination.ImageUrl} alt={service.Destination.DestinationName} />
        <div className="watermark">{service.Destination.DestinationName}</div>
      </div>
      <h2>Service Details</h2>
      <p><strong>The maximum number of people the service can accommodate is {service.NumberOfPeople}.<br />
      The total number of days included in the service is {service.NumberOfDays}.<br />
      Personal guide facility is {service.IsRequiredPersonalGuide ? 'included' : 'not included'} in this service.<br />
      The number of rooms provided or required as part of this service is {service.NoOfRoom}.<br />
      The type or category of the tour is {service.TourType}.<br /></strong></p>
      <h2>Destination Details</h2>
      <p><strong>The name of the destination where the service is offered is {service.Destination.DestinationName}.<br />
      The daily cost of accommodation at the destination is {service.Destination.HotelCosrPerDay}.<br />
      The base cost of the service excluding any additional fees or expenses is {service.Destination.BaseCost}.</strong></p>
    </div>
  );
};

export default ServiceDetails;
