import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import desktopImage from '../../assets/desktop/bg-pattern-header.svg';
import tabletImage from '../../assets/tablet/bg-pattern-header.svg';
import mobileImage from '../../assets/mobile/bg-pattern-header.svg';

import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const TopNavbar = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (windowWidth <= 767) {
      setBackgroundImage(mobileImage);
    } else if (windowWidth <= 1200) {
      setBackgroundImage(tabletImage);
    } else {
      setBackgroundImage(desktopImage);
    }
  }, [windowWidth]);

  return (
    <header
      className='app-header'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Logo />
      <ToggleSwitch />
    </header>
  );
};

export default TopNavbar;
