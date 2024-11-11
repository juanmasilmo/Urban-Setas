import React, { useState } from "react";

const Header: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); // Estado para mostrar/ocultar el formulario de login
  const [email, setEmail] = useState(""); // Estado para manejar el valor del email
  const [password, setPassword] = useState(""); // Estado para manejar el valor de la contraseña

  // Función para manejar el envío del formulario de login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías hacer una llamada API o cualquier acción relacionada con el login
    console.log("Email:", email);
    console.log("Password:", password);
    setShowLoginForm(false); // Cerrar el formulario después del envío
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
        {/* Si no está mostrando el formulario, muestra el botón de Login */}
        {!showLoginForm ? (
          <button
            onClick={() => setShowLoginForm(true)}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Login
          </button>
        ) : (
          // Si está mostrando el formulario, muestra el modal de login
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
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
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
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
