import React from 'react';

import './styles.css';

import { TEMPLATES } from '../../summary';

export default props => {
  const {
    summary,
    summaryText,
    list
  } = props.config;

  return(
    <div className="container">
      <div className="summary" style={{display:summary }}>
        <p>{summaryText}</p>
      </div>
      <ul>
        {
          list ? 
            list.map(item => <TEMPLATES.LIST_ITEM key={ item._id } config={item} />)
          : ''
        }
      </ul>
    </div>
  );
};