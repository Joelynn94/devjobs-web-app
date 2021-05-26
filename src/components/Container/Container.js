import React from 'react';

import './Container.css';

const Container = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={`ui-container ${className ? className : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
