import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'media/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-gray-300'>
      <ul className='flex w-full justify-between my-3'>
        <li> <img className='h-12 m-3 ' src={logo} alt="imagen" /></li>
        
        <li className='px-3'>
        {/* Link: para q al dar click en el boton me redirija a la pág de login */}
          <Link to='/login'> 
            <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700 m-3'>
              Iniciar Sesión
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
