import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ruta from "components/RutaSidebar";

const SidebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div
      className="md:hidden"
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        className={`mx-2 fas fa-${
          mostrarNavegacion ? "times" : "bars"
        } hover:text-blue-600`}
      />
      {mostrarNavegacion && (
        <div>
          <ul>
            <Ruta
              icono="fab fa-product-hunt"
              ruta="/admin/Productos"
              nombre="Productos"
            />
            <Ruta
              icono="fas fa-cash-register"
              ruta="/admin/Ventas"
              nombre="Ventas"
            />
            <Ruta
              icono="fas fa-users"
              ruta="/admin/Usuarios"
              nombre="Usuarios"
            />
          </ul>
          <li className="py-2">
            <Link to="/">
              <span className="block px-3 py-3 mt-2 text-sm font-semibold text-gray-500 rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-white hover:bg-purple-500 focus:outline-none focus:shadow-outline">
                <i className="fas fa-door-closed" />
                Cerrar Sección
              </span>
            </Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default SidebarResponsive;
