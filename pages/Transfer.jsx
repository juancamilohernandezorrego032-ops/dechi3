import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Transfer = () => {
  const { user } = useContext(AppContext);
  const [amount, setAmount] = useState('0');
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState(null);

  const handleNumber = (num) => {
    if (amount === '0') setAmount(num);
    else setAmount(prev => prev + num);
  };

  const handleDelete = () => {
    if (amount.length <= 1) setAmount('0');
    else setAmount(prev => prev.slice(0, -1));
  };

  const handleTransfer = () => {
    if (amount === '0') return;
    alert(`Transferencia de $${amount} a ${selectedBank || 'un contacto'} exitosa!`);
    navigate('/');
  };

  return (
    <div className="transfer-page animate-fade-in">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
        <div onClick={() => navigate('/')} className="glass" style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <h2>Transferir dinero</h2>
      </div>

      {/* Contacts */}
      <div style={{ marginBottom: '30px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '15px' }}>Contactos frecuentes</p>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
          {[
            { name: 'Laura G.', initials: 'LG', color: '#6366f1' },
            { name: 'Juan M.', initials: 'JM', color: '#10b981' },
            { name: 'Sara R.', initials: 'SR', color: '#f59e0b' },
            { name: 'Nuevo', initials: '+', color: 'rgba(255,255,255,0.1)' }
          ].map((c, i) => (
            <div key={i} style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: c.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '8px',
                border: '2px solid var(--glass-border)'
              }}>
                {c.initials}
              </div>
              <p style={{ fontSize: '0.75rem' }}>{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Banks Selection */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Enviar a banco / billetera</p>
        {[
          { name: 'Nequi', icon: 'N', color: '#ff005a' },
          { name: 'Bancolombia', icon: 'BC', color: '#ffdd00', textColor: '#000' },
          { name: 'Daviplata', icon: 'D', color: '#db0000' }
        ].map((bank, i) => (
          <div key={i} 
               onClick={() => setSelectedBank(bank.name)}
               className={`glass ${selectedBank === bank.name ? 'active-bank' : ''}`} 
               style={{ 
            padding: '16px', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '12px', 
                background: bank.color,
                color: bank.textColor || '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '0.9rem'
              }}>
                {bank.icon}
              </div>
              <p style={{ fontWeight: '500' }}>{bank.name}</p>
            </div>
            <i className="fas fa-chevron-right" style={{ fontSize: '0.8rem', opacity: 0.5 }}></i>
          </div>
        ))}
      </div>

      {/* Amount Display */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '10px' }}>Monto a transferir</p>
        <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>${parseInt(amount).toLocaleString('es-CO')}</h2>
        <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Disponible: ${user.balance.toLocaleString('es-CO')}</p>
      </div>

      {/* Custom Numpad */}
      <div className="numpad" style={{ maxWidth: '300px', margin: '0 auto 30px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map((num) => (
          <div key={num} className="num-btn" style={{ height: '55px', borderRadius: '15px' }} onClick={() => num === '.' ? {} : handleNumber(num.toString())}>
            {num}
          </div>
        ))}
        <div className="num-btn" onClick={handleDelete}>
          <i className="fas fa-backspace"></i>
        </div>
      </div>

      {/* CTA */}
      <button 
        onClick={handleTransfer}
        style={{
          width: '100%',
          padding: '18px',
          borderRadius: '20px',
          border: 'none',
          background: 'var(--primary)',
          color: '#fff',
          fontWeight: '700',
          fontSize: '1.1rem',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)'
        }}>
        Transferir ahora →
      </button>

      <style>{`
        .active-bank {
          border-color: var(--primary) !important;
          background: rgba(99, 102, 241, 0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Transfer;
