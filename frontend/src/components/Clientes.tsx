import React, { useEffect, useState } from "react";

interface Client {
  idClient: number;
  clientName: string;
  clientLastname: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  idCity: number;
  idProvince: number;
  idCountry: number;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/clients")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de clientes");
        }
        return response.json();
      })
      .then((data) => setClients(data))
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
            {clients.map((client, index) => (
              <tr key={index}>
                <td className="border p-2">
                  {client.clientName} {client.clientLastname}
                </td>
                <td className="border p-2">{client.clientEmail}</td>
                <td className="border p-2">{client.clientPhone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientList;
