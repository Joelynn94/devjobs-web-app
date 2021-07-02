import React, { useState } from 'react';

import Input from '../Input/Input';
import './SearchInput.css';

const SearchInput = ({ searchTerm, onSearchInputChange }) => {
  console.log();
  return (
    <Input
      className='search-input'
      icon={'search'}
      name='search'
      placeholder='Filter by title...'
      value={searchTerm}
      onChange={onSearchInputChange}
    />
  );
};

export default SearchInput;
