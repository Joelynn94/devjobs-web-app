import React from 'react';

import Container from '../Container/Container';
import Button from '../Button/Button';
import './JobApply.css';

const JobApply = ({ currentJob }) => {
  return (
    <div className='job-apply__wrapper'>
      <Container>
        <div className='job-apply'>
          <div className='job-apply__details'>
            <h3 className='job-apply__position'>{currentJob.position}</h3>
            <p className='job-apply__company'>{currentJob.company}</p>
          </div>
          <div className='job-apply__btn'>
            <Button buttonStyle={'btn--primary'}>Apply Now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobApply;
