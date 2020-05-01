import React, { useState } from "react";
import {
  FiUser,
  FiDollarSign,
  FiBookOpen,
  FiFileText,
  FiLogOut,
} from "react-icons/fi";

import "./styles.css";

import { Navegar } from "../../../miscelaneous/util";

import { TEMPLATES, ASSETS, UI } from "../../summary";

export default ({ history }) => {
  const [view, setView] = useState(3); //começa pela view pedidos

  const tools = (
    <TEMPLATES.TOOLS
      config={[
        {
          icon: (
            <FiFileText
              size={24}
              className={`${view === 0 ? "primmary" : ""} btn-icon`}
            />
          ),
          className: view === 0 ? "primmary " : "",
          text: "Pedidos",
          onClick: () => setView(0),
        },
        {
          icon: (
            <FiDollarSign
              size={24}
              className={`${view === 1 ? "primmary" : ""} btn-icon`}
            />
          ),
          className: view === 1 ? "primmary " : "",
          text: "Vendas",
          onClick: () => setView(1),
        },
        {
          icon: (
            <FiBookOpen
              size={24}
              className={`${view === 2 ? "primmary" : ""} btn-icon`}
            />
          ),
          className: view === 2 ? "primmary " : "",
          text: "Cardápio",
          onClick: () => setView(2),
        },
        {
          icon: (
            <FiUser
              size={24}
              className={`${view === 3 ? "primmary" : ""} btn-icon`}
            />
          ),
          className: view === 3 ? "primmary " : "",
          text: "Perfil",
          onClick: () => setView(3),
        },
        {
          icon: <FiLogOut size={24} className="btn-icon" />,
          className: "",
          text: "Sair",
          onClick: () => Navegar(history, "/login"),
        },
      ]}
    />
  );

  const listConfig = {
    summary: "",
    summaryText: `Você possui ${9} pedidos! Não deixe seus clientes esperando.`,
    list: [
      {
        _id: "0",
        title: "Teste de lista",
        img: { src: ASSETS.FOTO, alt: "Nome do Cliente" },
        footer: "Aguardando...",
        content: (
          <div className="list-item-content">
            <p>texto</p>
          </div>
        ),
      },
      { _id: "1", title: "Teste de lista" },
      { _id: "2", title: "Teste de lista" },
      { _id: "3", title: "Teste de lista" },
      { _id: "4", title: "Teste de lista" },
      { _id: "5", title: "Teste de lista" },
      { _id: "6", title: "Teste de lista" },
      { _id: "7", title: "Teste de lista" },
      { _id: "8", title: "Teste de lista" },
    ],
  };

  const listConfigMenu = {
    summary: "",
    summaryText: `Você possui ${9} pedidos! Não deixe seus clientes esperando.`,
    list: [
      {
        _id: "0",
        title: "Hamburguer de sirí",
        img: { src: ASSETS.FOTO, alt: "Hamburguer" },
        footer: "Aguardando...",
        content: (
          <div className="list-item-content">
            <p>Delicioso Hamburguer de sirí.</p>
            <p>
              texto: <span></span>
            </p>
          </div>
        ),
      },
      { _id: "1", title: "Teste de lista" },
      { _id: "2", title: "Teste de lista" },
      { _id: "3", title: "Teste de lista" },
      { _id: "4", title: "Teste de lista" },
      { _id: "5", title: "Teste de lista" },
      { _id: "6", title: "Teste de lista" },
      { _id: "7", title: "Teste de lista" },
      { _id: "8", title: "Teste de lista" },
    ],
  };

  const perfilConfig = [
    {
      _id: 0,
      children: [
        <TEMPLATES.VIEW_ITEM
          key={0}
          config={{
            title: "Usuário",
            children: [
              <p key={0}> Informações pessoais e de login</p>,
              <p key={1}>
                {" "}
                Criado em: <span>10/04/2020</span>.
              </p>,
            ],
          }}
        />,
        <TEMPLATES.VIEW_FORM
          key={1}
          config={{
            children: [
              <UI.UPLOAD key={0} config={{ label: "Thumbnail" }} />,
              <UI.INPUT
                key={1}
                config={{
                  type: "email",
                  label: "E-mail",
                  value: "email@gmail.com",
                }}
              />,
              <UI.INPUT
                key={2}
                config={{
                  type: "password",
                  label: "Password",
                  placeholder: "Senha forte",
                  value: "",
                }}
              />,
              <UI.INPUT
                key={3}
                config={{
                  type: "text",
                  label: "Nome Completo",
                  placeholder: "Digite seu nome completo",
                }}
              />,
              <UI.INPUT
                key={4}
                config={{
                  type: "text",
                  label: "Celular",
                  placeholder: "(xx) xxxxx-xxxx",
                }}
              />,
            ],
          }}
        />,
      ],
    },
    {
      _id: 1,
      children: [
        <TEMPLATES.VIEW_ITEM
          key={0}
          config={{
            title: "Comercial",
            children: [
              <p key={0}> Informações comerciais</p>,
              <p key={1}> Informações úteis aos seus clientes.</p>,
            ],
          }}
        />,
        <TEMPLATES.VIEW_FORM
          key={1}
          config={{
            children: [
              <UI.UPLOAD key={0} config={{ label: "Logo" }} />,
              <UI.UPLOAD key={1} config={{ label: "Banner", banner: true }} />,
              <UI.INPUT
                key={2}
                config={{
                  type: "text",
                  label: "Expediente",
                  placeholder: "Seg a Sex - 08:00 as 22:00",
                }}
              />,
              <UI.TEXTAREA
                key={3}
                config={{
                  label: "Descrição",
                  placeholder: "Uma descrição sensacional do seu negócio!",
                }}
              />,
            ],
          }}
        />,
      ],
    },
    {
      _id: 2,
      children: [
        <TEMPLATES.VIEW_ITEM
          key={0}
          config={{
            title: "Endereço",
            children: [
              <p key={0}>Endereço do estabelecimento</p>,
              <p key={1}>
                O endereço é útil para você ser encontrado nas buscas por
                região.
              </p>,
            ],
          }}
        />,
        <TEMPLATES.VIEW_FORM
          key={1}
          config={{
            children: [
              <UI.INPUT
                key={0}
                config={{
                  label: "Cep",
                  type: "text",
                  placeholder: "00000-000",
                }}
              />,
              <UI.INPUT
                key={1}
                config={{
                  label: "Logradouro",
                  type: "text",
                  placeholder: "Av. Almirante Barroso",
                }}
              />,
              <UI.INPUT
                key={2}
                config={{
                  label: "Complemento",
                  type: "text",
                  placeholder: "Prox. a praça General Teodoro",
                }}
              />,
              <UI.INPUT
                key={3}
                config={{
                  label: "Bairro",
                  type: "text",
                  placeholder: "Coqueiro",
                }}
              />,
              <UI.INPUT
                key={4}
                config={{
                  label: "Cidade",
                  type: "text",
                  placeholder: "Belém",
                }}
              />,
              <UI.INPUT
                key={5}
                config={{
                  label: "UF",
                  type: "text",
                  placeholder: "Estado",
                }}
              />,
              <UI.INPUT
                key={6}
                config={{
                  label: "Número",
                  type: "text",
                  placeholder: "000",
                }}
              />,
            ],
          }}
        />,
      ],
    },
    {
      _id: 3,
      children: [
        <TEMPLATES.VIEW_ITEM
          key={0}
          config={{
            title: "Outras Informações",
            children: [
              <p key={0}>
                Configure quais métodos de recebimento você aceita e taxa de
                entrega
              </p>,
              <p key={1}>
                Tempo de médio Entrega: <span>0:45 min</span>
              </p>,
              <p key={2}>
                Avaliação: <span>4.5</span>
              </p>
            ],
          }}
        />,
        <TEMPLATES.VIEW_FORM 
          key={1}
          config={{
            children:[
              <UI.INPUT
                key={0}
                config={{
                  label: "Formas de pagamento",
                  type: "text",
                  placeholder: "Dinheiro, Cartão"
                }}
              />,
              <UI.INPUT
                key={1}
                config={{
                  label: "Taxa de Entrega",
                  type: "text",
                  placeholder: "R$ 15,99"
                }}
              />,
            ]
          }}
        />
      ]
    },
    { 
      _id: 4, 
      style: { border: "none" }, 
      children: [
        <TEMPLATES.VIEW_ITEM
          key={0}
          config={{
            title: "Desativar a conta",
            children: [
              <p key={0}>
                Desative sua conta para não aparecer nas buscas
              </p>
            ],
          }}
        />,
        <TEMPLATES.VIEW_FORM
          key={1}
          config={{
            buttonText:'Desativar',
            buttonClassName: 'secondary-button'
          }}
        />
      ]
    }
  ];

  return (
    <TEMPLATES.PAGE
      config={{
        classNameHeader: "header-dashboard",
        classsNameBody: "content-dashboard",
        tools: tools,
        children: [
          view === 0 ? <TEMPLATES.LIST key={0} config={listConfig} /> : "",
          view === 1 ? <h1>Vendas</h1> : "",
          view === 2 ? <TEMPLATES.LIST key={2} config={listConfigMenu} /> : "",
          view === 3 ? <TEMPLATES.VIEW key={3} config={perfilConfig} /> : "",
        ],
      }}
    />
  );
};
