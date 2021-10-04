import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Ruta from "components/RutaSidebar";


const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
    return (
        <div className="md:hidden" onClick={()=>{setMostrarNavegacion(!mostrarNavegacion)}}>
          <i className={`mx-2 fas fa-${mostrarNavegacion?'times':'bars'} hover:text-blue-600`}/>
          {mostrarNavegacion && (
              <div>
                  <ul>
                      <Ruta icono="fab fa-product-hunt" ruta="/admin/Productos" nombre="Productos"/>
                      <Ruta icono="fas fa-cash-register" ruta="/admin/Ventas" nombre="Ventas"/>
                      <Ruta icono="fas fa-users" ruta="/admin/Usuarios" nombre="Usuarios" />
                      <Ruta icono="fas fa-door-closed" ruta="/" nombre="Cerrar Sección" />
                    </ul>
                </div>
          )}
        </div>
    )
}



export default SidebarResponsive;
