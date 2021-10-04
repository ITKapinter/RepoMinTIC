import React from "react";
import { Link } from "react-router-dom";
import logo from "media/logo_abajo.png";
import Ruta from "components/RutaSidebar";

const Sidebar = () => {
  return (
    <nav className="hidden md:flex md:w-72 bg-purple-200 border border-purple-300 h-full justify-center">
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


export default Sidebar;
