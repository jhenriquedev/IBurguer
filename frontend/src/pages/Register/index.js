import React, {useState} from 'react';
//import { useHistory } from 'react-router-dom';

import './styles.css';

import { ASSETS, TEMPLATES, UI } from '../../summary';

import { Navegar, API, Login } from '../../util';

export default ({history}) => {
  const [form, setForm] = useState({});

  //const history = useHistory(); //permite efetuar a navegação sem necessidade do link

  const handleRegister = async event => {
    event.preventDefault();

    try{
      const resp = await API.post('/users/store', form);

      //console.log(resp.data.error);

      //alert('Cadastrado com sucesso!');
      alert(resp.data.error || resp.data.msg);
      if(resp.data.msg){

        Login(history, resp.data);

        //cria uma sessão
        //localStorage.setItem('user', JSON.stringify(resp.data));

        //Navegar(history, '/dashboard'); //redireciona para a tela inicial
      }

    }catch(error){
      alert(`Erro no cadastro. Tente novamente...`);
    };

  };

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
                  height: '90%',
                  margin: 'auto auto'
                },
                onSubmit: handleRegister,
                children: [
                  <UI.LOGO key={0} config={{
                    style:{
                      width: '85px',
                      height: '65px',
                      margin: '10px'
                    }
                  }}/>,
                  <h1 key={1}>Bem vindo(a) ao IBurger</h1>,
                  <p key={2}>Descubra hamburguerias e lanchonetes perto de você</p>,
                  <br key={3} />,

                  <UI.INPUT key={4} config={{
                    Placeholder: 'E-mail',
                    info: '',
                    type: 'email',
                    maxLength: '50', 
                    minLength: '7', 
                    required: true,
                    autoFocus: true,
                    value: form.email, 
                    onChange: event => setForm({...form, email: event.target.value })
                  }}/>,

                  <UI.INPUT key={5} config={{
                    Placeholder: 'Crie uma boa senha',
                    info: '',
                    type: 'password',
                    maxLength: '16', 
                    minLength: '6',
                    required: true,
                    value: form.password, 
                    onChange: event => setForm({...form, password: event.target.value })
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
                  <UI.LINK key={10} config={{
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