import React from 'react';

import './FilterCheckbox.css';

const FilterCheckbox = ({ label, onCheckboxChange, isChecked }) => {
  return (
    <label className='ui-checkbox'>
      <input type='checkbox' onClick={onCheckboxChange} isChecked={isChecked} />
      <span className='ui-checkbox--checkmark'></span>
      {label ? <span className='ui-checkbox__text'>{label}</span> : ''}
    </label>
  );
};

export default FilterCheckbox;
