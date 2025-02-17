const ConfirmModal = ({ isOpen, onClose, onConfirm, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmar compra</h2>
        <p>
          ¿Estás seguro que deseas comprar {productName}? Al confirmar, serás
          redirigido a la verificación de la compra. Recuerda que los pagos
          se procesan únicamente a través de Discord.
        </p>
        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
