import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import desktopImage from '../../assets/desktop/bg-pattern-header.svg';
import tabletImage from '../../assets/tablet/bg-pattern-header.svg';
import mobileImage from '../../assets/mobile/bg-pattern-header.svg';

import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import Container from '../Container/Container';

const TopNavbar = ({ windowWidth, darkTheme, onThemeChange }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
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
      <Container>
        <Logo />
        <ToggleSwitch darkTheme={darkTheme} onThemeChange={onThemeChange} />
      </Container>
    </header>
  );
};

export default TopNavbar;
