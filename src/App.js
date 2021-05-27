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

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    // cleanup event
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <Router>
      <Header windowWidth={windowWidth} onWindowResize={handleWindowResize} />
      <Main>
        <Container>
          {windowWidth >= 768 ? <SearchBar /> : <MobileSearchBar />}

          <h1>Hello</h1>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
