import React, { useEffect, useState } from "react";

interface Product {
  idProduct: number;
  productName: string;
  price: number;
  quantity: number;
}
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch ((error) => setError(error.message));
      
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Productos</h1>
      <p className="text-gray-500">
        Aquí se listan los productos disponibles en el sistema.
      </p>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border p-2 text-left">Nombre</th>
              <th className="border p-2 text-left">Precio</th>
              <th className="border p-2 text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="border p-2">{product.productName}</td>
                <td className="border p-2">{product.price}</td>
                <td className="border p-2">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
