import React from 'react';

import './styles.css';

//import { TEMPLATES } from '../../summary';

export default props => {
  const {
    summary,
    summaryText,
    list,
    title,
    tools,
    oters
  } = props.config;

  return(
    <div className="container">
      <div className="summary" style={{display:summary }}>
        <p>{summaryText}</p>
      </div>
      {
        tools ? 
          <div className="menu-list">
            <h3>{title}</h3>
            <div className="menu-list-content">
              <div className="menu-list-tools">
                <span>Filtre por </span>
                { tools }
              </div>
              {
                oters ?
                  <div className="menu-list-oters">
                    { oters }
                  </div>
                : ''
              }
            </div>
          </div>
        : ''
      }
      <ul>
        {
          list
        }
      </ul>
    </div>
  );
};