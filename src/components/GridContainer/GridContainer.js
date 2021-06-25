import React from 'react';

import './GridContainer.css';

const GridContainer = ({ children }) => {
  return <div className='ui-grid-container'>{children}</div>;
};

export default GridContainer;
