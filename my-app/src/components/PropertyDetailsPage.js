import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../data.json';

function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  return (
    <div>
      <h1>{property.propertyName}</h1>
      <img src={property.imageUrl} alt={`View of ${property.address}`} style={{ width: '100%' }} />
      <p>{property.description}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Garages: {property.garages}</p>
    </div>
  );
}

export default PropertyDetailsPage;
