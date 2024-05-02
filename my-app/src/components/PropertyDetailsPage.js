import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetailsPage() {
  const { id } = useParams();

  const property = properties.find((property) => property.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h2>{property.propertyName}</h2>
      <p>{property.description}</p>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Garages: {property.garages}</p>
      <img src={property.imageUrl} alt={property.propertyName} />
    </div>
  );
}

export default PropertyDetailsPage;
