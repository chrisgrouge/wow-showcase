import React from 'react';
import PropTypes from 'prop-types';

function Button({ href, children }) {
  return (
    <a
      className="c-Button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default Button;
