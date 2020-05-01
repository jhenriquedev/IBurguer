import React from 'react';

import './styles.css';

import Logo from '../../assets/iburguer-logo.png';

export default props => {
  return(
    <div className="logo">
      <img src={Logo} alt="IBurger App"/>
    </div>
  );
};