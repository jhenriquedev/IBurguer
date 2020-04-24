import React from 'react';

//import { FiInfo } from 'react-icons/fi';

import './styles.css';


//Components
import Template from '../../components/Template';
import Form from '../../components/Form';

export default props => {

  return(
    <Template>
      <Form configs = {{
        h1Text: 'Primeiro crie a sua conta!',
        h2Text: 'Você precisa apenas de um E-mail e password para cadastrar',
        button: {
          text: 'Criar uma conta'
        },
        a:{
          text: 'Já sou cadastrado!',
          href: '/login'
        },
        fields : [
          { label:'E-mail', type:'e-mail', placeholder:'user@email.com', info:'Mensagem de ajuda'},
          { label:'Password', type:'password', placeholder:'Senha forte', info:'Mensagem de ajuda' }
        ]
      }}
      />
    </Template>
  );
};