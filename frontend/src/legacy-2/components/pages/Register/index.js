import React from 'react';

import './styles.css';

import { Navegar } from '../../../miscelaneous/util';

import { TEMPLATES } from '../../summary';

export default ({history}) => {
  return(
    <TEMPLATES.PAGE config = {{
      children: <TEMPLATES.LOGIN_FORM config = {{
        h1Text: 'Primeiro crie a sua conta!',
        h2Text: 'Você precisa apenas de um E-mail e password para cadastrar',
        button: {
          text: 'Criar uma conta',
          onClick: () => Navegar(history, '/dashboard')
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
    }} />
  );
};