import React from 'react';

import './styles.css';

import { UI, TEMPLATES } from '../../summary';


export default props => {
  const {
    modal,
    header,
    content
  } = props.config;

  return(
    <div className="page" >
      <div className="content" { ...content }></div>
      <div className="header" { ...header }></div>
      <div className="modal" { ...modal }></div>
    </div>
  );
};