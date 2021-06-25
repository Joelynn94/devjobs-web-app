import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './MobileModalFilter.css';

const MobileModalFilter = ({ onFilterClick }) => {
  return (
    <div className='mobile-modal' onClick={onFilterClick}>
      <div
        className='mobile-modal__content'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='mobile-modal__top'>
          <Input
            icon={'location'}
            name='location'
            placeholder='Filter by location...'
          />
        </div>
        <div className='mobile-modal__bottom'>
          <FilterCheckbox label='Full-Time Only' />
          <Button buttonStyle={'btn--primary'}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileModalFilter;
