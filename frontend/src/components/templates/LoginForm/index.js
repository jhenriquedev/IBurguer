import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { ASSETS, UI } from '../../summary';


export default props => {
  const {
    h1Text,
    h2Text,
    button,
    a,
    fields,
    action
  } = props.config;

  return(
    <div className="form">
      <img src={ASSETS.BURGUER_IMG} alt=''/>

      <form action={ action }>
        <h1>{h1Text}</h1>
        <h2>{h2Text}</h2>
        {
          fields ?
            fields.map(field => <UI.INPUT config={field} />)
          : ''
        }
        <UI.BUTTON config={{
          className: 'primary-button',
          text: button.text,
          onClick:button.onClick
        }}/>
        <Link to={a.href}>
          {a.text}
        </Link>
      </form>
    </div>
  );
};