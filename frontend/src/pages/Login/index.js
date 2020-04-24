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
        h1Text: 'Falta pouco para matar a sua fome!',
        h2Text: 'Informe seu E-mail e password para continuar',
        button: {
          text: 'Continuar'
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