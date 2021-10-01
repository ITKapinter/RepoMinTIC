import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const usuariosBackend  = [
    {
      cedula: 10662352,
      nombre: "Manuel",
      apellido: "Perez",
      correo: "mp23@gmail.com",
      estadoUsuario: "Autorizado",
      rol: "Vendedor",
    },
    {
      cedula: 32434,
      nombre: "Carlos",
      apellido: "Sanchez",
      correo: "carlossanache12@gmail.com",
      estadoUsuario: "Autorizado",
      rol: "Vendedor",
    },
    {
      cedula: 34343,
      nombre: "Sandra",
      apellido: "Lopez",
      correo: "sp@gmail.com",
      estadoUsuario: "Pendiente",
      rol: "",
    },
  ];

  const Usuarios = () => {
    // Estados
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [usuarios, setUsuarios] = useState([]); //pata obtener informacion desde el backend
    const [textoBoton, setTextoBoton] = useState("Crear usuarios");

    useEffect(() => {
      //Obtener productos desde el backend
      setUsuarios(usuariosBackend);
    }, []);

    useEffect(() => {
      {
        mostrarTabla
          ? setTextoBoton("Crear usuarios")
          : setTextoBoton("Mostrar usuarios");
      }
    }, [mostrarTabla]);
    return (
      <div className="flex h-full w-full flex-col items-center justify-start p-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Administración de Usuarios
          </h2>
          <button
            onClick={() => {
              setMostrarTabla(!mostrarTabla);
            }}
            className="text-white bg-purple-500 p-3 rounded-full my-6 hover:bg-purple-700 w-auto"
          >
            {textoBoton}
          </button>
        </div>
        <div className="p-10">
          {mostrarTabla ? (
            <TablaUsuarios listaUsuarios={usuarios} />
          ) : (
            <FormularioUsuarios
              setMostrarTabla={setMostrarTabla}
              listaUsuarios={Usuarios}
              setUsuarios={setUsuarios}
            />
          )}
          <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
      </div>
    );
  };

  //componentes para mostar formulario o tabla
const TablaUsuarios = ({ listaUsuarios }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-extrabold text-gray-700">Usuarios</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Rol</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios.map((usuarios) => {
              return (
                <tr>
                  <td> {usuarios.cedula} </td>
                  <td> {usuarios.nombre} </td>
                  <td> {usuarios.apellido} </td>
                  <td> {usuarios.correo} </td>
                  <td> {usuarios.estadoUsuario} </td>
                  <td> {usuarios.rol} </td>
                  <td> <i className="fas fa-pencil-alt p-2" />  <i className="fas fa-trash-alt p-2" />  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

const FormularioUsuarios = ({ setMostrarTabla, listaUsuarios, setUsuarios}) => {
    const form = useRef(null);

    const submitForm = (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);

      const nuevoUsuarios = {};
      fd.forEach((value, key) => {
        nuevoUsuarios[key] = value;
      });

      setMostrarTabla(true);
      setUsuarios([...listaUsuarios, nuevoUsuarios]);

      toast.success("Se ha creo el usuario con éxito");
    };

    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-extrabold text-gray-700">
          Crear nuevo usuario
        </h2>
        <form ref={form} onSubmit={submitForm} className="grid grid-cols-1 m-4">
          <label htmlFor="cedula">
            Cedula
            <input
              className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              name="cedula"
              type="number"
              min={0}
              required
              placeholder=""
            />
          </label>

          <label htmlFor="nombre">
            Nombre 
            <input
              className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              name="nombre"
              type="text"
              required
              placeholder=""
            />
          </label>

          <label htmlFor="apellido">
            Apellido
            <input
              className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              name="apellido"
              type="text"
              required
              placeholder=""
            />
          </label>

          <label htmlFor="estado">
            Estado 
            <select
              className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              name="estado"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione una opción{" "}
              </option>
              <option>Autorizado</option>
              <option>No autorizado</option>
              <option>Pendiente</option>
            </select>
          </label>

          <label htmlFor="rol">
            Rol
            <select
              className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              name="rol"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione una opción{" "}
              </option>
              <option>Vendedor</option>
              <option>Administardor</option>
            </select>
          </label>

          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-purple-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Guardar usuario
          </button>
        </form>
      </div>
    );
  };

export default Usuarios;
