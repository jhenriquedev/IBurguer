import React from 'react';

import './styles.css';

import { UI } from '../../summary';


export default props => {
  const {
    classNameHeader = 'header',
    classNameBody = 'content',
    tools,
    children
  } = props.config;

  return(
    <div className="page">
      <div className={ classNameHeader }>
        <UI.LOGO />
        {tools}
      </div>
      <div className={ classNameBody }>
        { children }
      </div>
    </div>
  );
};