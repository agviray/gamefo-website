import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send request to an api?
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="SearchInput">Search</label>
          <input
            onChange={onInputChange}
            id="SearchInput"
            type="text"
            placeholder="Search something"
            value={searchTerm}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
