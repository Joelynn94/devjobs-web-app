import React from 'react';

import Input from '../Input/Input';
import './SearchLocation.css';

const SearchLocation = ({ searchLocation, onLocationInputChange }) => {
  return (
    <Input
      className='location-input'
      icon={'location'}
      name='location'
      placeholder='Filter by location...'
      value={searchLocation}
      onChange={onLocationInputChange}
    />
  );
};

export default SearchLocation;
