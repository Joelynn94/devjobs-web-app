import React from 'react';

import Button from '../Button/Button';
import './JobBanner.css';

const JobBanner = ({ currentJob }) => {
  return (
    <div className='job-banner'>
      <div
        className='job-banner__img'
        style={{ backgroundColor: currentJob.logoBackground }}
      >
        <img src={currentJob.logo} alt='Comapny logo' />
      </div>
      <div className='job-banner__details'>
        <div>
          <h3 className='job-banner__company'>{currentJob.company}</h3>
          <p className='job-banner__website'>{currentJob.website}</p>
        </div>
        <div className='job-banner__btn'>
          <Button buttonStyle={'btn--secondary'}>Company Site</Button>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;
