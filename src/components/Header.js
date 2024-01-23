import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className="p-8" >
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        {/* Nutton */}
        <button className='btn btn-sm'> Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
