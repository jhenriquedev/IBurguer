import React from 'react';

import './styles.css';

export default props => {
  const {
    label,
    type,
    placeholder,
    required,
    info
  } = props.configs;

  return(
    <div className="input-box">
      <label htmlFor={ label }>{label}</label>
      <input 
        type={type || 'text'}
        id={label}
        placeholder={ placeholder }
        required={required}
      />
      <span>{info}</span>
    </div>
  );
};