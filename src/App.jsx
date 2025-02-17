import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import logo from './assets/logo.png'; // Aquí pondrás tu imagen
import Navbar from './components/NavBar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import CartPage from './components/CartPage/CartPage';
import PaymentSummary from './components/PaymentSummary/PaymentSummary'; // Asegúrate de que la ruta sea correcta
import ProcessBuy from './components/ProcessBuy/ProcessBuy'; // Asegúrate de que la ruta sea correcta
import Cart from './components/Cart/Cart'; // Asegúrate de crear este componente
import { CartProvider } from './context/CartContext'; // Importa el contexto
import { CategoryProvider } from './components/CategoryContext/CategoryContext'; // Importa el proveedor
import Footer from './components/Footer/Footer';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('VIPS');

  return (
    <CategoryProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <div className="header">
              <img src={logo} alt="Bahia Logo" className="logo" />
              <h1>Tienda <span>Bahia</span></h1>
              <p>Explora nuestra colección de productos exclusivos para mejorar tu experiencia en el servidor.</p>
            </div>
            <Routes>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/" element={<><Navbar /><ProductGrid /></>} />
              <Route path="/process-buy" element={<ProcessBuy />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </CategoryProvider>
  );
};

export default App;