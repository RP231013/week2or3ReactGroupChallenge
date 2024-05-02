import React from "react";

function PropertyDetailsPage({ location }) {
  // Extract property data from location state
  const {
    id,
    propertyName,
    location: propertyLocation,
    description,
    bedrooms,
    bathrooms,
    garages,
  } = location.state.property;

  return (
    <div>
      <h2>{propertyName}</h2>
      <p>{description}</p>
      <ul>
        <li>Location: {propertyLocation}</li>
        <li>Bedrooms: {bedrooms}</li>
        <li>Bathrooms: {bathrooms}</li>
        <li>Garages: {garages}</li>
      </ul>
    </div>
  );
}

export default PropertyDetailsPage;
