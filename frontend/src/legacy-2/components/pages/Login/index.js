import React from 'react';

import './styles.css';

import { Navegar } from '../../../miscelaneous/util';

import { TEMPLATES } from '../../summary';

export default ({history}) => {
  return(
    <TEMPLATES.PAGE config = {{
      children: <TEMPLATES.LOGIN_FORM config={{
        h1Text: 'Falta pouco para matar a sua fome!',
        h2Text: 'Informe seu E-mail e password para continuar',
        button: {
          text: 'Continuar',
          onClick: () => Navegar(history, '/dashboard')
        },
        a:{
          text: 'Cadastre-se agora!',
          href: '/register'
        },
        fields : [
          { label:'E-mail', type:'e-mail', placeholder:'user@email.com', info:'Mensagem de ajuda'},
          { label:'Password', type:'password', placeholder:'Senha forte', info:'Mensagem de ajuda' }
        ]
      }} />
    }} />
  );
};