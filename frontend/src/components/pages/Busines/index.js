import React from 'react';

import './styles.css';

import { ASSETS, TEMPLATES, UI } from '../../summary';

export default ({history}) => {
  return(
    <TEMPLATES.PAGE config = {{
      modal: {
        style: {
          display: 'block'
        },
        children: [
          <TEMPLATES.ROW key={0} config={{
            style:{
              height: '93%',
            },
            children: [
              <TEMPLATES.PANEL key={0} config={{
                style:{
                  width: '500px',
                  height: '90%',
                  margin: 'auto auto'
                },
                onSubmit: '',
                children: [
                  <UI.LOGO key={0} config={{
                    style:{
                      width: '85px',
                      height: '65px',
                      margin: '10px'
                    }
                  }}/>,
                  <h1 key={1}>Amplie seus negócios</h1>,
                  <p key={2}>
                    Conquiste milhares de clientes famintos pelo mundo todo, 
                    que querem saborear todas as delicias que você tem a oferecer. 
                  </p>,
                  <br key={3} />,

                  <UI.INPUT key={4} config={{
                    Placeholder: 'E-mail',
                    info: ''
                  }}/>,

                  <UI.INPUT key={5} config={{
                    Placeholder: 'Crie uma boa senha',
                    info: ''
                  }}/>,

                  <UI.BUTTON key={6} config={{
                    type: 'submit',
                    className:'primary-button-form',
                    text: 'Criar',
                  }}/>,

                  <br key={7} />,
                  
                  <span key={8}>
                    Ao continuar você concorda com os 
                    <UI.LINK config={{
                      text: 'Termos de Serviço',
                    }}/>
                    e com a 
                    <UI.LINK config={{
                      text: 'Politica de Privacidade',
                    }}/>  
                    do IBurger
                  </span>,

                  <UI.LINK key={9} config={{
                    className: 'btn-link btn-panel-link',
                    text: 'Já é cadastrado? Entrar',
                    to: '/login'
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
                  backgroundImage: `url(${ASSETS.BUSINES_1})`,
                  backgroundSize: 'cover' 
                },
              }}/>,
              <TEMPLATES.PANEL key={1} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.BUSINES_2})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={2} config={{
                style:{
                  height: '350px',
                  backgroundImage: `url(${ASSETS.BUSINES_3})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={3} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.BUSINES_4})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={4} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.BUSINES_8})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={5} config={{
                style:{
                  height: '300px',
                  backgroundImage: `url(${ASSETS.BUSINES_6})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={6} config={{
                style:{
                  height: '450px',
                  backgroundImage: `url(${ASSETS.BUSINES_7})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              
              <TEMPLATES.PANEL key={7} config={{
                style:{
                  height: '400px',
                  backgroundImage: `url(${ASSETS.BUSINES_5})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={8} config={{
                style:{
                  height: '150px',
                  backgroundImage: `url(${ASSETS.BUSINES_9})`,
                  backgroundSize: 'cover' 
                }
              }}/>,
              <TEMPLATES.PANEL key={9} config={{
                style:{
                  height: '200px',
                  backgroundImage: `url(${ASSETS.BUSINES_1})`,
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