import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonJob = () => {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-job'>
        <div className='skeleton-job__top'>
          <SkeletonElement type='thumbnail' />
        </div>
        <div className='skeleton-job__body'>
          <SkeletonElement type='text' />
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
        </div>
        <div className='skeleton-job__footer'>
          <SkeletonElement type='title' />
        </div>
        <Shimmer />
      </div>
    </div>
  );
};

export default SkeletonJob;
