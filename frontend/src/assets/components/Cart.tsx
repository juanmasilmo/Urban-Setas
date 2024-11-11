import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

interface CartProps {
  products: Product[];
}

const Cart: React.FC<CartProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  const addItem = (id: number) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => {
      const quantity = cartItems[product.id] || 0;
      return total + product.price * quantity;
    }, 0);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg w-full md:w-1/3">
      <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>

      {products.map(
        (product) =>
          cartItems[product.id] > 0 && (
            <div
              key={product.id}
              className="flex justify-between items-center mb-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 mr-2 object-cover"
              />
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                <button
                  onClick={() => removeItem(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{cartItems[product.id]}</span>
                <button
                  onClick={() => addItem(product.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          )
      )}

      <div className="mt-4">
        <h3 className="font-bold">
          Subtotal: ${calculateSubtotal().toFixed(2)}
        </h3>
        <button className="mt-2 bg-green-700 text-white p-2 rounded w-full">
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
