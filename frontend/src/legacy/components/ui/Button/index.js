import React from 'react';

import './styles.css';

export default props => {
  return( 
    <button { ...props.config }>
      {
        props.children ?
          props.children
        : 
          props.config.text
      }
    </button> 
  );
};