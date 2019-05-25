import React from 'react';

export default ({ children }) => (
  <span style={{
    background: 'linear-gradient(45deg, #00CCFF, #4BE8FF)',
    padding: '2px 6px',
    borderRadius: '4px',
    color: 'white',
  }}>
    {children}
  </span>
)
