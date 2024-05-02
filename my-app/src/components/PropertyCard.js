import React from 'react';


function PropertyCard({ property }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={property.imageUrl} className="card-img-top" alt={`View of ${property.address}`} />
      <div className="card-body">
        <h5 className="card-title">{property.propertyName}</h5>
        <p className="card-text">{property.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Location: {property.location}</li>
          <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
          <li className="list-group-item">Bathrooms: {property.bathrooms}</li>
          <li className="list-group-item">Garages: {property.garages}</li>
        </ul>
        <a href="#" className="btn btn-primary mt-3">View Details</a>
      </div>
    </div>
  );
}

export default PropertyCard;
