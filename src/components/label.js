import React from 'react';

export default ({ children }) => (
  <span
    className="label"
    style={{
      background: 'linear-gradient(45deg, #00CCFF, #4BE8FF)',
      padding: '2px 6px',
      marginRight: '6px',
      borderRadius: '4px',
      color: 'white',
      alignSelf: 'flex-start',
    }}
  >
    {children}
  </span>
);
