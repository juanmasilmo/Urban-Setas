import React, { useEffect, useState } from "react";

interface Cliente {
  nombre: string;
  email: string;
  telefono: string;
}

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Llama al endpoint para obtener los datos de clientes
    fetch("http://localhost:3000/api/clientes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de clientes");
        }
        return response.json();
      })
      .then((data) => setClientes(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-purple-600 mb-4">Clientes</h1>
      <p className="text-gray-500">
        Lista de clientes registrados en el sistema.
      </p>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th className="border p-2 text-left">Nombre</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <tr key={index}>
                <td className="border p-2">{cliente.nombre}</td>
                <td className="border p-2">{cliente.email}</td>
                <td className="border p-2">{cliente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clientes;
