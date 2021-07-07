import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePage from './pages/HomePage/HomePage';
import JobDetailPage from './pages/JobDetailPage/JobDetailPage';
import './index.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('dark_theme') === 'false'
  );
  const [windowWidth, setWindowWidth] = useState(() =>
    localStorage.getItem('window_size')
  );
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [jobsVisible, setJobsVisible] = useState(12);

  // changes className of root body element so css variables can be used
  darkTheme
    ? (document.documentElement.className = 'theme-dark')
    : (document.documentElement.className = 'theme-light');

  useEffect(() => {
    // immediately set the dark theme on page render and every theme changes
    localStorage.setItem('dark_theme', darkTheme);

    // dependant on the windowWidth state and darkTheme state
  }, [darkTheme]);

  useEffect(() => {
    // call the handlewindowresize function when the window is resized
    window.addEventListener('resize', handleWindowResize);
    // immediately set the window size on page render and every window size changes
    localStorage.setItem('window_size', windowWidth);

    // cleanup event
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

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
        setIsLoading(false);
      });
  }, []);

  // toggle the theme - passed to ToggleSwitch component
  function handleThemeChange() {
    setDarkTheme(!darkTheme);
  }

  // function to set the windowWidth state
  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }

  function showMoreJobs() {
    setJobsVisible((prevState) => prevState + 3);
  }

  return (
    <Router>
      <Header
        darkTheme={darkTheme}
        windowWidth={windowWidth}
        onWindowResize={handleWindowResize}
        onThemeChange={handleThemeChange}
      />
      <Main>
        <Switch>
          <Route exact path='/'>
            <HomePage
              jobs={jobs}
              isLoading={isLoading}
              windowWidth={windowWidth}
              setIsLoading={setIsLoading}
              currentJob={currentJob}
              setCurrentJob={setCurrentJob}
              showMoreJobs={showMoreJobs}
              jobsVisible={jobsVisible}
            />
          </Route>
          <Route exact path='/jobs/:id'>
            <JobDetailPage
              jobs={jobs}
              setIsLoading={setIsLoading}
              currentJob={currentJob}
              setCurrentJob={setCurrentJob}
            />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
