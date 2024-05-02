import React from 'react';

const SearchBar = () => {
  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
