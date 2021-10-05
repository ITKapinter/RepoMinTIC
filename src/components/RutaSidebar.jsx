import useActiveRoute from 'hooks/useActiveRoute';
import React from 'react'
import { Link } from "react-router-dom";

const Ruta = ({ icono, ruta, nombre }) => {
  const isActive = useActiveRoute(ruta);

  
    return (
      <li className="py-2">
        <Link to={ruta}>
          <span className={`block px-3 py-3 mt-2 text-sm font-semibold text-gray-50 bg-${isActive ? 'purple-500':'purple-400'} rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-white hover:bg-purple-500 focus:outline-none focus:shadow-outline`}>
            <i className={`${icono} w-6`} />
            {nombre}
          </span>
        </Link>
      </li>
    );
  };

export default Ruta;
