// components/Register.tsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { setToken } = useContext(AuthContext)!;
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/auth/register", formData);
      setToken(response.data.token);
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;
