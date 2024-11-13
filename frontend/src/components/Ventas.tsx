import React, { useEffect, useState } from "react";

interface Sale {
  idSale: number;
  productName: string;
  quantity: number;
  date: Date;
}

const Ventas: React.FC = () => {
  const [sales, setSale] = useState<Sale[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/client-products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de las ventas");
        }
        return response.json();
      })
      .then((data) => setSale(data))
      .catch((error) => setError(error.message));
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Ventas</h1>
      <p className="text-gray-500">Aquí se detallan las ventas realizadas.</p>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border p-2 text-left">ID Venta</th>
              <th className="border p-2 text-left">Producto</th>
              <th className="border p-2 text-left">Cantidad</th>
              <th className="border p-2 text-left">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td className="border p-2">{sale.idSale}</td>
                <td className="border p-2">{sale.productName}</td>
                <td className="border p-2">{sale.quantity}</td>
                <td className="border p-2">{sale.date.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Ventas;
