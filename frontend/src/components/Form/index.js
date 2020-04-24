import React from 'react';

import './styles.css';

import Burger from '../../assets/X-Burguer-PNG-1009x1024.png';

import Input from '../Input';


export default props => {
  const {
    h1Text,
    h2Text,
    button,
    a,
    fields
  } = props.configs;

  return(
    <div className="form">
      <img src={Burger} />

      <form action="">
        <h1>{h1Text}</h1>
        <h2>{h2Text}</h2>
        {
          fields ?
            fields.map(field => <Input configs={field} />)
          : ''
        }
        <button 
          className="primary-button"
        >
          {button.text}
        </button>
        <a href={a.href}>
          {a.text}
        </a>
      </form>
    </div>
  );
};