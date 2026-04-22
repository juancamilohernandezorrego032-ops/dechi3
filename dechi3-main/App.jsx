<<<<<<< HEAD
import React, { useState, createContext, useContext, useEffect } from 'react';
=======
import React, { useState, createContext, useContext } from 'react';
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Payments from './pages/Payments';

<<<<<<< HEAD
// Context para el estado global
export const AppContext = createContext();

const App = () => {
  // HU10 - Leer sesión desde localStorage al iniciar
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser
      ? JSON.parse(savedUser)
      : { name: 'Valentina R.', balance: 2847500 };
  });

=======
// Context for App State
export const AppContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'Valentina R.', balance: 2847500 });
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
  const [movements, setMovements] = useState([
    { id: 1, title: 'Nequi recibido', date: 'Hoy 10:32am', amount: 85000, type: 'income', icon: 'fa-wallet' },
    { id: 2, title: 'Mercado Libre', date: 'Ayer 3:15pm', amount: -124900, type: 'expense', icon: 'fa-shopping-cart' },
    { id: 3, title: 'Bancolombia', date: 'Ayer 9:00am', amount: -50000, type: 'expense', icon: 'fa-building-columns' },
  ]);

<<<<<<< HEAD
  // HU10 - Guardar sesión en localStorage al hacer login
  const login = (pin) => {
    if (pin === '1234') {
      const token = 'token_simulado_' + Date.now();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
=======
  const login = (pin) => {
    if (pin === '1234') { // Dummy PIN for demo
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

<<<<<<< HEAD
  // HU10 - Limpiar localStorage al hacer logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };
=======
  const logout = () => setIsLoggedIn(false);
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd

  return (
    <AppContext.Provider value={{ user, setUser, movements, setMovements, login, logout }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
<<<<<<< HEAD

=======
          
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
          <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="transferir" element={<Transfer />} />
            <Route path="pagar" element={<Payments />} />
<<<<<<< HEAD
            <Route path="perfil" element={<div style={{ padding: '20px' }}>Perfil (En construcción)</div>} />
=======
            <Route path="perfil" element={<div>Perfil (En construcción)</div>} />
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
