import React from 'react';
import Label from './label';

export default ({ children, label }) => (
  <li className="list-item">
    {label ? <Label>{label}</Label> : null}
    {children}
  </li>
);
