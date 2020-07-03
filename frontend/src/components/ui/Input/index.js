import React from 'react';

import './styles.css';

export default props => {
  const {
    info,
    className='input-box',
    icon, 
    btn
  } = props.config;

  return(
    <div className={className}>
      <span className="input-icon">{icon}</span>
      <input { ...props.config } />
      <span className="input-btn">{btn}</span>
      <span>{info}</span>
    </div>
  );
};