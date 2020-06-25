import React from 'react';

import './styles.css';

export default props => {
  return(
    <form className="panel" {...props.config} ></form>
  );
};