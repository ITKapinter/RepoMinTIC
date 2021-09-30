import React from 'react';
import CardProductos from 'components/CardProductos';
import Pantallas from 'media/Pantallas.jpg';
import Teclado from 'media/Teclado.jpg';
import Productos from 'media/Productos.jpg';

function Index() {
  return (
    <div class=" h-full w-full">
      <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>
        Productos tecnologicos
      </h2>
      <section >
        <ul className='flex flex-auto my-3'>
            <CardProductos nombreProducto='Teclado' imagen={Teclado} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Productos' imagen={Teclado} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Pantallas' imagen={Pantallas} />
            <CardProductos nombreProducto='Pantallas' imagen={Pantallas} />
          </ul>
      </section>
              
  </div>
  );
}

export default Index;
