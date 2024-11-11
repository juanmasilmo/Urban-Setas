import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // Redirigir o cambiar el estado de login
      }
    } catch (err) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-4 py-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-4 py-2"
      />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default Login;
