import React, { useState } from 'react';

import Input from '../Input/Input';
import './SearchInput.css';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <Input icon={'search'} name='search' placeholder='filter by title...' />
  );
};

export default SearchInput;
