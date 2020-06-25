import React from 'react';

import './styles.css';

export default props => {
  return(
    <div className="view">
      <ul>
        {
          props.config.map(item => 
            <li key={item._id} {...item}>
              {item.children}
            </li>
          )
        }
      </ul>
    </div>
  );
};