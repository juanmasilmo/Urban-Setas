import React from "react";

const Productos: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Productos</h1>
      <p className="text-gray-500">
        Aquí se listan los productos disponibles en el sistema.
      </p>

      {/* Aquí puedes agregar una tabla o lista de productos */}
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border p-2 text-left">Nombre</th>
            <th className="border p-2 text-left">Precio</th>
            <th className="border p-2 text-left">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Producto A</td>
            <td className="border p-2">$100</td>
            <td className="border p-2">50</td>
          </tr>
          <tr>
            <td className="border p-2">Producto B</td>
            <td className="border p-2">$150</td>
            <td className="border p-2">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
