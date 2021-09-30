import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ventasBackend = [
  {
    idVenta: 111,
    idVendedor: 1,
    idcliente: 222,
    nombreCliente: "Carlos",
    idProducto: 1,
    nombreProducto: "USB",
    cantidad: 1,
    valorUnitario: 800000,
    valorTotal: 800000,
    estadoVenta: "En Proceso",
    fechaVenta: "26/09/2021",
  },
  {
    idVenta: 112,
    idVendedor: 2,
    idcliente: 333,
    nombreCliente: "Natalys",
    idProducto: 2,
    nombreProducto: "Portátil",
    cantidad: 2,
    valorUnitario: 3000000,
    valorTotal: 6000000,
    estadoVenta: "Cancelada",
    fechaVenta: "26/09/2021",
  },
  {
    idVenta: 113,
    idVendedor: 3,
    idcliente: 444,
    nombreCliente: "Joseph",
    idProducto: 3,
    nombreProducto: "Speacker",
    cantidad: 1,
    valorUnitario: 300000,
    valorTotal: 300000,
    estadoVenta: "En Proceso",
    fechaVenta: "27/09/2021",
  },
];

const Ventas = () => {
  // Estados
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]); //pata obtener informacion desde el backend
  const [textoBoton, setTextoBoton] = useState("Registrar Producto");

  useEffect(() => {
    //Obtener productos desde el backend
    setVentas(ventasBackend);
  }, []);

  useEffect(() => {
    {
      mostrarTabla
        ? setTextoBoton("Registrar Venta")
        : setTextoBoton("Mostrar Ventas");
    }
  }, [mostrarTabla]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-10">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Administración de Ventas
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
          <TablaVentas listaVentas={ventas} />
        ) : (
          <FormularioVentas
            setMostrarTabla={setMostrarTabla}
            listaVentas={ventas}
            setVentas={setVentas}
          />
        )}
        <ToastContainer position="bottom-center" autoClose={5000} />
      </div>
    </div>
  );
};

//componentes para mostar formulario o tabla
const TablaVentas = ({ listaVentas }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">Ventas</h2>
      <table>
        <thead>
          <tr>
            <th>Código Venta</th>
            <th>Código Vendedor</th>
            <th>Código Cliente</th>
            <th>Mombre Cliente</th>
            <th>Código Producto</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Valor Unitario</th>
            <th>Valor Total</th>
            <th>Estado Venta</th>
            <th>Fecha Venta</th>
          </tr>
        </thead>
        <tbody>
          {listaVentas.map((ventas) => {
            return (
              <tr>
                <td> {ventas.idVenta} </td>
                <td> {ventas.idVendedor} </td>
                <td> {ventas.idcliente} </td>
                <td> {ventas.nombreCliente} </td>
                <td> {ventas.idProducto} </td>
                <td> {ventas.nombreProducto} </td>
                <td> {ventas.cantidad} </td>
                <td> {ventas.valorUnitario} </td>
                <td> {ventas.valorTotal} </td>
                <td> {ventas.estadoVenta} </td>
                <td> {ventas.fechaVenta} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    setMostrarTabla(true);
    setVentas([...listaVentas, nuevaVenta]);

    toast.success("Se ha registrado la venta con éxito");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-700">
        Registrar nueva Venta
      </h2>
      <form ref={form} onSubmit={submitForm} className="grid grid-cols-4
       m-4">
        <label htmlFor="idVenta">
          Código Venta
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="idVenta"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="idVendedor">
          Código Vendedor
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="idVendedor"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="idcliente">
          Código Cliente
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="idcliente"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="nombreCliente">
          Nombre Cliente
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="nombreCliente"
            type="text"
            required
            placeholder=""
          />
        </label>
        <label htmlFor="idProducto">
          Código Producto
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="nombreProducto"
            type="text"
            required
            placeholder=""
          />
        </label>
        <label htmlFor="cantidad">
          Cantidad
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="cantidad"
            type="number"
            min={0}
            required
            placeholder=""
          />
        </label>
        <label htmlFor="valorUnitario">
          Valor Unitario
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="valorUnitario"
            type="number"
            min={0}
            required
            placeholder="$"
          />
        </label>
        <label htmlFor="valorTotal">
          Valor Total
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="valorTotal"
            type="number"
            min={0}
            required
            placeholder="$"
          />
        </label>
        <label htmlFor="estadoVenta">
          Estado Venta
          <select
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="estadoVenta"
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción{" "}
            </option>
            <option>En proceso</option>
            <option>Cancelada</option>
            <option>Entregada</option>
          </select>
        </label>
        <label htmlFor="fechaVenta">
          Valor Total
          <input
            className=" bg-gray-50 border border-gray-200 m-2 p-3 rounded-lg appearance-none relative block px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            name="fechaVenta"
            type="date"            
            required
            placeholder="dd/mm/año"
          />
        </label>
        <button
          type="submit"
          className="group relative flex justify-center py-2 px-4 my-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar Venta
        </button>
      </form>
    </div>
  );
};

export default Ventas;
