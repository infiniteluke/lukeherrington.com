import React from 'react';
import Label from './label';

export default ({ link, children, label }) => (
  <li>{label?(<Label>{label}</Label>):null}{' '}{link?(<a href={link}>{children}</a>) : children}</li>
)