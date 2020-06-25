import React from 'react';

import './styles.css';

export default props => {
  const {
    title,
    children
  } = props.config;

  return (
    <div className="view-item">
      { 
        title ? 
          <h4>{title}</h4> 
        : '' 
      }
      {children}
    </div>
  );
};