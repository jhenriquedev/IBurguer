import React from 'react';

import './styles.css';

export default props => {
  return(
    <div className="tools">
      {
        props.tools ? 
          props.tools.map(tool => 
              <button key={tool.text} onClick={tool.onClick}>
                {tool.icon}
                <span className={tool.className} >{tool.text}</span>
              </button>
          )
        : ''
      }
    </div>
  );
};