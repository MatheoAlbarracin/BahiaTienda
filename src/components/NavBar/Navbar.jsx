import React, { useContext, useState } from 'react';
import './Navbar.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartDropdown from '../Cart/CartDropdown';
import { CategoryContext } from '../CategoryContext/CategoryContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setCartOpen] = useState(false);
  const { setSelectedCategory } = useContext(CategoryContext);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const handleCategoryClick = (category) => {
    console.log("Categoría seleccionada:", category);
    setSelectedCategory(category);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => handleCategoryClick('VIPS')}><Link to="#">VIPS</Link></li>
        <li onClick={() => handleCategoryClick('Vehículos')}><Link to="#">Vehículos</Link></li>
        <li onClick={() => handleCategoryClick('Organizaciones')}><Link to="#">Organizaciones</Link></li>
        <li onClick={() => handleCategoryClick('Extras')}><Link to="#">Extras</Link></li>
      </ul>
      <div className="cart-icon" onClick={toggleCart}>
        🛒 {cartItems.length > 0 && <span>({cartItems.length})</span>}
      </div>
      <CartDropdown isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;