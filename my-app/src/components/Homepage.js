import React, { useState, useEffect } from 'react';
import './Homepage.css';
import SearchBar from './PropertySearch';
import PropertyCard2 from './PropertyCard2';
import DropdownMenu from './Dropdown';
import properties from '../data.json';

function Homepage() {
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const dropdownItems1 = ["Studio", "One Bedroom", "Two Bedrooms", "Three Bedrooms", "Four Bedrooms", "Five Bedrooms +"];
  const dropdownItems2 = ["Half Bath", "One Bathroom", "Two Bathrooms", "Three Bathrooms", "Four Bathrooms", "Five Bathrooms +"];

  useEffect(() => {
    const filtered = properties.filter(property => {
      if (selectedBedrooms && selectedBedrooms !== "Five Bedrooms +") {
        if (property.bedrooms !== parseInt(selectedBedrooms)) {
          return false;
        }
      }
      if (selectedBathrooms && selectedBathrooms !== "Five Bathrooms +") {
        if (property.bathrooms !== parseInt(selectedBathrooms)) {
          return false;
        }
      }
      return true;
    });
    setFilteredProperties(filtered);
  }, [selectedBedrooms, selectedBathrooms]);

  return (
    <div className='mainContainer'>
      <h2>Home Page</h2>
      <p>Welcome to Property23! Explore our property listings.</p>

      {/* SearchBar component */}
      <SearchBar/>

      {/* Dropdown menus */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            {/* First dropdown */}
            <DropdownMenu
              title="Bedrooms"
              items={dropdownItems1}
              onSelect={(value) => setSelectedBedrooms(value)}
            />
          </div>
          <div className="col-md-4">
            {/* Second dropdown */}
            <DropdownMenu
              title="Bathrooms"
              items={dropdownItems2}
              onSelect={(value) => setSelectedBathrooms(value)}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="my-4">Featured Properties</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {/* Render filtered properties */}
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p>No properties match the selected criteria.</p>
          )}
        </div>
      </div>

    </div>
  );
}

export default Homepage;
