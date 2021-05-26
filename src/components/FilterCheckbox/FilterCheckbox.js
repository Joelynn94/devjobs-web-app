import React from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = ({ label }) => {
  return (
    <label className='ui-checkbox'>
      <input type='checkbox' />
      <span className='ui-checkbox--checkmark'></span>
      {label ? <span className='ui-checkbox__text'>{label}</span> : ''}
    </label>
  );
};

export default FilterCheckbox;
