import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import GridContainer from './components/GridContainer/GridContainer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchBar from './components/SearchBar/SearchBar';
import MobileSearchBar from './components/MobileSearchBar/MobileSearchBar';
import JobCard from './components/JobCard/JobCard';
import SkeletonJob from './skeletons/SkeletonJob';
import './index.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('dark_theme') === 'true'
  );
  const [windowWidth, setWindowWidth] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // call the handlewindowresize function when the window is resized
    window.addEventListener('resize', handleWindowResize);
    // immediately set the dark theme on page render and every theme change
    localStorage.setItem('dark_theme', darkTheme);

    // changes classname of root html so css variables can be used
    darkTheme
      ? (document.documentElement.className = 'theme-dark')
      : (document.documentElement.className = 'theme-light');

    // cleanup event
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    // dependant on the windowWidth state and darkTheme state
  }, [windowWidth, darkTheme]);

  useEffect(() => {
    setIsLoading(true);
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setJobs(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }, []);

  // function to set the windowWidth state
  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }

  // toggle the theme - passed to ToggleSwitch component
  function handleThemeChange() {
    setDarkTheme(!darkTheme);
  }

  return (
    <Router>
      <Header
        windowWidth={windowWidth}
        onWindowResize={handleWindowResize}
        onThemeChange={handleThemeChange}
      />
      <Main>
        <Container>
          {/* if the screen width is tablet size or larger, show searchbar, anything less, show mobile searchbar */}
          {windowWidth >= 768 ? <SearchBar /> : <MobileSearchBar />}
          <GridContainer>
            {jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}
          </GridContainer>
          {isLoading && <SkeletonJob />}
        </Container>
      </Main>
    </Router>
  );
}

export default App;
