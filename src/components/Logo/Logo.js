import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/desktop/logo.svg';

import './Logo.css';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={logo} alt='devjobs logo' />
    </Link>
  );
};

export default Logo;
