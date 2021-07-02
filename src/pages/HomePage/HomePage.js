import React, { useState, useEffect } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import MobileSearchBar from '../../components/MobileSearchBar/MobileSearchBar';
import JobCard from '../../components/JobCard/JobCard';
import SkeletonJob from '../../skeletons/SkeletonJob';
import Container from '../../components/Container/Container';
import GridContainer from '../../components/GridContainer/GridContainer';

const HomePage = ({ jobs, isLoading, windowWidth, setCurrentJob }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [isFullTime, setIsFullTime] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsFullTime(!isFullTime);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationInputChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const filteredPosition = jobs.filter((job) => {
      if (searchTerm !== '') {
        return job.position.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    if (searchTerm !== '') {
      setFilteredJobs(filteredPosition);
    }

    const filteredLocation = jobs.filter((job) => {
      if (searchLocation !== '') {
        return job.location
          .toLowerCase()
          .includes(searchLocation.toLowerCase());
      }
    });

    if (!isFullTime) {
      setFilteredJobs(jobs.filter((job) => job.contract === 'Full Time'));
    } else {
      setFilteredJobs(jobs);
    }

    setIsFullTime(false);
    setSearchTerm('');
    setSearchLocation('');
  };

  return (
    <Container>
      {/* if the screen width is tablet size or larger, show searchbar, anything less, show mobile searchbar */}
      {windowWidth >= 768 ? (
        <SearchBar
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
          isFullTime={isFullTime}
          searchTerm={searchTerm}
          onSearchInputChange={handleSearchInputChange}
          onFormSubmit={handleFormSubmit}
          searchLocation={searchLocation}
          onLocationInputChange={handleLocationInputChange}
        />
      ) : (
        <MobileSearchBar />
      )}
      <GridContainer>
        {filteredJobs.length > 0
          ? filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} setCurrentJob={setCurrentJob} />
            ))
          : jobs.map((job) => (
              <JobCard key={job.id} job={job} setCurrentJob={setCurrentJob} />
            ))}
        {isLoading && <SkeletonJob />}
      </GridContainer>
    </Container>
  );
};

export default HomePage;
