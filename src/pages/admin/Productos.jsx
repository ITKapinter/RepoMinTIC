import React, { useEffect, useState } from "react";

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
      <div className="flex flex-col items-baseline">
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
          <FormularioProductos />
        )}
      </div>
    </div>
  );
};

//componentes para mostar formulario o tabla
const TablaProductos = ({ listaProductos }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">Productos</h2>
      <table>
        <thead>
          <tr>
            <th> ID Producto</th>
            <th> Descripción</th>
            <th> Valor Unitario</th>
            <th> Estado</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((productos) => {
            return (
              <tr>
                <td> {productos.idProducto} </td>
                <td> {productos.nombreProducto} </td>
                <td> {productos.valorUnitario} </td>
                <td> {productos.estado} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioProductos = () => {
  const [idProducto, setIdProducto] = useState(" ");
  const [nombreProducto, setNombreProducto] = useState(" ");
  const [valorUnitario, setValorUnitario] = useState(" ");
  const [estado, setEstado] = useState(" ");

  useEffect(() => {
    console.log("El valor del ID del producto es ", idProducto);
  }, [idProducto]);

  const enviarDatos = () => {
    console.log("El valor de IdProducto es ", idProducto);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">
        Registrar nuevo producto
      </h2>
      <form className="grid grid-cols-2">
        <label htmlFor="idProducto">
          ID Producto
          <input
            value={idProducto}
            onChange={(e) => {
              setIdProducto(e.target.value);
            }}
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg"
            name="idProducto"
            type="number"
            placeholder=""
          />
        </label>
        <label htmlFor="Producto">
          Descripción
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg"
            type="text"
            placeholder=""
          />
        </label>
        <label htmlFor="valorUnitario">
          Valor Unitario
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg"
            type="number"
            placeholder=""
          />
        </label>
        <label htmlFor="estado">
          Estado
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg"
            type="text"
            placeholder=""
          />
        </label>
        <button
          type="button"
          onClick={enviarDatos}
          className="bg-indigo-400 p-2 rounded-3xl shadow-md hover:bg-indigo-600 text-white my-4 w-28 self-end"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Productos;
