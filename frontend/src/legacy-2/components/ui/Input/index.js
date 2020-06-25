import React from 'react';

import './styles.css';

export default props => {
  const {
    label,
    info,
  } = props.config;

  return(
    <div className="input-box">
      <label htmlFor={ label }>{label}</label>
      <input { ...props.config } />
      <span>{info}</span>
    </div>
  );
};