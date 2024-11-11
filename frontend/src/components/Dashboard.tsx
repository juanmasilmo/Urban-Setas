import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Título del Dashboard */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Dashboard
      </h1>

      {/* Sección de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Estadísticas de Ventas</h2>
          <p className="text-3xl font-bold text-green-500 mb-4">$24,500</p>
          <p className="text-gray-500">Ventas del mes</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Clientes Activos</h2>
          <p className="text-3xl font-bold text-blue-500 mb-4">1,200</p>
          <p className="text-gray-500">Clientes registrados</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Imagen Destacada</h2>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Imagen Destacada"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Segunda fila de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Tarjeta 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Productos en Stock</h2>
          <p className="text-3xl font-bold text-yellow-500 mb-4">85</p>
          <p className="text-gray-500">Productos disponibles</p>
        </div>

        {/* Tarjeta 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Última Venta</h2>
          <p className="text-xl font-bold text-red-500 mb-4">#4563</p>
          <p className="text-gray-500">Venta realizada ayer</p>
        </div>

        {/* Tarjeta 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Imagen de Productos</h2>
          <img
            src="https://via.placeholder.com/400x200"
            alt="Imagen de Productos"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
