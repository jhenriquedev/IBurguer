import React from 'react';

import './styles.css';

export default props => {
  return(
    <button 
      {...props.config }
    >
      { props.config.text }
    </button>
  );
};