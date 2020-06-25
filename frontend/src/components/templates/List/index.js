import React from 'react';

import './styles.css';

export default props => {
  const {
    style,
    children
  } = props.config;

  var col_0 = [];
  var col_1 = [];
  var col_2 = [];
  var col_3 = [];

  let count = 0;

  if(children.length > 0){
    for(let i = 0; i < children.length; i++){
      count++;

      if(count === 1) col_0.push(children[i]);
      if(count === 2) col_1.push(children[i]);
      if(count === 3) col_2.push(children[i]);
      if(count === 4){ 
        count = 0;
        col_3.push(children[i]);
      };
      
    }
  };

  return (
    <div className="list" {...style}>
      <div className="list-column" key={0} >
          {
            col_0 ? 
              col_0.map(item => <div className="box" key={item.key}>{item}</div>)
            : ''
          }
        </div>
        <div className="list-column" key={1} >
          {
            col_1 ? 
              col_1.map(item => <div className="box" key={item.key}>{item}</div>)
            : ''
          }
        </div>
        <div className="list-column" key={2} >
          {
            col_2 ? 
              col_2.map(item => <div className="box" key={item.key}>{item}</div>)
            : ''
          }
        </div>
        <div className="list-column" key={3} >
          {
            col_3 ? 
              col_3.map(item => <div className="box" key={item.key}>{item}</div>)
            : ''
          }
        </div>
    </div>
  );
};