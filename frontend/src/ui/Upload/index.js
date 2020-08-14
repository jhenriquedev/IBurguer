import React from 'react';

import './styles.css';

import { FiUpload } from 'react-icons/fi';


export default props => {

  const {
    img,
    onChange,
    alt = 'Nenhum arquivo selecionado',
    legend = 'Escolha uma foto suculenta',
    className = 'uploads'
  } = props.config;

  return(
    <div className={className} onChange={onChange} {...props.config} >
      {
        img ?
          <img src={img} alt={alt} />
        :
        <span>
          <FiUpload size={24} color="#a1aaae" />
        </span>
      }
      
      <input type='file' name='upload' id='upload' accept='.jpg,.png,.jpeg' />
      <label htmlFor='upload' >
      <a>{legend}</a>
      </label>
    </div>
  );
};