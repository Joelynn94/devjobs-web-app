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
  const [currentJob, setCurrentJob] = useState({});
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // call the handlewindowresize function when the window is resized
    window.addEventListener('resize', handleWindowResize);
    // immediately set the dark theme on page render and every theme changes
    localStorage.setItem('dark_theme', darkTheme);
    // immediately set the window size on page render and every window size changes
    localStorage.setItem('window_size', windowWidth);

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
        setIsLoading(false);
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
        <Switch>
          <Route exact path='/'>
            <HomePage
              jobs={jobs}
              isLoading={isLoading}
              windowWidth={windowWidth}
              setIsLoading={setIsLoading}
              currentJob={currentJob}
              setCurrentJob={setCurrentJob}
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
