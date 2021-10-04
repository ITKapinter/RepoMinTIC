import React from "react";
import { Link } from "react-router-dom";
import logo from "media/logo_abajo.png";

const Sidebar = () => {
  return (
    <nav className="w-72 bg-purple-200 border border-purple-300 h-full flex  justify-center">
      <ul className="mt-10 my-2 flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <Link to="/admin">
          <li>
            <img className="h-25 m-1 " src={logo} alt="imagen" />
          </li>
        </Link>

        <div className="my-10">
          <Ruta icono="fab fa-product-hunt" ruta="/admin/Productos" nombre="Productos"/>
          <Ruta icono="fas fa-cash-register" ruta="/admin/Ventas" nombre="Ventas"/>
          <Ruta icono="fas fa-users" ruta="/admin/Usuarios" nombre="Usuarios" />
        </div>
        <Ruta icono="fas fa-door-closed" ruta="/" nombre="Cerrar Sección" />
      </ul>
    </nav>
  );
};

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

export default Sidebar;
