import React from 'react';

//import { FiInfo } from 'react-icons/fi';

import { Navegar } from '../../services/util';

import './styles.css';

//Components
import Template from '../../components/Template';
import Form from '../../components/Form';

export default ({history}) => {
  return(
    <Template>
      <Form configs = {{
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
      }}
      />
    </Template>
  );
};