import { Link } from 'react-router-dom';

function CardProductos({ nombreProducto, imagen }) {
  return (
    <li className='mt-10 my-2 flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto object-none '>
      <Link to='/login'>
        <div className='flex max-h-screen w-50 justify-between '>
          <img src={imagen} alt={nombreProducto} />
        </div>
      </Link>
      <span className='mt-2'>{nombreProducto}</span>
    </li>
  );
}

export default CardProductos;
