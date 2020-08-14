import React, { useState, useEffect } from "react";

import "./styles.css";

import { UI, ASSETS, CONFIG, TEMPLATES } from "../../summary";

import { Navegar, Logout, getSession } from '../../util';

import { 
  FiSearch, 
  FiBell, 
  FiMessageCircle, 
  FiUser, 
  FiChevronDown,
  FiX ,
  FiXCircle
} from 'react-icons/fi';

export default props => {
  const { 
    history, 
    page=1,
    search 
  } = props.config;

  const [states, setStates] = useState({
    display: 'none',
    right: '0px',
    idMenu: 0,
    modal: 'none'
  });

  const [user, setUser] = useState({});

  //const user = getSession();

  useEffect(()=>{
    let session = getSession();

    if(session){ 
      setUser(session);
    }else{

      setUser({...user, error: true});

      setStates({...states, modal: 'flex'});

      //Navegar(history, '/');
    }


  }, []);

  
  const alertLogin = <>
    <TEMPLATES.PANEL config={{
      style: {
        margin: '100px auto',
        height: '37%',
        width: '400px',
        padding: '60px 30px'
      },
      children: <>
        <h1>Problema no login</h1>
        <p style={{marginTop: '10px'}}>Você precisa efetuar o login para acessar essa tela.</p>
        <UI.BUTTON config={{
          text: 'Ir para o login',
          onClick: () => Navegar(history, '/')
        }}/>
      </>
    }}/>
  </>;


  const menus = [
    <>
      <h6>Mais opções</h6>
      <UI.BUTTON config={{
        className: 'secondary-button',
        text: 'Sair',
        onClick: () => Logout(history)
      }}/>
    </>,
    <>
      <h6>{user.name ? user.name : 'Olá, seja bem vindo ao IBurguer'}</h6>
      <UI.BUTTON config={{
        className: 'secondary-button',
        text: 'Editar Perfil',
        onClick: () => setStates({...states, modal: 'flex'})
      }}/>
    </>,
  ];


  return (
    <>
      <UI.BUTTON
        key={0}
        config={{
          className: "btn-logo",
          icon: <img src={ASSETS.LOGO_IMG} />,
          onClick: () => Navegar(history, "/dashboard"),
        }}
      />
      <UI.BUTTON
        key={1}
        config={{
          className: page === 1 ? 'btn-header-active' : "btn-header",
          text: "Pedidos",
          onClick: () => Navegar(history, "/requests"),
        }}
      />
      <UI.BUTTON
        key={2}
        config={{
          className: page === 2 ? 'btn-header-active' : "btn-header",
          text: "Promoções",
          onClick: () => Navegar(history, "/promotions"),
        }}
      />
      <UI.BUTTON
        key={3}
        config={{
          className: page === 3 ? "btn-header-active" : 'btn-header',
          text: "Cardápio",
          onClick: () => Navegar(history, "/menu"),
        }}
      />
      <UI.INPUT
        key={4}
        config={{
          className: "input-box-header",
          placeholder: search ? search.placeholder : "Pesquisar",
          icon: <FiSearch size={24} color="#4b5558" />,
          onChange: search ? search.onChange : '',
          value: search ? search.value : ''
        }}
      />
      <UI.BUTTON
        key={5}
        config={{
          className: "btn-header",
          icon: <FiBell size={24} color="#4b5558" />,

          onClick: () => setStates({
            ...states, 
            display: states.display === 'none' ? 'flex' : '',
            right: '200px'
          })
        }}
      />
      <UI.BUTTON
        key={6}
        config={{
          className: "btn-header",
          icon: <FiMessageCircle size={24} color="#4b5558" />,

          onClick: () => setStates({
            ...states, 
            display: states.display === 'none' ? 'flex' : '',
            right: '136px'
          })
        }}
      />
      <UI.BUTTON
        key={7}
        config={{
          className: "btn-header",
          icon: CONFIG.USER_AVATAR ? 
            CONFIG.USER_AVATAR
          : 
            <FiUser size={24} color="#4b5558" />
          ,

          onClick: () => setStates({
            ...states, 
            display: states.display === 'none' ? 'flex' : '',
            right: '68px',
            idMenu: 1
          })
        }}
      />
      <UI.BUTTON
        key={8}
        config={{
          className: "btn-header-sm",
          icon: <FiChevronDown size={24} color="#4b5558" />,
          onClick: () => setStates({
            ...states, 
            display: states.display === 'none' ? 'flex' : '',
            right: '15px',
            idMenu: 0
          })
        }}
      />


      <div className="menu-app" style={{
        display: states.display
      }}>
        <div className="menu-aba" style={{
          right: states.right
        }}></div>
        
        <div className="menu-app-header">
          <UI.BUTTON
            config={{
            className: "btn-header-sm",
            icon: <FiX size={24} color="#4b5558" />,
            onClick: () => setStates({
              ...states, 
              display: 'none',
              idMenu: 0
            })
          }}
          />
        </div>

        <div className="menu-app-content">
          {
            menus[states.idMenu]
          }
        </div>
      </div>

      <TEMPLATES.MODAL config={{
        style: {
          display: 'flex' //states.modal,
        },
        children: [
          <TEMPLATES.ROW key={0} config={{
            style:{
              height: '100%'
            },
            children: user.error ? alertLogin :
            <>
              <TEMPLATES.PANEL config={{
                style:{
                  margin: 'auto auto',
                  height: '80%',
                  width: '400px',
                  padding: '0'
                },
                children: <>
                  <TEMPLATES.ROW config={{
                    style:{
                      height: '10%',
                      justifyContent: 'flex-end',
                      paddingTop: '10px',
                      marginBottom: '5px'
                    },
                    children: <>
                      <UI.BUTTON key={0} config={{
                        className: "btn-header",
                        icon: <FiXCircle size={24} color="#4b5558" />,
                        onClick: () => setStates({...states, modal:'none'})
                      }} />
                    </>
                  }} />

                  <h1 style={{margin: '20px' }}>Editar Perfil</h1>
                  <UI.UPLOAD config={{
                    className: 'upload-perfil',
                    legend: 'Alterar foto',
                    img: ASSETS.ARTESANAL
                  }}/>
                  <TEMPLATES.ROW config={{
                    style: {
                      padding: '20px'
                    },
                    children: <>
                      <UI.INPUT config={{
                        id: 'title',
                        className: 'input-box-body',
                        placeholder: 'Adicione um título',
                      }}/>
                    </>
                  }}/>
                  

                </>
              }}/>
            </>
            /*
            [
              <TEMPLATES.PANEL key={0} config={{
                style:{
                  margin: 'auto auto',
                  height: '80%',
                  width: '80%',
                  padding: '30px'
                },
                children:[
                  <TEMPLATES.ROW key={0} config={{
                    style: {
                      height: '15%',
                      justifyContent: 'flex-end',
                    },
                    children: [
                      <UI.BUTTON key={0} config={{
                        className: "btn-header",
                        icon: <FiXCircle size={24} color="#4b5558" />,
                        onClick: () => setStates({...states, modal:'none'})
                      }} />,
                    ]
                  }} />,
                  <TEMPLATES.ROW key={1} config={{
                    style: {
                      height: '85%',
                      padding: '40px',
                      paddingTop: '0px'
                    },
                    children: 
                    <>
                      <TEMPLATES.ROW config={{
                        style: {
                        height: '20%',
                        padding: '40px',
                        paddingTop: '0px'
                        },
                        children: <>
                          <h3>Editar Perfil</h3>
                          <p>As informações abaixo permitem que as pessoas conheçam você</p>
                        </>,
                      }} />
                    </>
                  }}/>
                ]
              }}/>
            ]
            */
          }}/>
        ]
      }}/>
      
    </>
  );
};
