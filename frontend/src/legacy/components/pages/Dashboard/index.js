import React, { useState } from 'react';
import { FiUser, FiDollarSign, FiBookOpen, FiFileText, FiLogOut} from 'react-icons/fi';

import { Navegar } from '../../services/util';

import './styles.css';

import Template from '../../components/Template';
import Tools from '../../components/Tools';
import List from '../../components/List';

import foto from '../../assets/X-Burguer-PNG-1009x1024.png';

import Input from '../../components/Input';
import Upload from '../../components/Upload';
import TextArea from '../../components/Textarea';
import Button from '../../components/Ui/Button';

export default ({history}) => {
  const [view, setView] = useState(2); //começa pela view pedidos

  const tools = <Tools 
    tools = {[
      {
        icon: <FiFileText size={24} className={`${view === 0 ? 'primmary': ''} btn-icon`} />,
        className: view === 0 ? 'primmary ' : '',
        text: 'Pedidos',
        onClick: () => setView(0)
      },
      {
        icon: <FiDollarSign size={24} className={`${view === 1 ? 'primmary': ''} btn-icon`} />,
        className: view === 1 ? 'primmary ' : '',
        text: 'Vendas',
        onClick: () => setView(1)
      },
      {
        icon: <FiBookOpen size={24} className={`${view === 2 ? 'primmary': ''} btn-icon`} />,
        className: view === 2 ? 'primmary ' : '',
        text: 'Cardápio',
        onClick: () => setView(2)
      },
      {
        icon: <FiUser size={24} className={`${view === 3 ? 'primmary': ''} btn-icon`} />,
        className: view === 3 ? 'primmary ' : '',
        text: 'Perfil',
        onClick: () => setView(3)
      },
      {
        icon: <FiLogOut size={24} className='btn-icon' />,
        className: '',
        text: 'Sair',
        onClick: () => Navegar(history, '/login')
      }
    ]}
  />;

/*
  const tools = <div className="tools">
    <button >
      <FiShoppingCart size={24} className='primmary btn-icon' />
      <span className='primmary' >Pedidos</span>
    </button>

    <button>
      <FiDollarSign size={24} className='btn-icon' />
      <span>Vendas</span>
    </button>

    <button>
      <FiBookOpen size={24} className='btn-icon' />
      <span>Cardápio</span>
    </button>

    <button>
      <FiUser size={24} className='btn-icon' />
      <span>Perfil</span>
    </button>
  </div>;
  */

  const listConfig = {
    summary: '',
    summaryText: `Você possui ${9} pedidos! Não deixe seus clientes esperando.`,
    list: [
      {
        _id:'0', 
        title: 'Teste de lista',
        img: { src: foto, alt:'Nome do Cliente' },
        footer: 'Aguardando...',
        content: <div className="list-item-content">
          <p>texto</p>
        </div>
      },
      {_id:'1', title: 'Teste de lista'},
      {_id:'2', title: 'Teste de lista'},
      {_id:'3', title: 'Teste de lista'},
      {_id:'4', title: 'Teste de lista'},
      {_id:'5', title: 'Teste de lista'},
      {_id:'6', title: 'Teste de lista'},
      {_id:'7', title: 'Teste de lista'},
      {_id:'8', title: 'Teste de lista'},
    ]
  }

  const listConfigMenu = {
    summary: '',
    summaryText: `Você possui ${9} pedidos! Não deixe seus clientes esperando.`,
    list: [
      {
        _id:'0', 
        title: 'Hamburguer de sirí',
        img: { src: foto, alt:'Hamburguer' },
        footer: 'Aguardando...',
        content: <div className="list-item-content">
          <p>Delicioso Hamburguer de sirí.</p>
          <p>texto: <span></span></p>
        </div>
      },
      {_id:'1', title: 'Teste de lista'},
      {_id:'2', title: 'Teste de lista'},
      {_id:'3', title: 'Teste de lista'},
      {_id:'4', title: 'Teste de lista'},
      {_id:'5', title: 'Teste de lista'},
      {_id:'6', title: 'Teste de lista'},
      {_id:'7', title: 'Teste de lista'},
      {_id:'8', title: 'Teste de lista'},
    ]
}

  return(
    <Template tools={tools} header='header-dashboard' >
      {
       view === 0 ?
        <List configs={listConfig} />
       : ''
      }
      {
        view === 1 ? 
          <h1>Vendas</h1>
        : ''
      }
      {
        view === 2 ? 
          <List configs={listConfigMenu} />
        : ''
      }
      {
        view === 3 ? 
          <div className="view-content">
            <ul>
              <li key={0} >
                <div className="col">
                  <h4>Usuário</h4>
                  <p>Informações pessoais do usuário.</p>
                  <p>Criado em: <span>10/04/2020</span></p>
                </div>
                <form action="" className="form-col">
                  <Upload label='Thumbnail' />
                  <Input configs={{
                      label: 'E-mail',
                      type: 'email',
                      value: 'email@gmail.com'
                    }} 
                  />
                  <Input configs={{
                      label: 'Password',
                      type: 'password',
                      placeholder: 'Senha forte',
                      value: ''
                    }} 
                  />
                  <Input configs={{
                      label: 'Nome Completo',
                      type: 'text',
                      placeholder: 'Digite seu nome completo',
                    }} 
                  />
                  <Input configs={{
                      label: 'Celular',
                      type: 'text',
                      placeholder: '(xx) xxxxx-xxxx'
                    }} 
                  />
                  <button className="primary-button">Confirmar</button>
                </form>
              </li>
              <li key={1} >
                <div className="col">
                  <h4>Comercial</h4>
                  <p>Informações comerciais.</p>
                  <p>Como seus clientes veram você no aplicativo.</p>
                </div>
                <form action="" className="form-col">
                  <Upload label='Logo'/>
                  <Upload label='Banner' banner={true} />
                  <Input configs={{
                      label: 'Expediente',
                      type: 'text',
                      placeholder: 'Seg a Sex - 08:00 as 22:00',
                    }} 
                  />
                  <TextArea  configs={{
                    label: 'Descrição',
                    placeholder: 'Uma descrição sensacional do seu negócio!'
                  }}/>

                  <button className="primary-button">Confirmar</button>
                </form>
              </li>
              <li key={2} >
                <div className="col">
                  <h4>Endereço</h4>
                  <p>Endereço do estabelecimento.</p>
                </div>
                <form action="" className="form-col">
                  <Input configs={{
                      label: 'Cep',
                      type: 'text',
                      placeholder: '00000-000',
                    }} 
                  />
                  <Input configs={{
                      label: 'Logradouro',
                      type: 'text',
                      placeholder: 'Av. Almirante Barroso',
                    }} 
                  />
                  <Input configs={{
                      label: 'Complemento',
                      type: 'text',
                      placeholder: 'Prox. a praça General Teodoro',
                    }} 
                  />
                  <Input configs={{
                      label: 'Bairro',
                      type: 'text',
                      placeholder: 'Coqueiro',
                    }} 
                  />
                  <Input configs={{
                      label: 'Cidade',
                      type: 'text',
                      placeholder: 'Belém',
                    }} 
                  />
                  <Input configs={{
                      label: 'UF',
                      type: 'text',
                      placeholder: 'Estado',
                    }} 
                  />
                  <Input configs={{
                      label: 'Número',
                      type: 'text',
                      placeholder: '000',
                    }} 
                  />
                  <Button config={{
                    className: 'primary-button',
                    text: 'Confirmar'
                  }} />
                  <button className="primary-button">Confirmar</button>
                </form>
              </li>
              <li key={3} >
                <div className="col">
                  <h4>Outras Informações</h4>
                  <p>Configure quais métodos de recebimento você aceita e taxa de entrega.</p>
                  <p>Tempo de médio Entrega: <span>0:45 min</span></p>
                  <p>Avaliação: <span>4.5</span></p>
                </div>
                <form action="" className="form-col">
                  <Input configs={{
                      label: 'Formas de pagamento',
                      type: 'text',
                      placeholder: 'Dinheiro, Cartão',
                    }} 
                  />
                  <Input configs={{
                      label: 'Taxa de Entrega',
                      type: 'number',
                      placeholder: 'R$ 15,99',
                    }} 
                  />
                  <button className="primary-button">Confirmar</button>
                </form>
              </li>
              <li key={4} style={{ border: 'none' }}>
                <div className="col">
                  <h4>Desativar a Conta</h4>
                  <p>Desative a sua conta para esconder ela das buscas.</p>
                </div>
                <form action="" className="form-col">
                  <button className="secondary-button">Desativar</button>
                </form>
              </li>
            </ul>
          </div>
        : ''
      }
    </Template>
  );
};

/**
 * 
 * <div className="perfil">
            <form action="">
              <h3>Editar Dados</h3>
              
              <Upload />

              <Input configs={{
                  label: 'Nome Completo',
                  type: 'text',
                  placeholder: 'Digite seu nome completo'
                }} 
              />
              <Input configs={{
                  label: 'Celular',
                  type: 'text',
                  placeholder: '(xx) xxxxx-xxxx'
                }} 
              />
              <button className="primary-button">
                Confirmar
              </button>
            </form>
          </div>
 */