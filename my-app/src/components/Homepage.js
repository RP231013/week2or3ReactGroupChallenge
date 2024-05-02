import React from 'react';
import './Homepage.css';
import SearchBar from './PropertySearch';
import PropertyCard from './PropertyCard';
import DropdownMenu from './Dropdown';
import properties from '../data.json';

function Homepage() {
  const dropdownItems1 = ["Option 1", "Option 2", "Option 3"];
  const dropdownItems2 = ["Choice A", "Choice B", "Choice C"];

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
            <DropdownMenu title="Dropdown 1" items={dropdownItems1} />
          </div>
          <div className="col-md-4">
            {/* Second dropdown */}
            <DropdownMenu title="Dropdown 2" items={dropdownItems2} />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="my-4">Featured Properties</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Homepage;
