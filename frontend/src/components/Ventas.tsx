import React from "react";

const Ventas: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Ventas</h1>
      <p className="text-gray-500">Aquí se detallan las ventas realizadas.</p>

      {/* Tabla o lista de ventas */}
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
          <tr>
            <td className="border p-2">#1234</td>
            <td className="border p-2">Producto A</td>
            <td className="border p-2">3</td>
            <td className="border p-2">10/11/2024</td>
          </tr>
          <tr>
            <td className="border p-2">#1235</td>
            <td className="border p-2">Producto B</td>
            <td className="border p-2">1</td>
            <td className="border p-2">09/11/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ventas;
