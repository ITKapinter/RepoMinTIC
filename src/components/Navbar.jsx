import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'media/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-purple-200 border border-purple-300'>
      <ul className='flex w-full justify-between my-1'>
        <li> <img className='h-12 m-2 ' src={logo} alt="imagen" /></li>
        
        <li className='px-2'>
        {/* Link: para q al dar click en el boton me redirija a la pág de login */}
          <Link to='/login'> 
            <button className='bg-indigo-500 p-2 text-gray-100 rounded-lg shadow-md hover:bg-indigo-600 m-3'>
              Iniciar Sesión
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
