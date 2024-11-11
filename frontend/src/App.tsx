import React, { useState } from "react";
import Header from "./components/Header";
import { useAuth } from "./hooks/useAuth";
import { Product } from "./types";

const App: React.FC = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      stock: 10,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      stock: 5,
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className="container mx-auto">
      <Header isLoggedIn={isLoggedIn} products={products} />
      {!isLoggedIn ? (
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Iniciar sesión
        </button>
      ) : (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Cerrar sesión
        </button>
      )}
    </div>
  );
};

export default App;
