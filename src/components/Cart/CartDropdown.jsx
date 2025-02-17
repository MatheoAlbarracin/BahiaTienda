import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Cambia useHistory por useNavigate
import './Cart.css'; // Asegúrate de que este archivo CSS esté importado

const CartDropdown = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Usa useNavigate

  const handleGoToCart = () => {
    navigate('/cart'); // Redirige a la página del carrito
    onClose(); // Cierra el dropdown
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0); // Calcular subtotal

  return (
    <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Subtotal: ${subtotal}</h3>
          <button onClick={handleGoToCart}>Ir al carrito</button>
          <button onClick={clearCart}>Eliminar todo</button>
        </div>
      )}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default CartDropdown; 