import React, { useState } from 'react';

import Input from '../Input/Input';
import './SearchInput.css';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <Input
      className='search-input'
      icon={'search'}
      name='search'
      placeholder='Filter by title...'
    />
  );
};

export default SearchInput;
