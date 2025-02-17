import React from 'react';
import './DetailsProducts.css'; // Asegúrate de tener este archivo CSS

const DetailsProducts = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="details-overlay">
      <div className="details-content">
        <h2>{title}</h2>
        <div className="details-description">
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item, index) => (
                <tr key={index}>
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="details-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default DetailsProducts;
