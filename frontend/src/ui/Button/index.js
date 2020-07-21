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
    <button className={className} {...style} onClick={onClick}>
      {icon ? <i>{icon}</i> : ''}
      {text ? text : ''}
    </button>
  );
};