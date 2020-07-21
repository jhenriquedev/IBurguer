import React from 'react';

import './styles.css';

import { FiSearch, FiBell, FiMessageCircle, FiUser, FiChevronDown } from 'react-icons/fi';

import { Navegar } from '../../util';

import { ASSETS, TEMPLATES, UI, CONFIG } from '../../summary';

export default ({history}) => {

  return(
    <TEMPLATES.PAGE config = {{
      modal: {
        style: {
          display: 'none'
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
          <UI.BUTTON key={0} config={{
            className: 'btn-logo',
            icon: <img src={ASSETS.LOGO_IMG} />,
            onClick: () => Navegar(history, '/dashboard')
          }}/>,
          <UI.BUTTON key={1} config={{
            className: 'btn-header',
            text: 'Pedidos',
            onClick: () => Navegar(history, '/request')
          }} />,
          <UI.BUTTON key={2} config={{
            className: 'btn-header',
            text: 'Promoções'
          }} />,
          <UI.BUTTON key={3} config={{
            className: 'btn-header',
            text: 'Cardápio',
            onClick: () => Navegar(history, '/menu')
          }} />,
          <UI.INPUT key={4} config={{
            className: 'input-box-header',
            placeholder: 'Pesquisar',
            icon: <FiSearch size={24} color='#4b5558' />,
          }}/>,
          <UI.BUTTON key={5} config={{
            className: 'btn-header',
            icon: <FiBell size={24} color='#4b5558' />,
          }} />,
          <UI.BUTTON key={6} config={{
            className: 'btn-header',
            icon: <FiMessageCircle size={24} color='#4b5558' />,
          }} />,
          <UI.BUTTON key={7} config={{
            className: 'btn-header',
            icon: CONFIG.USER_AVATAR ? CONFIG.USER_AVATAR : <FiUser size={24} color='#4b5558' />,
          }} />,
          <UI.BUTTON key={8} config={{
            className: 'btn-header-sm',
            icon: <FiChevronDown size={24} color='#4b5558' />,
          }} />,
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
            children: [
              <TEMPLATES.PANEL key={1} config={{
                style:{
                  height: '450px',
                  backgroundImage: `url(${ASSETS.HAMBURGUER_4})`,
                  backgroundSize: 'cover' 
                },
              }}/>,
              <TEMPLATES.PANEL key={2} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.BATATA_FRITA})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={3} config={{
                style:{
                  height: '350px',
                  backgroundImage: `url(${ASSETS.CACHORRO_QUENTE})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={4} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.CHUPCAKE})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={5} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.ARTESANAL})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={6} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.HAMBURGUERS})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={7} config={{
                style:{
                  height: '450px',
                  backgroundImage: `url(${ASSETS.COCA_COLA})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={8} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.HAMBURGUERS_2})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={9} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.BURGUER_IMG})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={10} config={{
                style:{
                  height: '200px',
                  backgroundImage: `url(${ASSETS.CHURRASCO})`,
                  backgroundSize: 'cover'
                }
              }}/>,
            ]
          }} />
        ]
      }
    }} />
  );
};