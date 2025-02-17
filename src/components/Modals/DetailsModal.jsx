import React from 'react';

const DetailsModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content details">
        <div className="modal-header">
          <h2>Características de {product.name}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="benefits-table">
          {product.benefits && product.benefits.map((benefit, index) => (
            <div key={index} className="benefit-row">
              <span className="benefit-name">{benefit.name}</span>
              <span className="benefit-value">{benefit.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;