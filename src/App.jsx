import React, { useState, useEffect } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import Index from "pages/Index";
import Admin from "pages/admin/Admin";
import Login from "pages/auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";
import "styles/table.css";

import AuthLayout from "layouts/AuthLayout";
import Productos from "pages/admin/Productos";
import Usuarios from "pages/admin/Usuarios";
import Ventas from "pages/admin/Ventas";
import RegistrarVenta from "pages/admin/RegistrarVenta";
import RegistrarProducto from "pages/admin/RegistrarProducto";
import EditarVenta from "pages/admin/EditarVenta";
import EditarProducto from "pages/admin/EditarProducto";
import EditarUsuario from "pages/admin/EditarUsuario";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "/admin",
              "/admin/ventas",
              "/admin/ventas/registrarventa",
              "/admin/ventas/editarventa",
              "/admin/productos",
              "/admin/productos/editarproducto",
              "/admin/productos/registrarproducto",
              "/admin/usuarios",
              "/admin/usuarios/editarusuario",
            ]}
          >
            <PrivateLayout>
              <Switch>
                <Route path="/admin/ventas/registrarventa">
                  <RegistrarVenta />
                </Route>
                <Route path="/admin/ventas/editarventa">
                  <EditarVenta />
                </Route>
                <Route path="/admin/ventas">
                  <Ventas />
                </Route>
                <Route path="/admin/productos/registrarproducto">
                  <RegistrarProducto />
                </Route>
                <Route path="/admin/productos/editarproducto">
                  <EditarProducto />
                </Route>
                <Route path="/admin/productos">
                  <Productos />
                </Route>
                <Route path="/admin/usuarios/editarusuario">
                  <EditarUsuario />
                </Route>
                <Route path="/admin/usuarios">
                  <Usuarios />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={["/login"]}>
            <AuthLayout>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={["/"]}>
            <PublicLayout>
              <Route path="/">
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
