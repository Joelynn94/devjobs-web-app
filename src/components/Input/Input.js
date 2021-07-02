import React, { useState } from 'react';
import clsx from 'clsx';

import './Input.css';

const Input = ({
  className,
  value,
  onChange,
  type = 'text',
  icon,
  helperText,
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  const conditionalClasses = clsx({
    focused: focused,
  });

  const classes = clsx('ui-input__group', className);

  return (
    <div className={classes}>
      {icon ? (
        <>
          <span className='ui-input__icon'>
            {icon === 'search' ? (
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z'
                  fill='#5964E0'
                  fillRule='nonzero'
                />
              </svg>
            ) : (
              <svg width='17' height='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z'
                  fill='#5964E0'
                  fillRule='nonzero'
                />
              </svg>
            )}
          </span>
          <input
            className={`ui-input__input ${conditionalClasses}`}
            type={type}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            {...otherProps}
          />
          <small className='ui-input__helper-text'>{helperText}</small>
        </>
      ) : (
        <>
          <input
            className={`ui-input__input-pad-0 ${conditionalClasses}`}
            type={type}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            {...otherProps}
          />
          <small className='ui-input__helper-text'>{helperText}</small>
        </>
      )}
    </div>
  );
};

export default Input;
