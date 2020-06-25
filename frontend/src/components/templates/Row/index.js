import React from 'react';

import './styles.css';

export default props => {
  return(
    <div className="row" {...props.config} ></div>
  );
};