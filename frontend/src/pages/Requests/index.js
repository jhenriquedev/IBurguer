import React, { useState } from 'react';

import './styles.css';

import { TEMPLATES, UI } from '../../summary';

import { FiXCircle } from 'react-icons/fi';

//apenas para testes
import { REQUEST } from './listRequests';

export default ({history}) => {
  const [modalDisplay, setModalDisplay] = useState('none');

  return(
    <TEMPLATES.PAGE config = {{
      modal: {
        style: {
          display: modalDisplay
        },
        children:[
          <TEMPLATES.ROW key={0} config={{
            style: {
              height: '100%'
            },
            children: [
              <TEMPLATES.PANEL key={0} config={{
                style:{
                  margin: 'auto auto',
                  height: '80%',
                  width: '80%',
                  padding: '30px',
                  flexDirection: 'row'
                },
                children: [
                  <TEMPLATES.ROW key={0} config={{
                    style:{
                      height: '15%',
                      justifyContent: 'center',
                      width: '90%',
                    },
                    children:[
                      <h1>Adicionar promoção</h1>,
                    ]
                  }}/>,
                  <TEMPLATES.ROW key={1} config={{
                    style: {
                      height: '15%',
                      justifyContent: 'flex-end',
                      width: '10%',
                    },
                    children: [
                      <UI.BUTTON key={0} config={{
                        className: "btn-header",
                        icon: <FiXCircle size={24} color="#4b5558" />,
                        onClick: () => setModalDisplay('none')
                      }} />,
                      
                    ]
                  }} />,
                  <TEMPLATES.ROW key={2} config={{
                    style: {
                      height: '85%',
                      padding: '40px',
                      paddingTop: '0px'
                    },
                    children: [
                      <TEMPLATES.PANEL key={0} config={{
                        style: {
                          width: '100%',
                          height: '100%',
                          padding: '0'
                        },
                        children: [
                        ]
                      }}/>,
                    ]
                  }} />
                ]
              }} />
            ]
          }} />,
        ]
      },
      header: {
        style: {
          display: 'flex'
        },
        children: [
          <TEMPLATES.HEADER key={0} config={{
            history: history,
            page: 1
          }} />
        ]
      },
      content:{
        style: {
          top: '105px'
        },
        children: [
          <TEMPLATES.LIST key={0} config={{
            style: {
              overflow: 'auto'
            },
            header: {
              title: 'Verifique os pedidos',
              subTitle: 'Atenda os pedidos rápidamente, seus clientes estão famintos!',
              tools: [
                <UI.BUTTON key={0} config={{
                  className: "btn-header-active",
                  text: 'Todos',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={1} config={{
                  className: "btn-header",
                  text: 'Novos',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={2} config={{
                  className: "btn-header",
                  text: 'Preparando',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={3} config={{
                  className: "btn-header",
                  text: 'Encaminhados',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={4} config={{
                  className: "btn-header",
                  text: 'Entregues',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={5} config={{
                  className: "btn-header",
                  text: 'Cancelados',
                  onClick: () => setModalDisplay('block')
                }} />
              ]
            },
            children: REQUEST
          }} />
        ]
      }
    }} />
  );
};

/**

<TEMPLATES.REQUEST key={0} config={{
                client: {
                  name: 'Miranda Ribeiro',
                  thumbnail: ASSETS.USER,
                  cep: '66833011',
                  publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
                  complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
                  neighborhood: 'Coqueiro', //bairro
                  city: 'Ananindeua', //cidade
                  uf: 'PA', //estado
                  number: '135', //numero
                },
                basket: [
                  {
                    _id: 0,
                    img: ASSETS.ARTESANAL,
                    name: 'Hamburguer Artesanal',
                    description: 'Ao ponto, sem molho e sem cebola.',
                    price: 32.99
                  },
                  {
                    _id: 1,
                    img: ASSETS.BATATA_FRITA,
                    name: 'Batata Frita crocante',
                    description: 'Bem sequinha.',
                    price: 12.36
                  }
                ],
                paymentMethod: 'Dinheiro',
                total: 102,
                status: 0,
                note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
              }} />,

 */