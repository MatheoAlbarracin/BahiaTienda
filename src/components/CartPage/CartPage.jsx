import React, { useContext } from 'react';
import "./CartPage.css"
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Asegúrate de usar useNavigate
import { CategoryContext } from '../../components/CategoryContext/CategoryContext'; // Importa el contexto
import Cart from '../Cart/Cart'; // Asegúrate de importar el componente Cart

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { setSelectedCategory } = useContext(CategoryContext); // Usa el contexto
  const navigate = useNavigate(); // Usa useNavigate

  const handleBuy = () => {
    // Aquí puedes agregar la lógica para procesar la compra
    window.open('https://discord.com', '_blank'); // Redirige a Discord
    clearCart(); // Limpiar el carrito después de la compra
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default CartPage;