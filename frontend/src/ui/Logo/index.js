import React from 'react';

import './styles.css';

import { ASSETS } from '../../summary';

export default props => {
  return(
    <div className="logo" {...props.config} >
      <img src={ ASSETS.LOGO_IMG } alt="IBurger App"/>
    </div>
  );
};