import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PaymentSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Aquí puedes obtener el producto por ID y mostrar el resumen
  const product = { id, name: 'Vehículo 1', price: 200 }; // Simulación de producto

  const handleConfirm = () => {
    // Redirigir a Discord o a la página de confirmación
    window.location.href = 'https://discord.com'; // Cambia esto a la URL de tu servidor de Discord
  };

  return (
    <div>
      <h2>Resumen de Pago</h2>
      <p>Producto: {product.name}</p>
      <p>Total: ${product.price}</p>
      <button onClick={() => navigate(-1)}>Volver atrás</button>
      <button onClick={handleConfirm}>Confirmar</button>
    </div>
  );
};

export default PaymentSummary;
