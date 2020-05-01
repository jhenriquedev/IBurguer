import React from 'react';

import './styles.css';

export default props => {
  const { label } = props.config;
  
  return(
    <div className="textarea-box">
      {
        label ? 
          <label htmlFor={label}>{label}</label>
        : ''
      }
      <textarea {...props.config} />
    </div>
  );
};