import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Login from 'pages/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

import AuthLayout from 'layouts/AuthLayout';
import Productos from 'pages/admin/Productos';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import RegistrarVenta from 'pages/admin/RegistrarVenta';
import RegistrarProducto from 'pages/admin/RegistrarProducto';
import EditarVenta from 'pages/admin/EditarVenta';
import EditarProducto from 'pages/admin/EditarProducto';
import EditarUsuario from 'pages/admin/EditarUsuario';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/index', '/index/ventas', '/index/ventas/registrarventa', '/index/ventas/editarventa', '/index/productos', '/index/productos/editarproducto', '/index/productos/registrarproducto', '/index/usuarios', '/index/usuarios/editarusuario']}>
            <PrivateLayout>
              <Switch>
                <Route path='/index/ventas/registrarventa'>
                  <RegistrarVenta />
                </Route>
                <Route path='/index/ventas/editarventa'>
                  <EditarVenta />
                </Route>
                <Route path='/index/ventas'>
                  <Ventas />
                </Route>
                <Route path='/index/productos/registrarproducto'>
                  <RegistrarProducto />
                </Route>
                <Route path='/index/productos/editarproducto'>
                  <EditarProducto />
                </Route>
                <Route path='/index/productos'>
                  <Productos />
                </Route>
                <Route path='/index/usuarios/editarusuario'>
                  <EditarUsuario />
                </Route>
                <Route path='/index/usuarios'>
                  <Usuarios />
                </Route>
                <Route path='/index'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
              
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Route path='/'>
                <Index />
              </Route>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
