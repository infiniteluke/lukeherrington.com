import React from 'react';
import Label from './label';

export default ({ link, children, label }) => (
  <li>{link?(<a style={{ verticalAlign: 'top' }} href={link}>{label?(<Label>{label}</Label>):null}{children}</a>) : label?(<><Label>{label}</Label>{children}</>):children}</li>
)