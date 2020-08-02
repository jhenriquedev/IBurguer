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
                  padding: '30px'
                },
                children: [
                  <TEMPLATES.ROW key={0} config={{
                    style: {
                      height: '15%',
                      justifyContent: 'flex-end',
                    },
                    children: [
                      <UI.BUTTON key={0} config={{
                        className: "btn-header",
                        icon: <FiXCircle size={24} color="#4b5558" />,
                        onClick: () => setModalDisplay('none')
                      }} />,
                    ]
                  }} />,
                  <TEMPLATES.ROW key={1} config={{
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
                          <TEMPLATES.ROW key={0} config={{
                            style: {
                              width: '40%',
                              height: '100%',
                              borderRadius: '8px',
                              background: 'rgba(196, 196, 196,.30)',
                              padding: '15px'
                            },
                            children: [
                              <UI.UPLOAD key={0} config={{

                              }} />
                            ]
                          }} />,
                          <TEMPLATES.ROW key={1} config={{
                            style: {
                              width: '60%',
                              height: '100%',
                              paddingLeft: '40px'
                            },
                            children: [
                              <UI.INPUT key={0} config={{
                                id: 'title',
                                className: 'input-box-title',
                                placeholder: 'Adicione um título',
                              }}/>,
                              <UI.INPUT key={1} config={{
                                id: 'description',
                                className: 'input-box-body',
                                placeholder: 'Descreva seu prato',
                              }}/>,
                              <UI.INPUT key={2} config={{
                                id: 'price',
                                style: {
                                  width: '50%',
                                },
                                className: 'input-box-body',
                                placeholder: 'Preço'
                              }}/>,
                              <UI.BUTTON key={3} config={{
                                text: 'Salvar'
                              }}/>
                            ]
                          }} />
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
            page: 3
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
                evaluation : 4.5,
                salesCount: 250,
                preparation: 25
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
              
            ]
          }} />
        ]
      }
    }} />
  );
};