import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Productos from './components/ProductList';
import Ventas from './components/Ventas';
import Clientes from './components/Clientes';
import Ajustes from './components/Ajustes';
import Header from './components/Header';
import Footer from './components/Footer';
import DiffComponent from "./components/imgs"

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header /> {/* Aquí se integra el Header */}
        <div className="flex flex-1">
          <Sidebar />
          <div className="w-full p-6">
            <DiffComponent />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/ajustes" element={<Ajustes />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
