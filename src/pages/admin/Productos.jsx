import { Dialog, Tooltip } from "@material-ui/core";
import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const prodcutosBackend = [
  {
    idProducto: 1234,
    nombreProducto: "Celular",
    valorUnitario: 800000,
    estado: "Disponible",
  },
  {
    idProducto: 1235,
    nombreProducto: "Tablet",
    valorUnitario: 400000,
    estado: "Disponible",
  },
  {
    idProducto: 1236,
    nombreProducto: "Portatil",
    valorUnitario: 2500000,
    estado: "Disponible",
  },
  {
    idProducto: 1237,
    nombreProducto: "TV 32",
    valorUnitario: 2000000,
    estado: "No Disponible",
  },
];
const Productos = () => {
  // Estados
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]); //pata obtener informacion desde el backend
  const [textoBoton, setTextoBoton] = useState("Registrar Producto");

  useEffect(() => {
    //Obtener productos desde el backend
    setProductos(prodcutosBackend);
  }, []);

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
          <TablaProductos listaProductos={productos} />
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
const TablaProductos = ({ listaProductos }) => {
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
              return <FilaProducto key={nanoid()} productos={productos} />;
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

const FilaProducto = ({ productos }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className="Input"
              type="number"
              defaultValue={productos.idProducto}
            />
          </td>
          <td>
            <input
              className="Input"
              type="text"
              defaultValue={productos.nombreProducto}
            />
          </td>
          <td>
            <input
              className="Input"
              type="number"
              defaultValue={productos.valorUnitario}
            />
          </td>
          <td>
            <select
              className="Input"
              type="text"
              defaultValue={productos.estado}
            >
              <option disabled value={0}>
                Seleccione una opción{" "}
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
              <Tooltip title="Confirmar Edición" arrow >
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-check p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Cancelar Edición" arrow >
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-times p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>

            </>

          ) : (
            <>
              <Tooltip title="Editar Producto" arrow >
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt p-2 hover:bg-blue-600 rounded-full"
                />
              </Tooltip>
              <Tooltip title="Elminar Producto" arrow >
                <i onClick={() => setOpenDialog(true)} className="fas fa-trash-alt p-2 hover:bg-blue-600 rounded-full" />
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
              <button className="mx-2 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md shadow-md">
                Sí
              </button>
              <button
              onClick={()=> setOpenDialog(false)}
              className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md">
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

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    setMostrarTabla(true);
    setProductos([...listaProductos, nuevoProducto]);

    toast.success("Se ha registrado el producto con éxito");
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
