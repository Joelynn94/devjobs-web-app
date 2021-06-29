import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobBanner from '../../components/JobBanner/JobBanner';
import JobDetails from '../../components/JobDetails/JobDetails';

const JobDetailPage = ({ jobs, currentJob, setCurrentJob }) => {
  const params = useParams();
  const id = Number.parseInt(params.id, 10);

  useEffect(() => {
    setCurrentJob(jobs.find((job) => job.id === id));
  }, [jobs]);

  console.log(currentJob);

  return (
    <>
      <JobBanner currentJob={currentJob} />
      <JobDetails currentJob={currentJob} />
    </>
  );
};

export default JobDetailPage;
