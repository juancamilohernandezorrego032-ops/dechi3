import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Payments from './pages/Payments';

// Context for App State
export const AppContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'Valentina R.', balance: 2847500 });
  const [movements, setMovements] = useState([
    { id: 1, title: 'Nequi recibido', date: 'Hoy 10:32am', amount: 85000, type: 'income', icon: 'fa-wallet' },
    { id: 2, title: 'Mercado Libre', date: 'Ayer 3:15pm', amount: -124900, type: 'expense', icon: 'fa-shopping-cart' },
    { id: 3, title: 'Bancolombia', date: 'Ayer 9:00am', amount: -50000, type: 'expense', icon: 'fa-building-columns' },
  ]);

  const login = (pin) => {
    if (pin === '1234') { // Dummy PIN for demo
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AppContext.Provider value={{ user, setUser, movements, setMovements, login, logout }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
          
          <Route path="/" element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={<Dashboard />} />
            <Route path="transferir" element={<Transfer />} />
            <Route path="pagar" element={<Payments />} />
            <Route path="perfil" element={<div>Perfil (En construcción)</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
