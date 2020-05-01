import React from 'react';

import { FiUploadCloud } from 'react-icons/fi';

import './styles.css';

export default props => {
  const className = props.banner ? 'thumb-box-banner' : 'thumb-box';
  return(
    <div className={className}>
      <div className="thumb-container" onChange={props.onChange} >
        <div className="thumb-input">
          {
            props.thumb ? 
              <img src={props.thumb} alt='Thumbnail' />
            : 
              <FiUploadCloud size={36} />
          }
        </div>
        <input type="file" name='thumb' id='upload' accept='.jpg,.png,.jpeg' />
        <label htmlFor='upload' >
          <a>{ props.label || 'Upload' }</a>
        </label>
      </div>
    </div>
    /*
    <div className='div-avatar' onChange={props.onChange}>
      <div className='input-avatar'>
        <img src={props.avatar || Avatar } alt="Avatar" />
      </div>
      <input type='file' name='avatar' id='upload' accept='.jpg,.png,.jpeg' />
      <label htmlFor='upload' >
      <a 
            href={props.to} 
            alt={props.alt} 
            className={props.className || 'link-padrao'}
            onClick={props.onClick}
        >
            Avatar
        </a>
      </label>
    </div>
    */
  );
};