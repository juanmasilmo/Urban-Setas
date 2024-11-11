import React, { useState } from "react";
import Login from "./Login";
import Cart from "./Cart";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white shadow-md">
      {/* Placeholder para el menú desplegable */}
      <div className="text-xl font-semibold">Menú</div>

      {/* Nombre de la página */}
      <h1 className="text-2xl font-bold">Mi Página</h1>

      {/* Mostrar carrito si está logueado */}
      {isLoggedIn ? <Cart /> : <Login />}
    </header>
  );
};

export default Header;
