import React from "react";

import "./styles.css";

import { UI, ASSETS, CONFIG } from "../../summary";

import { Navegar } from '../../util';

import { FiSearch, FiBell, FiMessageCircle, FiUser, FiChevronDown } from 'react-icons/fi';

export default props => {
  const { history, page=1 } = props.config;
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
          onClick: () => Navegar(history, "/request"),
        }}
      />
      <UI.BUTTON
        key={2}
        config={{
          className: page === 2 ? 'btn-header-active' : "btn-header",
          text: "Promoções",
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
          placeholder: "Pesquisar",
          icon: <FiSearch size={24} color="#4b5558" />,
        }}
      />
      <UI.BUTTON
        key={5}
        config={{
          className: "btn-header",
          icon: <FiBell size={24} color="#4b5558" />,
        }}
      />
      <UI.BUTTON
        key={6}
        config={{
          className: "btn-header",
          icon: <FiMessageCircle size={24} color="#4b5558" />,
        }}
      />
      <UI.BUTTON
        key={7}
        config={{
          className: "btn-header",
          icon: CONFIG.USER_AVATAR ? (
            CONFIG.USER_AVATAR
          ) : (
            <FiUser size={24} color="#4b5558" />
          ),
        }}
      />
      <UI.BUTTON
        key={8}
        config={{
          className: "btn-header-sm",
          icon: <FiChevronDown size={24} color="#4b5558" />,
        }}
      />
    </>
  );
};
