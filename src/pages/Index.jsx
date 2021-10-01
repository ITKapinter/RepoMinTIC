import React from 'react';
import CardProductos from 'components/CardProductos';
import Pantallas from 'media/Pantallas.jpg';
import Teclado from 'media/Teclado.jpg';
import Productos from 'media/Productos.jpg';

function Index() {
  return (
    <div class=" h-full w-full">
      <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>
        ITKapinter
      </h2>

      <h4 className='mt-4 p-10 text-left  text-gray-700'>
        Somos una empresa colombiana dedicada a la venta de productos tecnológicos de Alta Gama al por mayor y al mejor precio, somos importadores directos trayéndote lo último en productos tecnológicos. 
      </h4>
      <section >
        <ul className='flex my-3 p-10 '>
            <CardProductos nombreProducto='Teclado' imagen={Teclado} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Productos' imagen={Teclado} />
          </ul>
      </section>
              
  </div>
  );
}

export default Index;
