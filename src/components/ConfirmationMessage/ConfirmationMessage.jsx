import React from 'react';
import './ConfirmationMessage.css'; // Asegúrate de tener este archivo CSS

const ConfirmationMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="confirmation-message">
      {message}
    </div>
  );
};

export default ConfirmationMessage; 