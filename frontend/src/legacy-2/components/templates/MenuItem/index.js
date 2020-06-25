import React from 'react';

import {
  FiStar,
  FiClock,
  FiAlertCircle,
  FiShoppingCart
} from "react-icons/fi";

import { FormataCurrency } from '../../../miscelaneous/util';

import './styles.css';

import { ASSETS } from '../../summary';

export default props => {
  const {
    type='Hambúrguer',
    thumbnail = ASSETS.BURGUER_IMG,
    price=29.99,
    title='Hambúrguer de Sirí ao molho.oo',
    description='Delicioso hambuguer de siri, feito com os melhores siris do atlântico.',
    preparation='0:45',
    evaluation='4.9',
    salesCount='1.5k',
    active=true
  } = props.config;

  /*
    <div className="menu-item-tools">
          <button><FiEdit /></button>
    </div>
  */

  return(
    <div className="menu-item">
      <div className="menu-item-header">
        <div className="menu-item-title">
          <h3>{
            active ? 
              '' 
            : 
              <FiAlertCircle style={{marginRight:'10px'}} color='#e8273b' />
          }
          {title}
          </h3>
          <h4>{type}</h4>
        </div>
      </div>
      <div className="menu-item-content">
        <img src={thumbnail} alt={description} />
        <div className="menu-item-info">
          <p>{description}</p>
          <span>{FormataCurrency(price)}</span>
          <div className="menu-item-footer">
            <span><FiStar size={16} />{evaluation}</span>
            <span><FiClock size={16} />{preparation}</span>
            <span><FiShoppingCart size={16} />{salesCount}</span>
          </div>
        </div>
      </div>
      <div className="menu-tools">

      </div>
    </div>
  );
};