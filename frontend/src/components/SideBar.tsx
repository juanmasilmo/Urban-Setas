import React from "react";
import { Link } from "react-router-dom"; // Usando React Router para navegación

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Panel de Control</h2>

        <ul className="space-y-4">
          {/* Enlace a la página de Dashboard */}
          <li>
            <Link
              to="/dashboard"
              className="flex items-center text-lg hover:text-gray-300"
            >
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </Link>
          </li>

          {/* Enlace a la página de Productos */}
          <li>
            <Link
              to="/productos"
              className="flex items-center text-lg hover:text-gray-300"
            >
              <i className="fas fa-cogs mr-3"></i>
              Productos
            </Link>
          </li>

          {/* Enlace a la página de Ventas */}
          <li>
            <Link
              to="/ventas"
              className="flex items-center text-lg hover:text-gray-300"
            >
              <i className="fas fa-chart-line mr-3"></i>
              Ventas
            </Link>
          </li>

          {/* Enlace a la página de Clientes */}
          <li>
            <Link
              to="/clientes"
              className="flex items-center text-lg hover:text-gray-300"
            >
              <i className="fas fa-users mr-3"></i>
              Clientes
            </Link>
          </li>

          {/* Enlace a la página de Ajustes */}
          <li>
            <Link
              to="/ajustes"
              className="flex items-center text-lg hover:text-gray-300"
            >
              <i className="fas fa-cogs mr-3"></i>
              Ajustes
            </Link>
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow p-6">
        {/* Aquí va el contenido de la página principal */}
        {/* El contenido cambiará según el componente renderizado por React Router */}
      </div>
    </div>
  );
};

export default Sidebar;
