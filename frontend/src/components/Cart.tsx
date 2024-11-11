import React from "react";

interface CartProps {
  products: {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
  }[];
}

const Cart: React.FC<CartProps> = ({ products }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Carrito de compras</h2>
      {/* Aquí puedes agregar la lógica para mostrar los productos en el carrito */}
    </div>
  );
};

export default Cart;
