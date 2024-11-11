import React, { useState } from "react";
import axios from "axios"; // Para realizar la solicitud a la API

const Header: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); // Estado para mostrar/ocultar el formulario de login
  const [email, setEmail] = useState(""); // Estado para manejar el valor del email
  const [password, setPassword] = useState(""); // Estado para manejar el valor de la contraseña
  const [error, setError] = useState(""); // Para mostrar errores si las credenciales no son correctas

  // Función para manejar el envío del formulario de login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Realizar la solicitud a la API
      const response = await axios.post("http://localhost:3000/login", { email, password });

      // Si la autenticación es exitosa, manejar la respuesta
      console.log("Respuesta del servidor:", response.data);
      alert("¡Bienvenido!");

      // Aquí podrías guardar el token JWT en el localStorage o en un contexto de React
      localStorage.setItem("authToken", response.data.token);

      // Cerrar el modal de login
      setShowLoginForm(false);
    } catch (err: any) {
      // En caso de error, mostrar un mensaje de error
      console.error(err);
      setError(err.response?.data?.message || "Error en la autenticación");
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      {/* Logo (izquierda) */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-3" />
        <span className="text-lg font-semibold"></span>
      </div>

      {/* Nombre de la tienda (centro) */}
      <div className="flex-grow text-center">
        <span className="text-xl font-bold">Nombre de la Tienda</span>
      </div>

      {/* Login (derecha) */}
      <div className="flex items-center space-x-4">
        {!showLoginForm ? (
          <button
            onClick={() => setShowLoginForm(true)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Login
          </button>
        ) : (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold mb-4">Iniciar sesión</h2>
              <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                />
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Ingresar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLoginForm(false)}
                    className="text-blue-600 hover:underline"
                  >
                    Cancelar
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
