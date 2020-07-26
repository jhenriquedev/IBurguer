import React, { useState } from 'react';

import './styles.css';

import { ASSETS, TEMPLATES, UI } from '../../summary';

import { FiPlusCircle, FiXCircle } from 'react-icons/fi';

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
            page: 2
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
              title: 'Seja bem vindo ao seu cardápio!',
              subTitle: 'Inclua novas receitas deliciosas e conquiste novos clientes!',
              tools: [
                <UI.BUTTON key={0} config={{
                  className: "btn-header-active",
                  text: 'Todos',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={1} config={{
                  className: "btn-header",
                  text: 'Hambúrgueres',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={2} config={{
                  className: "btn-header",
                  text: 'Milk shakes',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={3} config={{
                  className: "btn-header",
                  text: 'Bebidas',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={4} config={{
                  className: "btn-header",
                  text: 'Combos',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={5} config={{
                  className: "btn-header",
                  icon: <FiPlusCircle size={24} color="#4b5558" />,
                  onClick: () => setModalDisplay('block')
                }} />,
              ]
            },
            children: [
              <TEMPLATES.PRODUCT key={0} config={{
                img: ASSETS.BATATA_FRITA,
                title: 'Batata Frita',
                price: 25.90,
                promotionalPrice: 15.90,
                evaluation : 4.5,
                salesCount: 250,
                preparation: 25,
                description: 'Deliciosa batata frita, bem sequinha feita com ervas naturais e expeciarias do nordeste.'
              }}/>,
              <TEMPLATES.PRODUCT key={20} config={{
                img: ASSETS.CACHORRO_QUENTE,
                title: 'Cachorro Quente',
                price: 5.99,
                evaluation : 2.5,
                salesCount: 870,
                preparation: 30
              }}/>,
              <TEMPLATES.PRODUCT key={0} config={{
                img: ASSETS.ARTESANAL,
                title: 'Burguer artesanal de Picanha',
                price: 25.90,
                evaluation : 4.5,
                salesCount: 250,
                preparation: 25
              }}/>,
              <TEMPLATES.PRODUCT key={0} config={{
                img: ASSETS.CHUPCAKE,
                title: 'Cupcake',
                price: 25.90,
                evaluation : 4.5,
                salesCount: 250,
                preparation: 25
              }}/>,
              <TEMPLATES.PRODUCT key={0} config={{
                img: ASSETS.CHURRASCO,
                title: 'Churrasco suculento de cupim',
                price: 60.50,
                evaluation : 5,
                salesCount: 763,
                preparation: 45
              }}/>,
              <TEMPLATES.PANEL key={1} config={{
                style:{
                  height: '400px',

                  border: '1px solid #000'
                },
              }}/>,
              <TEMPLATES.PANEL key={2} config={{
                style:{
                  height: '400px',

                  border: '1px solid #000'
                },
              }}/>,
              <TEMPLATES.PANEL key={3} config={{
                style:{
                  height: '400px',

                  border: '1px solid #000'
                },
              }}/>
              
            ]
          }} />
        ]
      }
    }} />
  );
};