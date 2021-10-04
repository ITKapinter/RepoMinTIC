import React from 'react'
import { Link } from "react-router-dom";

const Ruta = ({ icono, ruta, nombre }) => {
    return (
      <li className="py-2">
        <Link to={ruta}>
          <span className="block px-3 py-3 mt-2 text-sm font-semibold text-gray-500 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-white hover:bg-purple-500 focus:bg-purple-400 focus:outline-none focus:shadow-outline">
            <i className={`${icono} w-6`} />
            {nombre}
          </span>
        </Link>
      </li>
    );
  };

export default Ruta;
