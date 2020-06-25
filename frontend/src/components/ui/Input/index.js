import React from 'react';

import './styles.css';

export default props => {
  const {
    info,
  } = props.config;

  return(
    <div className="input-box">
      <input { ...props.config } />
      <span>{info}</span>
    </div>
  );
};