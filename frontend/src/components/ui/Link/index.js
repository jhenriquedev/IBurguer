import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

export default props =>{
  const {
    to='/',
    icon,
    text,
    className='link'
  } = props.config;
  return(
    <Link to={to} className={className} >{icon}{text}</Link>
  );
};