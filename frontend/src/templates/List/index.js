import React from "react";

import "./styles.css";

export default (props) => {
  const { 
    style, 
    children,
    header,
    columns = 4
  } = props.config;

  var col_0 = [];
  var col_1 = [];
  var col_2 = [];
  var col_3 = [];

  let count = 0;

  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      count++;

      if(columns === 3){
        if (count === 1) col_0.push(children[i]);
        if (count === 2) col_1.push(children[i]);
        if (count === 3){ //cria uma lista com apenas 3 colunas
          count = 0;
          col_2.push(children[i]);
        }
      }else{
        if (count === 1) col_0.push(children[i]);
        if (count === 2) col_1.push(children[i]);
        if (count === 3) col_2.push(children[i]);
        if (count === 4) {
          count = 0;
          col_3.push(children[i]);
        }
      }
    }
  }

  return (
    <div className="list" {...style}>
      {
        header ? 
          <div className="list-header" { ...header.style }>
            <h1>{ header.title }</h1>
            <h2>{ header.subTitle }</h2>
            {
              header.tools ? 
                <div className="list-header-tools">
                  {
                    header.tools.map(item => item)
                  }
                </div>
              : ''
            }
          </div>
        : ''
      }
      <div className="list-cont">
        <div className={`list-column-${columns}`} key={0}>
          {col_0
            ? col_0.map((item) => (
                <div className="box" key={item.key}>
                  {item}
                </div>
              ))
            : ""}
        </div>
        <div className={`list-column-${columns}`} key={1}>
          {col_1
            ? col_1.map((item) => (
                <div className="box" key={item.key}>
                  {item}
                </div>
              ))
            : ""}
        </div>
        <div className={`list-column-${columns}`} key={2}>
          {col_2
            ? col_2.map((item) => (
                <div className="box" key={item.key}>
                  {item}
                </div>
              ))
            : ""}
        </div>
        <div className={`list-column-${columns}`} key={3}>
          {col_3
            ? col_3.map((item) => (
                <div className="box" key={item.key}>
                  {item}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
