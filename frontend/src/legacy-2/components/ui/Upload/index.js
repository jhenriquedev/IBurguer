import React from 'react';

import { FiUploadCloud } from 'react-icons/fi';

import './styles.css';

export default props => {
  const {
    banner,
    onChange,
    thumb,
    label
  } = props.config;

  const className = banner ? 'thumb-box-banner' : 'thumb-box';

  return(
    <div className={className}>
      <div className="thumb-container" onChange={onChange} >
        <div className="thumb-input">
          {
            thumb ? 
              <img src={thumb} alt='Thumbnail' />
            : 
              <FiUploadCloud size={36} />
          }
        </div>
        <input type="file" name='thumb' id='upload' accept='.jpg,.png,.jpeg' />
        <label htmlFor='upload' >
          <a>{ label || 'Upload' }</a>
        </label>
      </div>
    </div>
  );
};