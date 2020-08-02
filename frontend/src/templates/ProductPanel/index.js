import React from 'react';

import './styles.css';

import { ASSETS } from '../../summary';

import { BsStarFill, BsStarHalf, BsClock } from 'react-icons/bs';

export default props => {
  const {
    img = ASSETS.BATATA_FRITA,
    title = 'Titulo',
    price = '0.00', 
    promotionalPrice,
    description,
    evaluation,
    preparation,
    salesCount = 0
  } = props.config;

  const star = () => {
    let stars = [];

    for (let i=0; i < parseInt(evaluation); i++){
      stars.push(<BsStarFill size={14} color='#4b5558' key={i} />);
    };

    if(evaluation%1 === 0){}else{
      stars.push(<BsStarHalf size={14} color='#4b5558' key={evaluation} />)
    };

    return stars;
  };

  return(
    <div className="product-panel">
      <div className="product-img">
        {
          img ? 
            <img src={img} />
          : ''
        }
      </div>
      <div className="product-text">
        <h3>{title}</h3>
        <p>
          {
            promotionalPrice ?
              <span style={{ color: 'green' }}>
                {
                  Intl.NumberFormat('pt-BR', {
                    style: 'currency', 
                    currency: 'BRL'
                  }).format(promotionalPrice)
                }  
              </span>
            : ''
          }
          <span style={{
            textDecoration: promotionalPrice ? 'line-through' : 'none'
          }}>
          {
            Intl.NumberFormat('pt-BR', {
              style: 'currency', 
              currency: 'BRL'
            }).format(price)
          }
          </span>
        </p>

        <div className="product-description">
          <p>
            {
              description
            }
          </p>
        </div>

        <div className="status">
          <div className="evaluation">
            {
              star().map(item => item)
            }
            <span>{salesCount}</span>
          </div>
          {
            preparation ? 
              <div className="time">
                <BsClock size={14} color='#4b5558' />
                <span>{preparation} min</span>
              </div>
            : ''
          }
        </div>
      </div>
    </div>

  );
};