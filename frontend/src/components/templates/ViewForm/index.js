import React from "react";

import "./styles.css";

export default props => {
  const {
    action,
    buttonText = 'Confirmar',
    buttonClassName = 'primary-button',
    children
  } = props.config;

  return (
    <form action={action} className="view-form">
      {
        children
      }
      <button className={buttonClassName}>{buttonText}</button>
    </form>
  );
};
