import React from "react";

const Clientes: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-purple-600 mb-4">Clientes</h1>
      <p className="text-gray-500">
        Lista de clientes registrados en el sistema.
      </p>

      {/* Tabla o lista de clientes */}
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border p-2 text-left">Nombre</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Juan Pérez</td>
            <td className="border p-2">juan@example.com</td>
            <td className="border p-2">+5491123456789</td>
          </tr>
          <tr>
            <td className="border p-2">Ana García</td>
            <td className="border p-2">ana@example.com</td>
            <td className="border p-2">+5491134567890</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;
