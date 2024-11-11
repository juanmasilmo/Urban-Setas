import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Cart from "./Cart";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch products from API on component mount
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-4 bg-gradient-to-r from-green-400 via-yellow-300 to-brown-300">
      {/* Header recibe isLoggedIn y products */}
      <Header isLoggedIn={isLoggedIn} products={products} />

      <h2 className="text-3xl font-bold mb-4">Tienda de Productos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
        ))}
      </div>

      {/* Render Cart component only if user is logged in */}
      {isLoggedIn && <Cart products={products} />}
    </div>
  );
};

export default Dashboard;
