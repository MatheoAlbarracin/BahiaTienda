import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ConfirmModal from '../Modals/ConfirmModal';
import DetailsModal from '../Modals/DetailsModal';
import { Link, useNavigate } from 'react-router-dom';
import PurchaseModal from '../Modals/PurchaseModal';
import Alert from '../Alert/Alert'; // Asegúrate de que la ruta sea correcta
import './ProductCard.css'; // Asegúrate de que la ruta sea correcta
import { CartContext } from '../../context/CartContext'; // Importa el contexto
import ConfirmationMessage from '../ConfirmationMessage/ConfirmationMessage'; // Asegúrate de que la ruta sea correcta
import Modal from '../Modal/Modal'; // Asegúrate de que la ruta sea correcta
import DetailsProducts from '../DetailsProducts/DetailsProducts'; // Asegúrate de que la ruta sea correcta

const ProductCard = ({ product }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Usa el contexto
  const [isDetailsOpen, setDetailsOpen] = useState(false); // Estado para el nuevo modal

  const handleBuy = () => {
    // Redirigir a la página de proceso de compra
    navigate(`/process-buy/${product.id}`);
  };

  const handleConfirmPurchase = () => {
    window.location.href = 'https://discord.com/your-discord-link';
  };

  const handleAddToCart = () => {
    addToCart(product);
    setConfirmationMessage(`¡${product.name} agregado al carrito!`);
    setTimeout(() => setConfirmationMessage(''), 3000); // Mensaje desaparece después de 3 segundos
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
        onClose={handleCloseModal} 
        onConfirm={handleConfirmPurchase} 
        product={product} 
      />

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        title={`Detalles de ${product.name}`} 
        content={product.details} // Asegúrate de que el objeto product tenga una propiedad 'details'
      />

      <DetailsProducts 
        isOpen={isDetailsOpen} 
        onClose={handleCloseDetails} 
        title={`Detalles de ${product.name}`} 
        content={product.details} // Asegúrate de que el objeto product tenga una propiedad 'details'
      />

      <ConfirmationMessage message={confirmationMessage} /> {/* Mostrar mensaje de confirmación */}
    </div>
  );
};

export default ProductCard;
