import React from 'react';
import Label from './label';

export default ({ children, label }) => (
  <li>{label?(<Label>{label}</Label>):null}{children}</li>
)