import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const Login = () => {
  const [pin, setPin] = useState('');
  const { login } = useContext(AppContext);
  const [error, setError] = useState(false);

  const handleNumber = (num) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 4) {
      const success = login(pin);
      if (!success) {
        setPin('');
        setError(true);
        // Shake animation could go here
      }
    }
  }, [pin, login]);

  return (
    <div className="login-screen" style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="login-box glass-premium animate-fade-in">
        <h2 style={{ marginBottom: '10px' }}>NovaPay</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Ingresa tu PIN de seguridad
        </p>

        <div className="pin-input-container">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`pin-dot ${pin.length >= i ? 'active' : ''} ${error ? 'error' : ''}`} 
            />
          ))}
        </div>

        {error && (
          <p style={{ color: '#ff4d4d', textAlign: 'center', fontSize: '0.8rem', marginBottom: '20px' }}>
            PIN incorrecto. Inténtalo de nuevo.
          </p>
        )}

        <div className="numpad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className="num-btn glass" onClick={() => handleNumber(num.toString())}>
              {num}
            </div>
          ))}
          <div className="num-btn" style={{ visibility: 'hidden' }}></div>
          <div key="0" className="num-btn glass" onClick={() => handleNumber('0')}>
            0
          </div>
          <div className="num-btn glass" onClick={handleDelete}>
            <i className="fas fa-backspace"></i>
          </div>
        </div>

        <p className="signup-link" style={{ marginTop: '30px' }}>
          ¿Olvidaste tu PIN? <a href="#">Recuperar</a>
        </p>
      </div>

      <style>{`
        .pin-dot.error {
          background: #ff4d4d !important;
          box-shadow: 0 0 15px #ff4d4d !important;
        }
      `}</style>
    </div>
  );
};

export default Login;
