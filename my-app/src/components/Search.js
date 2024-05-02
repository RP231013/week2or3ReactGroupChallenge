import React, { useState } from 'react';

const SearchComponent = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = data.filter(item =>
      item.place.toLowerCase().includes(query.toLowerCase()) ||
      item.price.toString().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by place or price"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            Place: {item.place}, Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
