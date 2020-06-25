import React from 'react';

import './styles.css';

export default props => {
  const {
    style,
    className = 'primary-button',
    text,
    icon,
    onClick
  } = props.config;

  return(
    <button className={className} >
      {icon ? icon : ''}
      {text ? text : ''}
    </button>
  );
};