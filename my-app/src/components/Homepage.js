import React, { useState } from 'react';
import './Homepage.css';
import SearchBar from './PropertySearch';
import PropertyCard2 from './PropertyCard2';
import DropdownMenu from './Dropdown';
import properties from '../data.json';
import HeroImage from '../HeroImage';

function Homepage() {
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [bathroomFilter, setBathroomFilter] = useState("");
  const [garageFilter, setGarageFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const dropdownItems1 = ["1 Bed", "2 Bed", "2 Bed +"];
  const dropdownItems2 = ["1 Bath", "2 Bath", "2 Bath +"];
  const dropdownItems3 = ["1 Garage", "2 Garage", "2 Garage +"];
  const dropdownItems4 = ["R500,000 - R600,000", "R700,000 - R800,000", "R900,000 - R1,000,000", "R1,100,000 - R1,200,000", "Above R1,300,000"];

  const handleBedroomFilter = (selection) => {
    setBedroomFilter(selection);
  };

  const handleBathroomFilter = (selection) => {
    setBathroomFilter(selection);
  };

  const handleGarageFilter = (selection) => {
    setGarageFilter(selection);
  };

  const handlePriceFilter = (selection) => {
    setPriceFilter(selection);
  };

  const filteredProperties = properties.filter(property => {
    const bedroomCondition = bedroomFilter ? filterBedrooms(property.bedrooms, bedroomFilter) : true;
    const bathroomCondition = bathroomFilter ? filterBathrooms(property.bathrooms, bathroomFilter) : true;
    const garageCondition = garageFilter ? filterGarages(property.garages, garageFilter) : true;
    const priceCondition = priceFilter ? filterPrices(property.price, priceFilter) : true;
    return bedroomCondition && bathroomCondition && garageCondition && priceCondition;
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

  function filterGarages(garages, filter) {
    switch(filter) {
      case "1 Garage":
        return garages === 1;
      case "2 Garage":
        return garages === 2;
      case "2 Garage +":
        return garages >= 2;
      default:
        return true;
    }
  }

  function filterPrices(price, filter) {
    switch(filter) {
      case "R500,000 - R600,000":
        return price >= 500000 && price >= 600000;
      case "R700,000 - R800,000":
        return price >= 700000 && price <= 800000;
      case "R900,000 - R1,000,000":
        return price >= 900000 && price <= 1000000;
      case "R1,100,000 - R1,200,000":
        return price >= 1100000 && price <= 1200000;
      case "Above R1,300,000":
        return price >= 1300000;
      default:
        return true;
    }
  }

  return (
    <div className='mainContainer'>
      
      <h3></h3>
        <HeroImage />
        

      {/* SearchBar component */}
      <SearchBar/>

      {/* Dropdown menus */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            {/* First dropdown */}
            <DropdownMenu title="Bedrooms" items={dropdownItems1} onSelectItem={handleBedroomFilter} />
          </div>
          <div className="col-md-3">
            {/* Second dropdown */}
            <DropdownMenu title="Bathrooms" items={dropdownItems2} onSelectItem={handleBathroomFilter} />
          </div>
          <div className="col-md-3">
            {/* Third dropdown */}
            <DropdownMenu title="Garages" items={dropdownItems3} onSelectItem={handleGarageFilter} />
          </div>
          <div className="col-md-3">
            {/* Fourth dropdown */}
            <DropdownMenu title="Price" items={dropdownItems4} onSelectItem={handlePriceFilter} />
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
