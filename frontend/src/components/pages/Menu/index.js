import React, { useState } from 'react';

import './styles.css';

import { ASSETS, TEMPLATES, UI } from '../../summary';

import { FiPlusCircle, FiPause } from 'react-icons/fi';

export default ({history}) => {
  const [modalDisplay, setModalDisplay] = useState('none');

  return(
    <TEMPLATES.PAGE config = {{
      modal: {
        style: {
          display: modalDisplay
        },
        onClick: () => setModalDisplay('none'),
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
                    }
                  }} />,
                  <TEMPLATES.ROW key={1} config={{
                    style: {
                      height: '85%',
                    }
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
                <UI.BUTTON key={0} config={{
                  className: "btn-header",
                  text: 'Hambúrgueres',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={0} config={{
                  className: "btn-header",
                  text: 'Milk shakes',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={0} config={{
                  className: "btn-header",
                  text: 'Bebidas',
                  onClick: () => setModalDisplay('block')
                }} />,
                <UI.BUTTON key={0} config={{
                  className: "btn-header",
                  icon: <FiPlusCircle size={24} color="#4b5558" />,
                  onClick: () => setModalDisplay('block')
                }} />,
              ]
            },
            children: [
              <TEMPLATES.PANEL key={0} config={{
                style:{
                  height: '400px',
                  padding: '0',

                  border: '1px solid #000'
                },
                children: [
                  
                ]
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