import React, { useState } from 'react';
import { useParams } from 'react-router';

const JobDetailPage = ({ match }) => {
  // const job = jobs.find((job) => job.id === match.params.id);
  const params = useParams();
  const [job, setJob] = useState({});

  return (
    <div>
      <div>This is job {params.id}</div>
    </div>
  );
};

export default JobDetailPage;
