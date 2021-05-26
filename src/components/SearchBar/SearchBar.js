import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchInput from '../SearchInput/SearchInput';
import SearchLocation from '../SearchLocation/SearchLocation';
import Button from '../Button/Button';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className='search-bar'>
      <SearchInput />
      <SearchLocation style={{ borderLeft: '1px solid grey' }} />
      <FilterCheckbox label='Full-Time' />
      <Button buttonStyle={'btn--primary'}>Search</Button>
    </form>
  );
};

export default SearchBar;
