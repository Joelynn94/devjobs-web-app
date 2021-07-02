import React from 'react';

import Button from '../Button/Button';
import './JobDetails.css';

const JobDetails = ({ currentJob }) => {
  return (
    <div className='job-details'>
      <div className='job-details__top'>
        <div className='job-details__info'>
          <p className='job-details__posted'>
            {currentJob.postedAt}
            <span className='job-details__posted-oval'></span>
            {currentJob.contract}
          </p>
          <h3 className='job-details__position'>{currentJob.position}</h3>
          <h4 className='job-details__location'>{currentJob.location}</h4>
        </div>
        <div className='job-details__apply'>
          <Button buttonStyle={'btn--primary'}>Apply Now</Button>
        </div>
      </div>
      <div className='job-details__body'>
        <div className='job-details__description'>
          <p className='job-details__description-para'>
            {currentJob.description}
          </p>
        </div>
        <section className='job-details__requirements'>
          <h3 className='job-details__requirements-heading'>Requirements</h3>
          <p className='job-details__requirements-para'>
            {currentJob?.requirements.content}
          </p>
          <ul className='job-details__requirements-list'>
            {currentJob.requirements.items.map((item, index) => (
              <div className='job-details__requirements-wrapper' key={index}>
                <span className='job-details__requirements-oval'></span>
                <li className='job-details__requirements-item'>{item}</li>
              </div>
            ))}
          </ul>
        </section>
        <section className='job-details__role'>
          <h3 className='job-details__role-heading'>What You Will Do</h3>
          <p className='job-details__role-para'>{currentJob?.role.content}</p>
          <ul className='job-details__role-list'>
            {currentJob.role.items.map((item, index) => (
              <div className='job-details__role-wrapper' key={index}>
                <span className='job-details__role-oval'></span>
                <li className='job-details__role-item'>{item}</li>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
