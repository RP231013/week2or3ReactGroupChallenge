import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard2({ property }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img 
        src={property.imageUrl} 
        className="card-img-top" 
        alt={`View of ${property.address}`} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title">{property.propertyName}</h5>
        <p className="card-text">{property.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Location: {property.location}</li>
          <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
          <li className="list-group-item">Bathrooms: {property.bathrooms}</li>
          <li className="list-group-item">Garages: {property.garages}</li>
          <li className="list-group-item">Price: R{property.price.toLocaleString()}</li>
        </ul>
        <Link to={`/property/${property.id}`} className="btn btn-primary mt-3">
  View Details
</Link>

      </div>
    </div>
  );
}

export default PropertyCard2;
