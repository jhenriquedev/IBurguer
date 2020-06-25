import React from 'react';

import './styles.css';

import { UI, TEMPLATES } from '../../summary';


export default props => {
  const {
    modal,
    classNameHeader = 'header',
    classNameBody = 'content',
    tools,
    content
  } = props.config;

  return(
    <div className="page">
      <div className="modal" { ...modal }></div>
      <div className="content" {...content}></div>
    </div>
  );
};