import React, { useState } from 'react';

const PropertySearch = ({ properties }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = properties.filter(item =>
      item.propertyName.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by property name or location"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredProperties.map(property => (
          <li key={property.id}>
            <h2>{property.propertyName}</h2>
            <p>{property.location}</p>
            <p>{property.description}</p>
            <p>Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}, Garages: {property.garages}</p>
            <img src={property.imageUrl} alt={property.propertyName} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertySearch;
