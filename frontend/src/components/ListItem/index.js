import React from 'react';

import './styles.css';

export default props => {
  const {
    title,
    img,
    content,
    footer
  } = props.itemConfig;

  return(
    <li className="item">
      <div className="header">
        {
          img ? 
          <img src={img.src} alt={img.alt}/>
          : ''
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