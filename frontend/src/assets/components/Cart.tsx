import React, { useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface CartProps {
  products: Product[];
}

const Cart: React.FC<CartProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<
    { product: Product; quantity: number }[]
  >([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ product, quantity: 1 });
    }

    setCartItems([...cartItems]);
    calculateTotal();
  };

  const calculateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const confirmPurchase = () => {
    axios
      .post("/api/confirm-purchase", {
        items: cartItems.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      })
      .then(() => {
        alert("Compra confirmada");
        // Actualizar el stock después de la compra
        setCartItems([]);
        setTotal(0);
      })
      .catch((error) => {
        console.error("Error confirming purchase:", error);
      });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item.product.name}</span>
            <span>
              {item.quantity} x ${item.product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</p>
      <button
        className="bg-green-500 text-white p-2 rounded mt-4"
        onClick={confirmPurchase}
      >
        Confirmar compra
      </button>
    </div>
  );
};

export default Cart;
