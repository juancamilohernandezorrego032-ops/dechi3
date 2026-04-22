<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { gastosService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, movements, setMovements, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const [loadingMovements, setLoadingMovements] = useState(false);

  // HU08 - useEffect con arreglo de dependencias vacío para carga automática
  // Se ejecuta solo una vez al renderizarse, sin peticiones infinitas
  useEffect(() => {
    const cargarMovimientos = async () => {
      setLoadingMovements(true);
      try {
        // HU07 - Petición HTTP usando el módulo centralizado
        await gastosService.getAll();
        // Los datos reales vendrían del backend; aquí usamos los del contexto
      } catch (error) {
        console.error('Error al cargar movimientos:', error);
      } finally {
        setLoadingMovements(false);
      }
    };

    cargarMovimientos();
  }, []); // [] - solo al montar, sin repeticiones
=======
import React, { useContext } from 'react';
import { AppContext } from '../App';

const Dashboard = () => {
  const { user, movements } = useContext(AppContext);
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd

  return (
    <div className="dashboard animate-fade-in" style={{ padding: '20px 0' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Buenos días</p>
          <h1 style={{ fontSize: '1.5rem' }}>{user.name}</h1>
        </div>
<<<<<<< HEAD
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div className="glass" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-bell" style={{ color: '#fbbf24' }}></i>
          </div>
          {/* HU10 - Botón de logout que limpia localStorage */}
          <div onClick={logout} className="glass" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <i className="fas fa-sign-out-alt" style={{ color: '#ef4444' }}></i>
          </div>
=======
        <div className="glass" style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fas fa-bell" style={{ color: '#fbbf24' }}></i>
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
        </div>
      </div>

      {/* Virtual Card */}
      <div className="glass-premium" style={{
        height: '220px',
        borderRadius: '28px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)',
        marginBottom: '30px'
      }}>
<<<<<<< HEAD
=======
        {/* Abstract Pattern */}
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '5px' }}>Saldo disponible</p>
            <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>
              ${user.balance.toLocaleString('es-CO')}
            </h2>
          </div>
          <div style={{ width: '50px', height: '35px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px' }}></div>
        </div>

        <div style={{ marginTop: '50px' }}>
          <p style={{ letterSpacing: '4px', fontSize: '1.1rem', marginBottom: '10px' }}>4532 •••• •••• 8821</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.9 }}>{user.name}</p>
             <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>12 / 27</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '35px' }}>
        {[
<<<<<<< HEAD
          { icon: 'fa-arrow-trend-up', label: 'Transferir', color: '#6366f1', path: '/transferir' },
          { icon: 'fa-plus', label: 'Recargar', color: '#10b981', path: null },
          { icon: 'fa-shopping-bag', label: 'Pagar', color: '#f59e0b', path: '/pagar' },
          { icon: 'fa-ellipsis', label: 'Más', color: '#94a3b8', path: null }
        ].map((action, i) => (
          <div key={i} style={{ textAlign: 'center' }} onClick={() => action.path && navigate(action.path)}>
            <div className="glass" style={{
              width: '60px',
              height: '60px',
              borderRadius: '20px',
=======
          { icon: 'fa-arrow-trend-up', label: 'Transferir', color: '#6366f1' },
          { icon: 'fa-plus', label: 'Recargar', color: '#10b981' },
          { icon: 'fa-shopping-bag', label: 'Pagar', color: '#f59e0b' },
          { icon: 'fa-ellipsis', label: 'Más', color: '#94a3b8' }
        ].map((action, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div className="glass" style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '20px', 
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
              margin: '0 auto 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
<<<<<<< HEAD
              cursor: action.path ? 'pointer' : 'default',
=======
              cursor: 'pointer',
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <i className={`fas ${action.icon}`} style={{ fontSize: '1.2rem', color: action.color }}></i>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{action.label}</p>
          </div>
        ))}
      </div>

      {/* Movements */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.1rem' }}>Movimientos</h2>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem' }}>Ver todo</a>
      </div>

<<<<<<< HEAD
      {loadingMovements ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Cargando movimientos...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingBottom: '100px' }}>
          {movements.map((move) => (
            <div key={move.id} className="glass" style={{
              padding: '16px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '15px',
                  background: move.type === 'income' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className={`fas ${move.icon}`} style={{
                    color: move.type === 'income' ? '#10b981' : '#ef4444'
                  }}></i>
                </div>
                <div>
                  <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>{move.title}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{move.date}</p>
                </div>
              </div>
              <p style={{
                fontWeight: '700',
                color: move.type === 'income' ? '#10b981' : '#f8fafc'
              }}>
                {move.type === 'income' ? '+' : '-'}${Math.abs(move.amount).toLocaleString('es-CO')}
              </p>
            </div>
          ))}
        </div>
      )}
=======
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {movements.map((move) => (
          <div key={move.id} className="glass" style={{ 
            padding: '16px', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ 
                width: '45px', 
                height: '45px', 
                borderRadius: '15px', 
                background: move.type === 'income' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className={`fas ${move.icon}`} style={{ 
                  color: move.type === 'income' ? '#10b981' : '#ef4444' 
                }}></i>
              </div>
              <div>
                <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>{move.title}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{move.date}</p>
              </div>
            </div>
            <p style={{ 
              fontWeight: '700', 
              color: move.type === 'income' ? '#10b981' : '#f8fafc'
            }}>
              {move.type === 'income' ? '+' : '-'}${Math.abs(move.amount).toLocaleString('es-CO')}
            </p>
          </div>
        ))}
      </div>
>>>>>>> 9832fbe3d5ff1e2d4b98a00621cc189ebb4350dd
    </div>
  );
};

export default Dashboard;
