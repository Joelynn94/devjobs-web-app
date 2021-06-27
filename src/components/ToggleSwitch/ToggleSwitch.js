import React from 'react';
import sunIcon from '../../assets/desktop/icon-sun.svg';
import moonIcon from '../../assets/desktop/icon-moon.svg';

import './ToggleSwitch.css';

const ToggleSwitch = ({ onThemeChange }) => {
  const handleThemeToggle = () => {
    onThemeChange();
  };

  return (
    <div className='toggle'>
      <img src={sunIcon} alt='light theme icon' />
      <label className='toggle-switch'>
        <input
          className='toggle-switch__checkbox'
          type='checkbox'
          onChange={handleThemeToggle}
        />
        <span className='toggle-switch__switch'></span>
      </label>
      <img src={moonIcon} alt='dark theme icon' />
    </div>
  );
};

export default ToggleSwitch;
