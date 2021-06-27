import React, { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import SkeletonJob from '../../skeletons/SkeletonJob';
import GridContainer from '../../components/GridContainer/GridContainer';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <GridContainer>
      {jobs && jobs.map((job) => <JobCard key={job.id} job={job} />)}
      {isLoading && <SkeletonJob />}
    </GridContainer>
  );
};

export default HomePage;
