import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import JobApply from '../../components/JobApply/JobApply';
import JobBanner from '../../components/JobBanner/JobBanner';
import JobDetails from '../../components/JobDetails/JobDetails';

const JobDetailPage = ({ jobs, currentJob, setCurrentJob }) => {
  const params = useParams();
  const id = Number.parseInt(params.id, 10);

  useEffect(() => {
    setCurrentJob(jobs.find((job) => job.id === id));
  }, [jobs, id, setCurrentJob]);

  console.log(currentJob);

  return (
    <>
      <Container>
        <JobBanner currentJob={currentJob} />
        <JobDetails currentJob={currentJob} />
      </Container>
      <JobApply currentJob={currentJob} />
    </>
  );
};

export default JobDetailPage;
