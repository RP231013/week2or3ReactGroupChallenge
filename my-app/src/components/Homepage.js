import React from 'react';
import './Homepage.css';
import SearchBar from './PropertySearch';

import PropertyCard from './PropertyCard';
import properties from '../data.json';


function Homepage() {
  return (
    <div className='mainContainer'>
      <h2>Home Page</h2>
      <p>Welcome to Property23! Explore our property listings.</p>

        <SearchBar/>


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
