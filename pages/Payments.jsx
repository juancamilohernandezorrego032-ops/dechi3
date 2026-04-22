import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="payments-page animate-fade-in">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
        <div onClick={() => navigate('/')} className="glass" style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <h2>Pagar y comprar</h2>
      </div>

      {/* Search Bar */}
      <div className="glass" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '12px 18px', 
        borderRadius: '20px', 
        marginBottom: '30px',
        gap: '12px'
      }}>
        <i className="fas fa-search" style={{ color: 'var(--text-muted)' }}></i>
        <input 
          type="text" 
          placeholder="Buscar tienda o servicio..." 
          style={{ 
            background: 'transparent', 
            border: 'none', 
            outline: 'none', 
            color: '#fff',
            width: '100%',
            fontSize: '0.95rem'
          }} 
        />
      </div>

      {/* Categories Grid */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '15px' }}>Categorías populares</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        {[
          { title: 'Rappi / iFood', desc: 'Domicilios', price: 'Desde $12.000', icon: 'fa-pizza-slice', color: '#ff5a00' },
          { title: 'Tiendas online', desc: 'E-commerce', price: 'Múltiples', icon: 'fa-shopping-bag', color: '#0ea5e9' },
          { title: 'Servicios', desc: 'Luz, agua, gas', price: 'Pago fácil', icon: 'fa-bolt', color: '#f59e0b' },
          { title: 'Recargas', desc: 'Cualquier operador', price: 'Desde $5.000', icon: 'fa-mobile-screen', color: '#8b5cf6' }
        ].map((cat, i) => (
          <div key={i} className="glass" style={{ padding: '20px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ 
              width: '45px', 
              height: '45px', 
              borderRadius: '14px', 
              background: `${cat.color}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className={`fas ${cat.icon}`} style={{ color: cat.color, fontSize: '1.2rem' }}></i>
            </div>
            <div>
              <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>{cat.title}</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{cat.desc}</p>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '500', marginTop: '10px' }}>{cat.price}</p>
            <button className="glass" style={{ 
              marginTop: '5px', 
              padding: '8px', 
              borderRadius: '12px', 
              border: 'none', 
              color: '#fff', 
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}>Pagar</button>
          </div>
        ))}
      </div>

      {/* Virtual Card Summary */}
      <div className="glass-premium" style={{ padding: '24px', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
           <p style={{ fontSize: '0.75rem', opacity: 0.6, marginBottom: '5px' }}>Tarjeta virtual activa</p>
           <p style={{ letterSpacing: '2px', fontWeight: '600' }}>•••• •••• •••• 8821</p>
        </div>
        <div className="glass" style={{ padding: '8px 15px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>
          CVV: 342
        </div>
      </div>
    </div>
  );
};

export default Payments;
