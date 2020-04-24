import React from 'react';

import './styles.css';

import Logo from '../Logo';

export default props => {
  return(
    <div className="page">
      <div className="header">
        <Logo />
      </div>
      <div className="content">
        {props.children}
      </div>
      <div className="footer">
        {props.footer}
      </div>
    </div>
  );
};