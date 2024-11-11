import React from "react";
import Login from "./Login";
import Cart from "./Cart";

interface HeaderProps {
  isLoggedIn: boolean;
  products: {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, products }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white shadow-md">
      <h1 className="text-2xl font-bold">Mi Tienda</h1>
      {isLoggedIn ? <Cart products={products} /> : <Login />}
    </header>
  );
};

export default Header;
