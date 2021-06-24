import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container/Container';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchBar from './components/SearchBar/SearchBar';
import MobileSearchBar from './components/MobileSearchBar/MobileSearchBar';
import './index.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('dark_theme') === 'false'
  );

  useEffect(() => {
    // call the handlewindowresize function when the window is resized
    window.addEventListener('resize', handleWindowResize);
    // immediately set the dark theme on page render and every theme change
    localStorage.setItem('dark_theme', darkTheme);

    // cleanup event
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    // dependant on the windowWidth state and darkTheme state
  }, [windowWidth, darkTheme]);

  // function to set the windowwidth state
  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }

  // toggle the theme - passed to ToggleSwitch component
  function handleThemeChange() {
    setDarkTheme(!darkTheme);
  }

  // changes classname of root html so css variables can be used
  darkTheme
    ? (document.documentElement.className = 'theme-dark')
    : (document.documentElement.className = 'theme-light');

  return (
    <Router>
      <Header
        windowWidth={windowWidth}
        onWindowResize={handleWindowResize}
        onThemeChange={handleThemeChange}
      />
      <Main>
        <Container>
          {/* if the width is tablet size or larger, show searchbar, anything less, show mobile searchbar */}
          {windowWidth >= 768 ? <SearchBar /> : <MobileSearchBar />}
          <h1>Hello</h1>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
