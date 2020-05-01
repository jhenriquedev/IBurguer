import React from 'react';

import './styles.css';

import Item from '../ListItem';


export default props => {
  const {
    summary,
    summaryText,
    list
  } = props.configs;

  return(
    <div className="container">
        <div className="summary" style={{display:summary }}>
          <p>{summaryText}</p>
        </div>
        <ul>
          {
            list ? 
              list.map(item => 
                <Item 
                  key={ item._id } 
                  itemData={item} 
                />
              )
            : ''
          }
        </ul>
      </div>
  );
};