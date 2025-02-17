import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import discordLogo from '../../assets/Discord.png'; // Ruta al logo de Discord
import './Cart.css'; // Asegúrate de tener este archivo CSS
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Resumen de Compra</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>El carrito está vacío.</p>
          <button className="back-button" onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <p>Subtotal: ${total}</p>
          <div className="button-group">
            <button className="buy-button" onClick={() => navigate('/process-buy')}>Comprar</button>
            <button className="clear-button">Eliminar todo</button>
            <button className="back-button" onClick={() => navigate('/')}>Volver al inicio</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 