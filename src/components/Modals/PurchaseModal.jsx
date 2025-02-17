import React from 'react';

const PurchaseModal = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Confirmar compra</h2>z
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>¿Estás seguro que deseas comprar <strong>{product.name}</strong>?</p>
          <p>Precio: <strong>${product.price}</strong></p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;