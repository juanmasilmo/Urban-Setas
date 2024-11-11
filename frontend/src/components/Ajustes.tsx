import React from "react";

const Ajustes: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-yellow-600 mb-4">Ajustes</h1>
      <p className="text-gray-500">
        Configura los parámetros de la aplicación.
      </p>

      {/* Ejemplo de formulario de configuración */}
      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-gray-700">
            Nombre del Sitio
          </label>
          <input
            type="text"
            id="siteName"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            placeholder="Ejemplo: Mi Tienda"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="currency" className="block text-gray-700">
            Moneda
          </label>
          <select
            id="currency"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            <option value="usd">USD</option>
            <option value="ars">ARS</option>
            <option value="eur">EUR</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg mt-4 w-full"
        >
          Guardar Ajustes
        </button>
      </form>
    </div>
  );
};

export default Ajustes;
