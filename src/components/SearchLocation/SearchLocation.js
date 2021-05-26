import React, { useState } from 'react';

import Input from '../Input/Input';
import './SearchLocation.css';

const SearchLocation = () => {
  const [location, setLocation] = useState('');
  return (
    <Input
      className='location-input'
      icon={'location'}
      name='location'
      placeholder='filter by location...'
    />
  );
};

export default SearchLocation;