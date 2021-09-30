import React from 'react';
import CardProductos from 'components/CardProductos';
import Pantallas from 'media/Pantallas.jpg';
import Teclado from 'media/Teclado.jpg';
import Productos from 'media/Productos.jpg';

function Index() {
  return (
    <div className='container max-h-screen '>
      <h1>Productos tecnologicos</h1>
       <section>
           <ul className='flex w-full justify-between my-1'>
            <CardProductos nombreProducto='Teclado' imagen={Teclado} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Productos' imagen={Teclado} />
            <CardProductos nombreProducto='Productos' imagen={Productos} />
            <CardProductos nombreProducto='Pantallas' imagen={Pantallas} />
          </ul>
       </section>
  </div>
  );
}

export default Index;
