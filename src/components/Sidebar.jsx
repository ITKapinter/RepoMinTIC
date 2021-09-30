import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'media/logo_abajo.png';

const Sidebar = () => {
  return (
    <nav className='w-72 bg-purple-200 border border-purple-300 h-full flex  justify-center'>
      <ul className='mt-10 my-2 flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto'>
        <li> <img className='h-25 m-1 ' src={logo} alt="imagen" /></li>
        <li className='py-2'>
          <Link to='/index/Productos'>
            <span className="block px-3 py-3 mt-2 text-sm font-semibold text-gray-500 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">Productos</span>
          </Link>
        </li>
        <li className='py-2'>
          <Link to='/index/Ventas'>
            <span className="block px-3 py-3 mt-2 text-sm font-semibold text-gray-500 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">Ventas</span>
          </Link>
        </li>
        <li className='py-2'>
          <Link to='/index/Usuarios'>
            <span className="block px-3 py-3 mt-2 text-sm font-semibold text-gray-500 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-indigo-300 focus:bg-indigo-200 focus:outline-none focus:shadow-outline">Usuarios</span>
          </Link>
        </li>
      </ul>
    
    
    </nav>
  );
};

export default Sidebar;