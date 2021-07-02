import React from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = ({ label, onCheckboxChange }) => {
  return (
    <label className='ui-checkbox'>
      <input type='checkbox' onClick={onCheckboxChange} />
      <span className='ui-checkbox--checkmark'></span>
      {label ? <span className='ui-checkbox__text'>{label}</span> : ''}
    </label>
  );
};

export default FilterCheckbox;
