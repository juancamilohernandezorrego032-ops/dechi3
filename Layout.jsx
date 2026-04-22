import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div className="app-container">
      <main>
        <Outlet />
      </main>
      
      {/* El Navbar ahora se posiciona fijamente abajo */}
      <Navbar />
    </div>
  );
};

export default Layout;