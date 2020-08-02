import React from 'react';

import './styles.css';

import { ASSETS } from '../../summary';

import { FiInfo, FiClock, FiCreditCard } from 'react-icons/fi';

import { FormataCurrency } from '../../util';

export default props => {
  const {
    client,
    basket,
    paymentMethod,
    status = 0,
    note
  } = props.config;

  const statusList = [
    {status: 'Aguardando', color: 'orange'},
    {status: 'Preparação', color: 'green'},
    {status: 'Encaminhado', color: 'rgb(0, 153, 255)'},
    {status: 'Entregue', color: 'gray'},
    {status: 'Cancelado', color: 'red'},
  ];

  const total = () => {
    let sum = basket.reduce((tot, item) => {
      return tot + item.price;
    }, 0);

    console.log('total: '+sum);

    return FormataCurrency(sum);
  };

  return(
    <div className="request-panel">
      <div className="request-panel-div">
        <div className="request-status" style={{
          background: statusList[status].color
        }}></div>
        <div className="request-client">
          <img src={client.thumbnail} />
          <h4>{client.name}</h4>
          <button><FiInfo color='rgb(0, 153, 255)'/></button>
        </div>
      </div>

      <div className="request-panel-div">
        <div className="request-info">
          <div>
            <h5 style={{
              color:`${statusList[status].color}`
            }}>
              {statusList[status].status}
            </h5>
            <p>Segunda-feira, 13 de Outubro</p>
          </div>
          
          <span>
            14:30
            <FiClock color='green' />
          </span>
          
        </div>
        <div className="request-payment-info">
          <FiCreditCard color='rgb(0, 153, 255)' size={14}/>
          <span>
            { paymentMethod }
          </span>
        </div>
      </div>

      <div className="request-panel-div">
        <div className="request-payment-info">
          <span>
            {client.cep}<br />
            { client.publicPlace } <br />
            { client.complement } <br />
            {`
              ${client.number}, 
              ${client.neighborhood}, 
              ${client.city}-${client.uf}
            `}
          </span>
        </div>
      </div>

      <div className="request-panel-div">
        {
          basket.map(item => 
            <div className="basket-item" key={item._id}>
              <img src={item.img} />
              <div>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
              <span>{FormataCurrency(item.price)}</span>
            </div>
          )
        }
      </div>

      <div className="basket-panel-div">
        <div className="basket-total">
          <h5>Total</h5>
          <span> { total() } </span>
        </div>
      </div>

      <div className="basket-panel-div">
        <div className="basket-observations">
            <div className="request-payment-info">
              <span>
                {note}
              </span>
            </div>
        </div>
      </div>

    </div>
  );
};