import React, { useState } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import MobileSearchBar from '../../components/MobileSearchBar/MobileSearchBar';
import JobCard from '../../components/JobCard/JobCard';
import SkeletonJob from '../../skeletons/SkeletonJob';
import Container from '../../components/Container/Container';
import GridContainer from '../../components/GridContainer/GridContainer';

const HomePage = ({ jobs, isLoading, windowWidth, setCurrentJob }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isFullTime, setIsFullTime] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsFullTime(!isFullTime);
    if (!isFullTime) {
      setFilteredJobs(jobs.filter((job) => job.contract === 'Full Time'));
    } else {
      setFilteredJobs(jobs);
    }
  };

  return (
    <Container>
      {/* if the screen width is tablet size or larger, show searchbar, anything less, show mobile searchbar */}
      {windowWidth >= 768 ? (
        <SearchBar
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
          isFullTime={isFullTime}
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
