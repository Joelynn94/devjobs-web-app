import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import MobileSearchBar from '../../components/MobileSearchBar/MobileSearchBar';
import JobCard from '../../components/JobCard/JobCard';
import SkeletonJob from '../../skeletons/SkeletonJob';
import Container from '../../components/Container/Container';
import GridContainer from '../../components/GridContainer/GridContainer';

const HomePage = ({ jobs, isLoading, windowWidth, setCurrentJob }) => {
  return (
    <Container>
      {/* if the screen width is tablet size or larger, show searchbar, anything less, show mobile searchbar */}
      {windowWidth >= 768 ? <SearchBar /> : <MobileSearchBar />}
      <GridContainer>
        {jobs &&
          jobs.map((job) => (
            <JobCard key={job.id} job={job} setCurrentJob={setCurrentJob} />
          ))}
        {isLoading && <SkeletonJob />}
      </GridContainer>
    </Container>
  );
};

export default HomePage;
