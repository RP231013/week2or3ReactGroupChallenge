import React, { useState } from 'react';
import './Homepage.css';
import SearchBar from './PropertySearch';
import PropertyCard2 from './PropertyCard2';
import DropdownMenu from './Dropdown';
import properties from '../data.json';

function Homepage() {
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [bathroomFilter, setBathroomFilter] = useState("");

  const dropdownItems1 = ["1 Bed", "2 Bed", "2 Bed +"];
  const dropdownItems2 = ["1 Bath", "2 Bath", "2 Bath +"];

  const handleBedroomFilter = (selection) => {
    setBedroomFilter(selection);
  };

  const handleBathroomFilter = (selection) => {
    setBathroomFilter(selection);
  };

  const filteredProperties = properties.filter(property => {
    const bedroomCondition = bedroomFilter ? filterBedrooms(property.bedrooms, bedroomFilter) : true;
    const bathroomCondition = bathroomFilter ? filterBathrooms(property.bathrooms, bathroomFilter) : true;
    return bedroomCondition && bathroomCondition;
  });

  function filterBedrooms(bedrooms, filter) {
    switch(filter) {
      case "1 Bed":
        return bedrooms === 1;
      case "2 Bed":
        return bedrooms === 2;
      case "2 Bed +":
        return bedrooms >= 2;
      default:
        return true;
    }
  }

  function filterBathrooms(bathrooms, filter) {
    switch(filter) {
      case "1 Bath":
        return bathrooms === 1;
      case "2 Bath":
        return bathrooms === 2;
      case "2 Bath +":
        return bathrooms >= 2;
      default:
        return true;
    }
  }

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
            <DropdownMenu title="Bedrooms" items={dropdownItems1} onSelectItem={handleBedroomFilter} />
          </div>
          <div className="col-md-4">
            {/* Second dropdown */}
            <DropdownMenu title="Bathrooms" items={dropdownItems2} onSelectItem={handleBathroomFilter} />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="my-4">Featured Properties</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {filteredProperties.map(property => (
            <PropertyCard2 key={property.id} property={property} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Homepage;
