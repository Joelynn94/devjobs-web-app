import React from 'react';

import './Button.css';

const STYLES = [
  'btn--default',
  'btn--primary',
  'btn--secondary',
  'btn--danger',
  'btn--success',
  'btn--dark',
];

const Button = ({
  children,
  type,
  disabled,
  onClick,
  buttonStyle,
  ...otherProps
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button
      className={`ui-button ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
