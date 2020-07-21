import React from 'react';

import './styles.css';

//import { Navegar } from '../../util';

import { ASSETS, TEMPLATES, UI } from '../../summary';

export default ({history}) => {
  return(
    <TEMPLATES.PAGE config = {{
      modal: {
        style: {
          display:'block'
        },
        children: [
          <TEMPLATES.ROW key={0} config={{
            style:{
              height: '93%',
            },
            children: [
              <TEMPLATES.PANEL key={0} config={{
                style:{
                  width: '600px',
                  height: '450px',
                  margin: 'auto auto'
                },
                children: [
                  <UI.LOGO config={{
                    style:{
                      width: '85px',
                      height: '65px',
                      margin: '10px'
                    }
                  }}/>,
                  <h1>Bem vindo(a) ao IBurger</h1>,
                  <p>Descubra hamburguerias e lanchonetes perto de você</p>,
                  <UI.LINK config={{
                    className:'btn-link btn-primary-link',
                    text: 'Entrar',
                    to: '/login'
                  }}/>,
                  <UI.LINK config={{
                    className: 'btn-link btn-secondary-link',
                    text: 'Criar conta',
                    to: '/register'
                  }}/>,
                  <UI.LINK config={{
                    className: 'btn-link btn-panel-link',
                    text: 'Criar uma conta empresarial',
                    to: '/busines'
                  }}/>,
                ]
              }}/>
            ], 
          }} />,
          <TEMPLATES.ROW key={1} config={{
            style:{
              height: '7%',
              alignItems: 'center',
              justifyContent: 'center'

            },
            children: [
              <TEMPLATES.LINKS key={0} config={{
                children:[
                  <UI.LINK key={0} config={{to: '/', text: 'Sobre o IBurguer' }} />,
                  <UI.LINK key={1} config={{to: '/', text: 'Empresas' }} />,
                  <UI.LINK key={2} config={{to: '/', text: 'Termos de Serviço' }} />,
                  <UI.LINK key={3} config={{to: '/', text: 'Politica de Privacidade' }} />,
                  <UI.LINK key={4} config={{to: '/', text: 'Ajuda' }} />,
                  <UI.LINK key={5} config={{to: '/', text: 'App Para iPhone' }} />,
                  <UI.LINK key={6} config={{to: '/', text: 'App Para Android' }} />,
                  <UI.LINK key={7} config={{to: '/', text: 'Carreiras' }} />,
                  <UI.LINK key={8} config={{to: '/', text: 'Entregador' }} />,
                  <UI.LINK key={9} config={{to: '/', text: 'Restaurantes' }} />,
                ]
              }} />
            ]
          }} />
        ],
      },
      content:{
        children: [
          <TEMPLATES.LIST key={0} config={{
            style: {},
            children: [
              <TEMPLATES.PANEL key={0} config={{
                style:{
                  height: '450px',
                  backgroundImage: `url(${ASSETS.HAMBURGUER_4})`,
                  backgroundSize: 'cover' 
                },
              }}/>,
              <TEMPLATES.PANEL key={1} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.BATATA_FRITA})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={2} config={{
                style:{
                  height: '350px',
                  backgroundImage: `url(${ASSETS.CACHORRO_QUENTE})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={3} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.CHUPCAKE})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={4} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.ARTESANAL})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={5} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.HAMBURGUERS})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={6} config={{
                style:{
                  height: '450px',
                  backgroundImage: `url(${ASSETS.COCA_COLA})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={7} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.HAMBURGUERS_2})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={8} config={{
                style:{
                  height: '150px',
                  backgroundImage: `url(${ASSETS.BURGUER_IMG})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={9} config={{
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