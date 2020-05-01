import React from 'react';

import { FiImage } from 'react-icons/fi';

import './styles.css';

export default props => {
  const {
    title,
    img,
    content,
    footer
  } = props.config;

  return(
    <li className="item">
      <div className="header">
        {
          img ? 
            <img src={img.src} alt={img.alt}/>
          : 
            <FiImage size={36} className='item-icon'/>
        }
        <h4>{title}</h4>
      </div>
      <div className="content">
        {content}
      </div>
      <div className="footer">
        <span>{footer}</span>
      </div>
    </li>
  );
};