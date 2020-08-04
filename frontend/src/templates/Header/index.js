import React, { useState } from "react";

import "./styles.css";

import { UI, ASSETS, CONFIG } from "../../summary";

import { Navegar } from '../../util';

import { 
  FiSearch, 
  FiBell, 
  FiMessageCircle, 
  FiUser, 
  FiChevronDown,
  FiX 
} from 'react-icons/fi';

export default props => {
  const { 
    history, 
    page=1,
    search 
  } = props.config;

  const [menu, setMenu] = useState({
    display: 'none',
    right: '0px'
  });


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

          onClick: () => setMenu({
            ...menu, 
            display: menu.display === 'none' ? 'flex' : '',
            right: '200px'
          })
        }}
      />
      <UI.BUTTON
        key={6}
        config={{
          className: "btn-header",
          icon: <FiMessageCircle size={24} color="#4b5558" />,

          onClick: () => setMenu({
            ...menu, 
            display: menu.display === 'none' ? 'flex' : '',
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

          onClick: () => setMenu({
            ...menu, 
            display: menu.display === 'none' ? 'flex' : '',
            right: '68px'
          })
        }}
      />
      <UI.BUTTON
        key={8}
        config={{
          className: "btn-header-sm",
          icon: <FiChevronDown size={24} color="#4b5558" />,
          onClick: () => setMenu({
            ...menu, 
            display: menu.display === 'none' ? 'flex' : '',
            right: '15px'
          })
        }}
      />


      <div className="menu-app" style={{
        display: menu.display
      }}>
        <div className="menu-aba" style={{
          right: menu.right
        }}></div>
        
        <div className="menu-app-header">
          <UI.BUTTON
            config={{
            className: "btn-header-sm",
            icon: <FiX size={24} color="#4b5558" />,
            onClick: () => setMenu({
              ...menu, 
              display: 'none',
            })
          }}
          />
        </div>

        <div className="menu-app-content">

        </div>
      </div>
      
    </>
  );
};
