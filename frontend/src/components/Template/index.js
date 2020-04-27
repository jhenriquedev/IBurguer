import React from 'react';

import './styles.css';

import Logo from '../Logo';

export default props => {
  return(
    <div className="page">
      <div className={
        props.header ? props.header : "header"
      }>
        <Logo />
        {props.tools}
      </div>
      <div className={
        props.header ? 'content-dashboard' :"content"
      }>
        {props.children}
      </div>
    </div>
  );
};