import React from 'react';
import { Link } from 'react-router-dom';

import './JobCard.css';

const JobCard = ({ job, setCurrentJob }) => {
  return (
    <Link
      to={`jobs/${job.id}`}
      className='job-card'
      onClick={(e) => setCurrentJob(job)}
    >
      <div
        className='job-card__top'
        style={{ backgroundColor: `${job.logoBackground}` }}
      >
        <img className='job-card__top-img' src={job.logo} alt='Company Logo' />
      </div>
      <div className='job-card__body'>
        <p className='job-card__details'>
          {job.postedAt}
          <span className='job-card__details-oval'></span>
          {job.contract}
        </p>
        <h3 className='job-card__position'>{job.position}</h3>
        <p className='job-card__details'>{job.company}</p>
      </div>
      <div className='job-card__footer'>
        <h4 className='job-card__location'>{job.location}</h4>
      </div>
    </Link>
  );
};

export default JobCard;
