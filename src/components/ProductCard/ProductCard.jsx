import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ConfirmModal from '../Modals/ConfirmModal';
import DetailsModal from '../Modals/DetailsModal';
import { useNavigate } from 'react-router-dom';
import PurchaseModal from '../Modals/PurchaseModal';
import Alert from '../Alert/Alert';
import './ProductCard.css';
import { CartContext } from '../../context/CartContext';
import ConfirmationMessage from '../ConfirmationMessage/ConfirmationMessage';
import DetailsProducts from '../DetailsProducts/DetailsProducts'; 

const ProductCard = ({ product }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [isDetailsOpen, setDetailsOpen] = useState(false); 

  const handleBuy = () => {
    navigate(`/process-buy/${product.id}`);
  };

  const handleConfirmPurchase = () => {
    window.location.href = 'https://discord.com/your-discord-link';
  };

  const handleAddToCart = () => {
    addToCart(product);
    setConfirmationMessage(`¡${product.name} agregado al carrito!`);
    setTimeout(() => setConfirmationMessage(''), 3000);
  };

  const handleOpenDetails = () => {
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  return (
    <div className="product-card">
      <div className="discount-badge">-25%</div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">
        <span className="current-price">${product.price}</span>
        <span className="original-price">${product.originalPrice}</span>
      </div>
      <div className="usd-price">$ USD {product.usdPrice}</div>
      <div className="card-buttons">
        <button className="btn-details" onClick={handleOpenDetails}>
          🔍 Detalles
        </button>
        <button className="btn-buy" onClick={handleAddToCart}>
          Comprar
        </button>
      </div>

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmPurchase}
        productName={product.name}
      />

      <DetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        product={product}
      />

      <PurchaseModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={handleConfirmPurchase} 
        product={product} 
      />

      <ConfirmationMessage message={confirmationMessage} />

      {/* Renderizar el modal de detalles usando Portals */}
      {isDetailsOpen && (
        <DetailsProducts 
          isOpen={isDetailsOpen} 
          onClose={handleCloseDetails} 
          title={`Detalles de ${product.name}`} 
          content={product.details} 
        />
      )}
    </div>
  );
};

export default ProductCard;