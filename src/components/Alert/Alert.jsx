import React from 'react';
import './Alert.css'; // Asegúrate de tener este archivo CSS

const Alert = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-content">
        <h2 style={{ color: '#fff' }}>Confirmar compra</h2>
        <p style={{ color: '#fff' }}>¿Estás seguro que deseas comprar <strong>{product.name}</strong>?</p>
        <p style={{ color: '#fff' }}>Precio: <strong>${product.price}</strong></p>
        <div className="alert-footer">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
