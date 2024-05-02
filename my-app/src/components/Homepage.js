import React from 'react';
import SearchComponent from './components/Search';

function Search() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Property23! Explore our property listings.</p>
    </div>
  );
}
const Search = () => {
  const data = [
    { place: 'New York', price: 100 },
    { place: 'Los Angeles', price: 150 },
    { place: 'London', price: 200 },
    { place: 'Paris', price: 250 },
  ];

  return (
    <div>
      <h1>Search</h1>
      <SearchComponent data={data} />
    </div>
  );
};

export default Search;
