import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { obtenerProductos } from "utils/api";
import "react-toastify/dist/ReactToastify.css";

const Productos = () => {
  // Estados
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]); //pata obtener informacion desde el backend
  const [textoBoton, setTextoBoton] = useState("Registrar Producto");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    {
      mostrarTabla
        ? setTextoBoton("Registrar Producto")
        : setTextoBoton("Mostrar Productos");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-10">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Administración de productos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="text-white bg-indigo-700 p-3 rounded-full my-6 hover:bg-green-800 w-auto"
        >
          {textoBoton}
        </button>
      </div>

      <div className="p-10">
        {mostrarTabla ? (
          <TablaProductos
            listaProductos={productos}
            setEjecutarConsulta={setEjecutarConsulta}
          />
        ) : (
          <FormularioProductos
            setMostrarTabla={setMostrarTabla}
            listaProductos={productos}
            setProductos={setProductos}
          />
        )}
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

//componentes para mostar formulario o tabla
const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return (elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div>
        <form className="grid grid-cols-4 m-4">
          <input
            className=" bg-gray-50 border border-gray-200 m-4 p-3 rounded-lg appearance-none relative block px-3 py-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="number"
            name="codigo"
            min={0}
            placeholder="Buscar ID Producto"
          />
          <input
            className=" bg-gray-50 border border-gray-200 m-4 p-3 rounded-lg appearance-none relative block px-3 py-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            type="text"
            name="descripcion"
            placeholder="Buscar por descripción"
          />
          <select
            className=" bg-gray-50 border border-gray-200 m-4 rounded-lg appearance-none relative block px-3 py-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="buscarEstado"
            defaultValue={0}
          >
            <option disabled value={0}>
              Buscar por estado
            </option>
            <option>Disponible </option>
            <option>No disponible </option>
          </select>
          <button className=" w-px">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-extrabold text-gray-700">Productos</h2>
      <form className="w-full">
        <table className="table">
          <thead>
            <tr>
              <th>ID Producto</th>
              <th>Descripción</th>
              <th>Valor Unitario</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {listaProductos.map((productos) => {
              return (
                <FilaProducto
                  key={nanoid()}
                  productos={productos}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

const FilaProducto = ({ productos, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    idProducto: productos.idProducto,
    nombreProducto: productos.nombreProducto,
    valorUnitario: productos.valorUnitario,
    estado: productos.estado,
  });

  const actualizarProducto = async () => {
    //enviar la info al backend
    const options = {
      method: "PATCH",
      url: "https://vast-waters-45728.herokuapp.com/vehicle/update/",
      headers: { "Content-Type": "application/json" },
      data: { ...infoNuevoProducto, id: productos._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("El producto se ha modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error al modificar el producto");
        console.error(error);
      });
  };

  const eliminarProducto = async () => {
    const options = {
      method: "DELETE",
      url: "https://vast-waters-45728.herokuapp.com/vehicle/delete/",
      headers: { "Content-Type": "application/json" },
      data: { id: productos._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("El producto se ha eliminado con éxito");
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error al eliminar el producto");
      });
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className="Input"
              type="number"
              value={infoNuevoProducto.idProducto}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  idProducto: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="Input"
              type="text"
              value={infoNuevoProducto.nombreProducto}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  nombreProducto: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="Input"
              type="number"
              value={infoNuevoProducto.valorUnitario}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  valorUnitario: e.target.value,
                })
              }
            />
          </td>
          <td>
            <select
              className="Input"
              type="text"
              value={infoNuevoProducto.estado}
              onChange={(e) =>
                setInfoNuevoProducto({
                  ...infoNuevoProducto,
                  estado: e.target.value,
                })
              }
            >
              <option disabled value={0}>
                Seleccione una opción
              </option>
              <option>Disponible </option>
              <option>No disponible </option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td> {productos.idProducto} </td>
          <td> {productos.nombreProducto} </td>
          <td> {productos.valorUnitario} </td>
          <td> {productos.estado} </td>
        </>
      )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i
                  onClick={() => actualizarProducto()}
                  className="fas fa-check p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-times p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Producto" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Elminar Producto" arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash-alt p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button
                onClick={() => eliminarProducto()}
                className="mx-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md shadow-md"
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

const FormularioProductos = ({
  setMostrarTabla,
  listaProductos,
  setProductos,
}) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    const options = {
      method: "POST",
      url: "https://vast-waters-45728.herokuapp.com/vehicle/create",
      headers: { "Content-Type": "application/json" },
      data: {
        idProducto: nuevoProducto.idProducto,
        nombreProducto: nuevoProducto.nombreProducto,
        valorUnitario: nuevoProducto.valorUnitario,
        estado: nuevoProducto.estado,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Se ha agregado el producto con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error creando un producto");
      });

    setMostrarTabla(true);


  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">
        Registrar nuevo producto
      </h2>
      <form ref={form} onSubmit={submitForm} className="grid grid-cols-2 m-4">
        <label htmlFor="idProducto">
          ID Producto
          <input
            className="Input"
            name="idProducto"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="nombreProducto">
          Descripción
          <input
            className="Input"
            name="nombreProducto"
            type="text"
            required
            placeholder=""
          />
        </label>
        <label htmlFor="valorUnitario">
          Valor Unitario
          <input
            className="Input"
            name="valorUnitario"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="estado">
          Estado
          <select className="Input" name="estado" defaultValue={0}>
            <option disabled value={0}>
              Seleccione una opción{" "}
            </option>
            <option>Disponible </option>
            <option>No disponible </option>
          </select>
        </label>
        <button
          type="submit"
          className="flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
