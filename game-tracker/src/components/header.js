import React from 'react';
import imgheader from '../assets/img/logo.svg';
import pipe from '../assets/img/pipe.svg'
import './style/header.css'

function Header() {
  return (
    <header className='header'>
      <div className='header_bar'></div>
      <div className='header_container'>
        <div className='header_pipe2'>
          <img className='img_pipe1'
            src={pipe}  alt='pipe'
            />
        </div>
        <img
          src={imgheader}
          alt="imagem do header"
          className="logo_header"
        />
        <div className='header_pipe2'>
          
          <img className='img_pipe2'
            src={pipe}  alt='pipe'
            />
        </div>
      </div>
    </header>
  );
}
export default Header;